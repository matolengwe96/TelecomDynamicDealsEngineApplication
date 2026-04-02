$ErrorActionPreference = 'Stop'

$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$logDir = Join-Path $repoRoot '.local-logs'
$authLog = Join-Path $logDir 'auth-service.log'
$gatewayLog = Join-Path $logDir 'api-gateway.log'

if (-not (Test-Path $logDir)) {
  throw "Log directory not found: $logDir. Start services first with 'pnpm dev:local:auth-gateway'."
}

if (-not (Test-Path $authLog)) {
  New-Item -ItemType File -Path $authLog | Out-Null
}

if (-not (Test-Path $gatewayLog)) {
  New-Item -ItemType File -Path $gatewayLog | Out-Null
}

Write-Host "Tailing logs from:"
Write-Host "  - $authLog"
Write-Host "  - $gatewayLog"
Write-Host "Press Ctrl+C to stop."

Get-Content -Path $authLog, $gatewayLog -Wait -Tail 40
