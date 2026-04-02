$ErrorActionPreference = 'Stop'

$healthUrl = 'http://localhost:3000/api/v1/health'
$loginUrl = 'http://localhost:3000/api/v1/auth/login'
$refreshUrl = 'http://localhost:3000/api/v1/auth/refresh'
$logoutUrl = 'http://localhost:3000/api/v1/auth/logout'
$meUrl = 'http://localhost:3000/api/v1/auth/me'
$rolesUrl = 'http://localhost:3000/api/v1/admin/roles'
$usersUrl = 'http://localhost:3000/api/v1/admin/users?page=1&limit=5'

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
$refreshToken = $null
$newAccessToken = $null
$newRefreshToken = $null

Invoke-Check -name 'Gateway health check' -action {
  $response = Invoke-WebRequest -Uri $healthUrl -UseBasicParsing -Method GET
  if ($response.StatusCode -ne 200) {
    throw "Unexpected health status: $($response.StatusCode)"
  }

  Write-Host "[PASS] Health: $($response.StatusCode)"
}

Invoke-Check -name 'Gateway auth login check' -action {
  $response = Invoke-WebRequest -Uri $loginUrl -UseBasicParsing -Method POST -ContentType 'application/json' -Body $payload
  if ($response.StatusCode -ne 200) {
    throw "Unexpected login status: $($response.StatusCode)"
  }

  $body = $response.Content | ConvertFrom-Json
  if (-not $body.success) {
    throw 'Login response did not indicate success.'
  }
  if (-not $body.data.accessToken) {
    throw 'Login response is missing accessToken.'
  }
  if (-not $body.data.refreshToken) {
    throw 'Login response is missing refreshToken.'
  }
  if (-not $body.data.user.roles -or $body.data.user.roles.Count -eq 0) {
    throw 'Login response user has no roles assigned.'
  }

  $script:accessToken = $body.data.accessToken
  $script:refreshToken = $body.data.refreshToken
  Write-Host "[PASS] Login: $($response.StatusCode), roles: $($body.data.user.roles -join ',')"
}

Invoke-Check -name 'Gateway protected /auth/me check' -action {
  $response = Invoke-WebRequest -Uri $meUrl -UseBasicParsing -Method GET -Headers @{ Authorization = "Bearer $script:accessToken" }
  if ($response.StatusCode -ne 200) {
    throw "Unexpected /auth/me status: $($response.StatusCode)"
  }

  $body = $response.Content | ConvertFrom-Json
  if (-not $body.data.id) {
    throw '/auth/me response missing user id.'
  }

  Write-Host "[PASS] /auth/me: $($response.StatusCode), user: $($body.data.email)"
}

Invoke-Check -name 'Gateway admin roles check' -action {
  $response = Invoke-WebRequest -Uri $rolesUrl -UseBasicParsing -Method GET -Headers @{ Authorization = "Bearer $script:accessToken" }
  if ($response.StatusCode -ne 200) {
    throw "Unexpected /admin/roles status: $($response.StatusCode)"
  }

  $body = $response.Content | ConvertFrom-Json
  if (-not $body.data -or $body.data.Count -lt 1) {
    throw '/admin/roles response returned no roles.'
  }

  Write-Host "[PASS] /admin/roles: $($response.StatusCode), roles: $($body.data.Count)"
}

Invoke-Check -name 'Gateway admin users pagination check' -action {
  $response = Invoke-WebRequest -Uri $usersUrl -UseBasicParsing -Method GET -Headers @{ Authorization = "Bearer $script:accessToken" }
  if ($response.StatusCode -ne 200) {
    throw "Unexpected /admin/users status: $($response.StatusCode)"
  }

  $body = $response.Content | ConvertFrom-Json
  if (-not $body.data.meta -or $body.data.meta.limit -ne 5) {
    throw '/admin/users pagination metadata is incorrect.'
  }

  Write-Host "[PASS] /admin/users: $($response.StatusCode), total: $($body.data.meta.total), limit: $($body.data.meta.limit)"
}

Invoke-Check -name 'Gateway refresh token check' -action {
  $response = Invoke-WebRequest -Uri $refreshUrl -UseBasicParsing -Method POST -ContentType 'application/json' -Body (@{ refreshToken = $script:refreshToken } | ConvertTo-Json -Compress)
  if ($response.StatusCode -ne 200) {
    throw "Unexpected refresh status: $($response.StatusCode)"
  }

  $body = $response.Content | ConvertFrom-Json
  if (-not $body.data.accessToken -or -not $body.data.refreshToken) {
    throw 'Refresh response is missing rotated tokens.'
  }

  $script:newAccessToken = $body.data.accessToken
  $script:newRefreshToken = $body.data.refreshToken
  Write-Host "[PASS] /auth/refresh: $($response.StatusCode)"
}

Invoke-Check -name 'Gateway logout check' -action {
  $response = Invoke-WebRequest -Uri $logoutUrl -UseBasicParsing -Method POST -Headers @{ Authorization = "Bearer $script:newAccessToken" } -ContentType 'application/json' -Body (@{ refreshToken = $script:newRefreshToken } | ConvertTo-Json -Compress)
  if ($response.StatusCode -ne 204) {
    throw "Unexpected logout status: $($response.StatusCode)"
  }

  Write-Host "[PASS] /auth/logout: $($response.StatusCode)"
}

Invoke-Check -name 'Gateway refresh rejection after logout check' -action {
  try {
    Invoke-WebRequest -Uri $refreshUrl -UseBasicParsing -Method POST -ContentType 'application/json' -Body (@{ refreshToken = $script:newRefreshToken } | ConvertTo-Json -Compress) | Out-Null
    throw 'Refresh unexpectedly succeeded after logout.'
  } catch {
    if (-not $_.Exception.Response) {
      throw
    }

    $statusCode = [int]$_.Exception.Response.StatusCode
    if ($statusCode -ne 401) {
      throw "Unexpected refresh-after-logout status: $statusCode"
    }

    Write-Host "[PASS] Refresh rejected after logout: $statusCode"
  }
}

Write-Host '[PASS] Local auth+gateway smoke checks completed.'

