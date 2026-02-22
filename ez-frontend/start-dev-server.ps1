# Script para iniciar el servidor de desarrollo Angular con proxy
# Uso: .\start-dev-server.ps1

Write-Output "=========================================="
Write-Output "  Ez-Frontend Dev Server Launcher"
Write-Output "=========================================="
Write-Output ""

# Verificar que estamos en el directorio correcto
if (-Not (Test-Path "package.json")) {
    Write-Output "ERROR: package.json not found in current directory."
    Write-Output "Please run this script from the project root: C:\Users\Esteban\IdeaProjects\Ez_Front\ez-frontend"
    exit 1
}

Write-Output "[1/4] Checking Node.js installation..."
$node = node --version
if ($node) {
    Write-Output "  ✓ Node.js: $node"
} else {
    Write-Output "  ✗ Node.js not found. Please install from https://nodejs.org"
    exit 1
}

Write-Output "[2/4] Checking npm..."
$npm = npm --version
if ($npm) {
    Write-Output "  ✓ npm: $npm"
} else {
    Write-Output "  ✗ npm not found."
    exit 1
}

Write-Output "[3/4] Checking Angular CLI..."
try {
    $ng = ng --version 2>$null | Select-Object -First 1
    Write-Output "  ✓ Angular CLI available"
} catch {
    Write-Output "  ⚠ Angular CLI not in PATH, will use npx (slower first run)"
}

Write-Output "[4/4] Checking dependencies..."
if (Test-Path "node_modules\@angular\core") {
    Write-Output "  ✓ @angular/core installed"
} else {
    Write-Output "  ✗ Dependencies missing, running npm install..."
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Output "  ✗ npm install failed. Check error messages above."
        exit 1
    }
    Write-Output "  ✓ Dependencies installed"
}

Write-Output ""
Write-Output "=========================================="
Write-Output "  Starting development server..."
Write-Output "=========================================="
Write-Output ""
Write-Output "Server URL:        http://localhost:4200"
Write-Output "Backend proxy:     http://localhost:8080/api"
Write-Output "Proxy config:      ./proxy.conf.json"
Write-Output ""
Write-Output "NOTE: Press Ctrl+C to stop the server"
Write-Output ""

# Arrancar el servidor
npm run start:proxy

