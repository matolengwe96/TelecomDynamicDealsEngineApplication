$ErrorActionPreference = 'Stop'

$loginUrl = 'http://localhost:3000/api/v1/auth/login'
$cyclesUrl = 'http://localhost:3000/api/v1/cycles?page=1&limit=5'
$devicesUrl = 'http://localhost:3000/api/v1/catalog/devices?page=1&limit=5'
$tradelistUrl = 'http://localhost:3000/api/v1/tradelist?page=1&limit=5'
$oemUrl = 'http://localhost:3000/api/v1/oem-negotiations?page=1&limit=5'
$headlineUrl = 'http://localhost:3000/api/v1/headlines?page=1&limit=5'
$approvalUrl = 'http://localhost:3000/api/v1/approvals?page=1&limit=5'
$channelDealsUrl = 'http://localhost:3000/api/v1/channel-deals?page=1&limit=5'
$jobUrl = 'http://localhost:3000/api/v1/jobs?page=1&limit=5'
$notificationUrl = 'http://localhost:3000/api/v1/notifications?page=1&limit=5'
$auditUrl = 'http://localhost:3000/api/v1/audit?page=1&limit=5'

$email = $env:SMOKE_LOGIN_EMAIL
if (-not $email) { $email = 'admin@dde.local' }
$password = $env:SMOKE_LOGIN_PASSWORD
if (-not $password) { $password = 'Admin@DDE1!' }

$payload = @{ email = $email; password = $password } | ConvertTo-Json -Compress

function Invoke-Check([string]$name, [scriptblock]$action) {
  try {
    & $action
  } catch {
    Write-Host "[FAIL] $name - $($_.Exception.Message)"
    throw
  }
}

$accessToken = $null

Invoke-Check -name 'Login through gateway' -action {
  $response = Invoke-WebRequest -Uri $loginUrl -UseBasicParsing -Method POST -ContentType 'application/json' -Body $payload
  if ($response.StatusCode -ne 200) {
    throw "Unexpected login status: $($response.StatusCode)"
  }

  $body = $response.Content | ConvertFrom-Json
  if (-not $body.data.accessToken) {
    throw 'Missing access token from login response.'
  }

  $script:accessToken = $body.data.accessToken
  Write-Host "[PASS] Login: $($response.StatusCode)"
}

Invoke-Check -name 'Cycles list via gateway' -action {
  $response = Invoke-WebRequest -Uri $cyclesUrl -UseBasicParsing -Method GET -Headers @{ Authorization = "Bearer $script:accessToken" }
  if ($response.StatusCode -ne 200) {
    throw "Unexpected cycles status: $($response.StatusCode)"
  }

  $body = $response.Content | ConvertFrom-Json
  if (-not $body.success) {
    throw 'Cycles response did not indicate success.'
  }

  Write-Host "[PASS] /cycles: $($response.StatusCode)"
}

Invoke-Check -name 'Catalog devices list via gateway' -action {
  $response = Invoke-WebRequest -Uri $devicesUrl -UseBasicParsing -Method GET -Headers @{ Authorization = "Bearer $script:accessToken" }
  if ($response.StatusCode -ne 200) {
    throw "Unexpected catalog devices status: $($response.StatusCode)"
  }

  $body = $response.Content | ConvertFrom-Json
  if (-not $body.success) {
    throw 'Catalog devices response did not indicate success.'
  }

  Write-Host "[PASS] /catalog/devices: $($response.StatusCode)"
}

Invoke-Check -name 'Tradelist list via gateway' -action {
  $response = Invoke-WebRequest -Uri $tradelistUrl -UseBasicParsing -Method GET -Headers @{ Authorization = "Bearer $script:accessToken" }
  if ($response.StatusCode -ne 200) {
    throw "Unexpected tradelist status: $($response.StatusCode)"
  }

  $body = $response.Content | ConvertFrom-Json
  if (-not $body.success) {
    throw 'Tradelist response did not indicate success.'
  }

  Write-Host "[PASS] /tradelist: $($response.StatusCode)"
}

Invoke-Check -name 'OEM negotiations list via gateway' -action {
  $response = Invoke-WebRequest -Uri $oemUrl -UseBasicParsing -Method GET -Headers @{ Authorization = "Bearer $script:accessToken" }
  if ($response.StatusCode -ne 200) {
    throw "Unexpected oem-negotiations status: $($response.StatusCode)"
  }

  $body = $response.Content | ConvertFrom-Json
  if (-not $body.success) {
    throw 'OEM negotiations response did not indicate success.'
  }

  Write-Host "[PASS] /oem-negotiations: $($response.StatusCode)"
}

Invoke-Check -name 'Headlines list via gateway' -action {
  $response = Invoke-WebRequest -Uri $headlineUrl -UseBasicParsing -Method GET -Headers @{ Authorization = "Bearer $script:accessToken" }
  if ($response.StatusCode -ne 200) {
    throw "Unexpected headlines status: $($response.StatusCode)"
  }

  $body = $response.Content | ConvertFrom-Json
  if (-not $body.success) {
    throw 'Headlines response did not indicate success.'
  }

  Write-Host "[PASS] /headlines: $($response.StatusCode)"
}

Invoke-Check -name 'Approvals list via gateway' -action {
  $response = Invoke-WebRequest -Uri $approvalUrl -UseBasicParsing -Method GET -Headers @{ Authorization = "Bearer $script:accessToken" }
  if ($response.StatusCode -ne 200) {
    throw "Unexpected approvals status: $($response.StatusCode)"
  }

  $body = $response.Content | ConvertFrom-Json
  if (-not $body.success) {
    throw 'Approvals response did not indicate success.'
  }

  Write-Host "[PASS] /approvals: $($response.StatusCode)"
}

Invoke-Check -name 'Channel deals list via gateway' -action {
  $response = Invoke-WebRequest -Uri $channelDealsUrl -UseBasicParsing -Method GET -Headers @{ Authorization = "Bearer $script:accessToken" }
  if ($response.StatusCode -ne 200) {
    throw "Unexpected channel-deals status: $($response.StatusCode)"
  }

  $body = $response.Content | ConvertFrom-Json
  if (-not $body.success) {
    throw 'Channel deals response did not indicate success.'
  }

  Write-Host "[PASS] /channel-deals: $($response.StatusCode)"
}

Invoke-Check -name 'Jobs list via gateway' -action {
  $response = Invoke-WebRequest -Uri $jobUrl -UseBasicParsing -Method GET -Headers @{ Authorization = "Bearer $script:accessToken" }
  if ($response.StatusCode -ne 200) {
    throw "Unexpected jobs status: $($response.StatusCode)"
  }

  $body = $response.Content | ConvertFrom-Json
  if (-not $body.success) {
    throw 'Jobs response did not indicate success.'
  }

  Write-Host "[PASS] /jobs: $($response.StatusCode)"
}

Invoke-Check -name 'Notifications list via gateway' -action {
  $response = Invoke-WebRequest -Uri $notificationUrl -UseBasicParsing -Method GET -Headers @{ Authorization = "Bearer $script:accessToken" }
  if ($response.StatusCode -ne 200) {
    throw "Unexpected notifications status: $($response.StatusCode)"
  }

  $body = $response.Content | ConvertFrom-Json
  if (-not $body.success) {
    throw 'Notifications response did not indicate success.'
  }

  Write-Host "[PASS] /notifications: $($response.StatusCode)"
}

Invoke-Check -name 'Audit list via gateway' -action {
  $response = Invoke-WebRequest -Uri $auditUrl -UseBasicParsing -Method GET -Headers @{ Authorization = "Bearer $script:accessToken" }
  if ($response.StatusCode -ne 200) {
    throw "Unexpected audit status: $($response.StatusCode)"
  }

  $body = $response.Content | ConvertFrom-Json
  if (-not $body.success) {
    throw 'Audit response did not indicate success.'
  }

  Write-Host "[PASS] /audit: $($response.StatusCode)"
}

Write-Host '[PASS] Local core services smoke checks completed.'
