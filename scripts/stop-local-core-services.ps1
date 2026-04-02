$ErrorActionPreference = 'SilentlyContinue'

$ports = @(3002, 3003, 3004, 3005, 3006, 3007, 3008, 3009, 3010, 3012)
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

if ($killed.Count -eq 0) {
  Write-Host 'No local core services were listening on ports 3002/3003/3004/3005/3006/3007/3008/3009/3010/3012.'
} else {
  Write-Host "Stopped processes: $($killed -join ', ')"
}
