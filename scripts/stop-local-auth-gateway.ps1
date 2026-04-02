$ErrorActionPreference = 'SilentlyContinue'

$ports = @(3000, 3011)
$killed = @()

foreach ($port in $ports) {
  $listeners = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue
  foreach ($listener in $listeners) {
    $pidToKill = $listener.OwningProcess
    if ($pidToKill -and ($killed -notcontains $pidToKill)) {
      Stop-Process -Id $pidToKill -Force
      $killed += $pidToKill
    }
  }
}

$containerName = 'dde_postgres_local'
$running = docker ps --format "{{.Names}}" | Select-String -SimpleMatch $containerName
if ($running) {
  docker stop $containerName | Out-Null
}

Write-Host 'Stopped local auth-service/api-gateway listeners on ports 3011/3000 and stopped dde_postgres_local (if running).'
