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

function Invoke-Build([string]$workingDir) {
  Push-Location $workingDir
  try {
    Invoke-External -action { pnpm run build } -errorMessage "Build failed in $workingDir"
  }
  finally {
    Pop-Location
  }
}

function Initialize-AuthDatabase([string]$authDir, [string]$databaseUrl) {
  Push-Location $authDir
  try {
    $env:DATABASE_URL = $databaseUrl
    Invoke-External -action { pnpm exec prisma db push --accept-data-loss --skip-generate } -errorMessage 'Prisma db push failed'
    Invoke-External -action { pnpm run db:seed } -errorMessage 'Prisma seed failed'
  }
  finally {
    Remove-Item Env:DATABASE_URL -ErrorAction SilentlyContinue
    Pop-Location
  }
}

function Start-DetachedNodeService(
  [string]$workingDir,
  [string]$nodeEntry,
  [hashtable]$envVars,
  [string]$logPath
) {
  $envLines = $envVars.GetEnumerator() | ForEach-Object { "set $($_.Key)=$($_.Value)" }
  $commandParts = @(
    "cd /d `"$workingDir`""
  ) + $envLines + @(
    "node $nodeEntry >> `"$logPath`" 2>&1"
  )
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

$authDir = Join-Path $repoRoot 'apps\auth-service'
$gatewayDir = Join-Path $repoRoot 'apps\api-gateway'
$authDbUrl = 'postgresql://dde_user:dde_pass@localhost:55432/dde_auth?schema=public'

$authLog = Join-Path $logDir 'auth-service.log'
$gatewayLog = Join-Path $logDir 'api-gateway.log'

"" | Set-Content -Path $authLog
"" | Set-Content -Path $gatewayLog

Invoke-Build -workingDir $authDir
Invoke-Build -workingDir $gatewayDir
Initialize-AuthDatabase -authDir $authDir -databaseUrl $authDbUrl

Start-DetachedNodeService -workingDir $authDir -nodeEntry 'dist/apps/auth-service/src/main.js' -envVars @{
  PORT = '3011'
  DATABASE_URL = $authDbUrl
  JWT_SECRET = 'change-me-in-dev'
  INTERNAL_SECRET = 'internal-dev-secret'
} -logPath $authLog

Wait-ForPort -port 3011 -timeoutSeconds 45 -serviceName 'auth-service' -logPath $authLog

Start-DetachedNodeService -workingDir $gatewayDir -nodeEntry 'dist/main.js' -envVars @{
  PORT = '3000'
  AUTH_SERVICE_URL = 'http://localhost:3011'
  JWT_SECRET = 'change-me-in-dev'
  INTERNAL_SERVICE_SECRET = 'internal-dev-secret'
} -logPath $gatewayLog

Wait-ForPort -port 3000 -timeoutSeconds 45 -serviceName 'api-gateway' -logPath $gatewayLog

Write-Host 'Started local auth-service and api-gateway in detached processes.'
Write-Host 'Auth:    http://localhost:3011/v1/auth/login'
Write-Host 'Gateway: http://localhost:3000/api/v1/auth/login'
Write-Host 'Health:  http://localhost:3000/api/v1/health'
Write-Host "Logs:    $logDir"
