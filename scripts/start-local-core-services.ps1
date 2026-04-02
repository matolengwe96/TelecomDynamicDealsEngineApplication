$ErrorActionPreference = 'Stop'

$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$dbContainerName = 'dde_postgres_local'
$logDir = Join-Path $repoRoot '.local-logs'

function Invoke-External([scriptblock]$action, [string]$errorMessage) {
  & $action
  if ($LASTEXITCODE -ne 0) {
    throw "$errorMessage (exit code: $LASTEXITCODE)"
  }
}

function Ensure-LocalDbContainer {
  $exists = docker ps -a --format "{{.Names}}" | Select-String -SimpleMatch $dbContainerName
  if (-not $exists) {
    docker run -d --name $dbContainerName -e POSTGRES_USER=dde_user -e POSTGRES_PASSWORD=dde_pass -e POSTGRES_DB=dde_auth -p 55432:5432 postgres:16-alpine | Out-Null
  }

  $running = docker ps --format "{{.Names}}" | Select-String -SimpleMatch $dbContainerName
  if (-not $running) {
    docker start $dbContainerName | Out-Null
  }
}

function Ensure-Database([string]$dbName) {
  $checkSql = "SELECT 1 FROM pg_database WHERE datname = '$dbName';"
  $exists = docker exec $dbContainerName psql -U dde_user -d postgres -tAc $checkSql
  $existsText = ("$exists").Trim()
  if (-not $existsText) {
    docker exec $dbContainerName psql -U dde_user -d postgres -c "CREATE DATABASE $dbName;" | Out-Null
  }
}

function Invoke-Build([string]$workingDir) {
  Push-Location $workingDir
  try {
    Invoke-External -action { pnpm run build } -errorMessage "Build failed in $workingDir"
  }
  finally {
    Pop-Location
  }
}

function Initialize-Database([string]$workingDir, [string]$dbEnvName, [string]$dbUrl) {
  Push-Location $workingDir
  try {
    Set-Item -Path "Env:$dbEnvName" -Value $dbUrl
    Invoke-External -action { pnpm exec prisma db push --accept-data-loss } -errorMessage "Prisma db push failed in $workingDir"
    Invoke-External -action { pnpm run db:seed } -errorMessage "Prisma seed failed in $workingDir"
  }
  finally {
    Remove-Item "Env:$dbEnvName" -ErrorAction SilentlyContinue
    Pop-Location
  }
}

function Start-DetachedNodeService([string]$workingDir, [string]$nodeEntry, [hashtable]$envVars, [string]$logPath) {
  $envLines = $envVars.GetEnumerator() | ForEach-Object { "set $($_.Key)=$($_.Value)" }
  $commandParts = @("cd /d `"$workingDir`"") + $envLines + @("node $nodeEntry >> `"$logPath`" 2>&1")
  $command = $commandParts -join ' && '
  Start-Process cmd.exe -WindowStyle Hidden -ArgumentList @('/c', $command) | Out-Null
}

function Wait-ForPort([int]$port, [int]$timeoutSeconds, [string]$serviceName, [string]$logPath) {
  $deadline = (Get-Date).AddSeconds($timeoutSeconds)
  while ((Get-Date) -lt $deadline) {
    $listener = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue
    if ($listener) {
      return
    }
    Start-Sleep -Milliseconds 500
  }

  Write-Error "$serviceName did not start on port $port within $timeoutSeconds seconds. See log: $logPath"
}

if (-not (Test-Path $logDir)) {
  New-Item -ItemType Directory -Path $logDir | Out-Null
}

Ensure-LocalDbContainer
Ensure-Database -dbName 'dde_cycle'
Ensure-Database -dbName 'dde_catalog'

$cycleDir = Join-Path $repoRoot 'apps\cycle-service'
$catalogDir = Join-Path $repoRoot 'apps\catalog-service'
$tradelistDir = Join-Path $repoRoot 'apps\tradelist-service'
$oemDir = Join-Path $repoRoot 'apps\oem-negotiation-service'
$headlineDir = Join-Path $repoRoot 'apps\headline-service'
$approvalDir = Join-Path $repoRoot 'apps\approval-service'
$channelDealsDir = Join-Path $repoRoot 'apps\channel-deals-service'
$jobDir = Join-Path $repoRoot 'apps\job-service'
$notificationDir = Join-Path $repoRoot 'apps\notification-service'
$auditDir = Join-Path $repoRoot 'apps\audit-service'

$cycleDbUrl = 'postgresql://dde_user:dde_pass@localhost:55432/dde_cycle?schema=public'
$catalogDbUrl = 'postgresql://dde_user:dde_pass@localhost:55432/dde_catalog?schema=public'

$cycleLog = Join-Path $logDir 'cycle-service.log'
$catalogLog = Join-Path $logDir 'catalog-service.log'
$tradelistLog = Join-Path $logDir 'tradelist-service.log'
$oemLog = Join-Path $logDir 'oem-negotiation-service.log'
$headlineLog = Join-Path $logDir 'headline-service.log'
$approvalLog = Join-Path $logDir 'approval-service.log'
$channelDealsLog = Join-Path $logDir 'channel-deals-service.log'
$jobLog = Join-Path $logDir 'job-service.log'
$notificationLog = Join-Path $logDir 'notification-service.log'
$auditLog = Join-Path $logDir 'audit-service.log'

"" | Set-Content -Path $cycleLog
"" | Set-Content -Path $catalogLog
"" | Set-Content -Path $tradelistLog
"" | Set-Content -Path $oemLog
"" | Set-Content -Path $headlineLog
"" | Set-Content -Path $approvalLog
"" | Set-Content -Path $channelDealsLog
"" | Set-Content -Path $jobLog
"" | Set-Content -Path $notificationLog
"" | Set-Content -Path $auditLog

Initialize-Database -workingDir $cycleDir -dbEnvName 'CYCLE_DB_URL' -dbUrl $cycleDbUrl
Initialize-Database -workingDir $catalogDir -dbEnvName 'CATALOG_DB_URL' -dbUrl $catalogDbUrl

Invoke-Build -workingDir $cycleDir
Invoke-Build -workingDir $catalogDir
Invoke-Build -workingDir $tradelistDir
Invoke-Build -workingDir $oemDir
Invoke-Build -workingDir $headlineDir
Invoke-Build -workingDir $approvalDir
Invoke-Build -workingDir $channelDealsDir
Invoke-Build -workingDir $jobDir
Invoke-Build -workingDir $notificationDir
Invoke-Build -workingDir $auditDir

Start-DetachedNodeService -workingDir $cycleDir -nodeEntry 'dist/apps/cycle-service/src/main.js' -envVars @{
  PORT = '3002'
  CYCLE_DB_URL = $cycleDbUrl
  INTERNAL_SECRET = 'internal-dev-secret'
} -logPath $cycleLog

Wait-ForPort -port 3002 -timeoutSeconds 45 -serviceName 'cycle-service' -logPath $cycleLog

Start-DetachedNodeService -workingDir $catalogDir -nodeEntry 'dist/apps/catalog-service/src/main.js' -envVars @{
  PORT = '3003'
  CATALOG_DB_URL = $catalogDbUrl
  INTERNAL_SECRET = 'internal-dev-secret'
} -logPath $catalogLog

Wait-ForPort -port 3003 -timeoutSeconds 45 -serviceName 'catalog-service' -logPath $catalogLog

Start-DetachedNodeService -workingDir $tradelistDir -nodeEntry 'dist/apps/tradelist-service/src/main.js' -envVars @{
  PORT = '3004'
  INTERNAL_SECRET = 'internal-dev-secret'
} -logPath $tradelistLog

Wait-ForPort -port 3004 -timeoutSeconds 45 -serviceName 'tradelist-service' -logPath $tradelistLog

Start-DetachedNodeService -workingDir $oemDir -nodeEntry 'dist/apps/oem-negotiation-service/src/main.js' -envVars @{
  PORT = '3005'
  INTERNAL_SECRET = 'internal-dev-secret'
} -logPath $oemLog

Wait-ForPort -port 3005 -timeoutSeconds 45 -serviceName 'oem-negotiation-service' -logPath $oemLog

Start-DetachedNodeService -workingDir $headlineDir -nodeEntry 'dist/apps/headline-service/src/main.js' -envVars @{
  PORT = '3006'
  INTERNAL_SECRET = 'internal-dev-secret'
} -logPath $headlineLog

Wait-ForPort -port 3006 -timeoutSeconds 45 -serviceName 'headline-service' -logPath $headlineLog

Start-DetachedNodeService -workingDir $approvalDir -nodeEntry 'dist/apps/approval-service/src/main.js' -envVars @{
  PORT = '3007'
  INTERNAL_SECRET = 'internal-dev-secret'
} -logPath $approvalLog

Wait-ForPort -port 3007 -timeoutSeconds 45 -serviceName 'approval-service' -logPath $approvalLog

Start-DetachedNodeService -workingDir $channelDealsDir -nodeEntry 'dist/apps/channel-deals-service/src/main.js' -envVars @{
  PORT = '3008'
  INTERNAL_SECRET = 'internal-dev-secret'
} -logPath $channelDealsLog

Wait-ForPort -port 3008 -timeoutSeconds 45 -serviceName 'channel-deals-service' -logPath $channelDealsLog

Start-DetachedNodeService -workingDir $jobDir -nodeEntry 'dist/apps/job-service/src/main.js' -envVars @{
  PORT = '3009'
  INTERNAL_SECRET = 'internal-dev-secret'
} -logPath $jobLog

Wait-ForPort -port 3009 -timeoutSeconds 45 -serviceName 'job-service' -logPath $jobLog

Start-DetachedNodeService -workingDir $notificationDir -nodeEntry 'dist/apps/notification-service/src/main.js' -envVars @{
  PORT = '3010'
  INTERNAL_SECRET = 'internal-dev-secret'
} -logPath $notificationLog

Wait-ForPort -port 3010 -timeoutSeconds 45 -serviceName 'notification-service' -logPath $notificationLog

Start-DetachedNodeService -workingDir $auditDir -nodeEntry 'dist/apps/audit-service/src/main.js' -envVars @{
  PORT = '3012'
  INTERNAL_SECRET = 'internal-dev-secret'
} -logPath $auditLog

Wait-ForPort -port 3012 -timeoutSeconds 45 -serviceName 'audit-service' -logPath $auditLog

Write-Host 'Started all 10 local core services in detached processes.'
Write-Host 'Gateway (requires auth+gateway running separately):'
Write-Host '  Cycles:          http://localhost:3000/api/v1/cycles'
Write-Host '  Catalog:         http://localhost:3000/api/v1/catalog/devices'
Write-Host '  Trade List:      http://localhost:3000/api/v1/tradelist'
Write-Host '  OEM:             http://localhost:3000/api/v1/oem-negotiations'
Write-Host '  Headlines:       http://localhost:3000/api/v1/headlines'
Write-Host '  Approvals:       http://localhost:3000/api/v1/approvals'
Write-Host '  Channel Deals:   http://localhost:3000/api/v1/channel-deals'
Write-Host '  Jobs:            http://localhost:3000/api/v1/jobs'
Write-Host '  Notifications:   http://localhost:3000/api/v1/notifications'
Write-Host '  Audit:           http://localhost:3000/api/v1/audit'
Write-Host "Logs: $logDir"
