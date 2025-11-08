#!/bin/bash

# Invictus Pro Website - Local Development Server
# This script launches a simple HTTP server to preview the website

echo "🚀 Starting Invictus Pro website..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    echo "✓ Python 3 detected"
    echo "📡 Server starting at http://localhost:8000"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "Press Ctrl+C to stop the server"
    echo ""
    python3 -m http.server 8000
# Check if Python 2 is available
elif command -v python &> /dev/null; then
    echo "✓ Python detected"
    echo "📡 Server starting at http://localhost:8000"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "Press Ctrl+C to stop the server"
    echo ""
    python -m SimpleHTTPServer 8000
# Check if Node.js is available
elif command -v npx &> /dev/null; then
    echo "✓ Node.js detected"
    echo "📡 Server starting at http://localhost:8000"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "Press Ctrl+C to stop the server"
    echo ""
    npx --yes http-server -p 8000
# Check if PHP is available
elif command -v php &> /dev/null; then
    echo "✓ PHP detected"
    echo "📡 Server starting at http://localhost:8000"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "Press Ctrl+C to stop the server"
    echo ""
    php -S localhost:8000
else
    echo "❌ No suitable server found"
    echo ""
    echo "Please install one of the following:"
    echo "  - Python 3: https://www.python.org/downloads/"
    echo "  - Node.js: https://nodejs.org/"
    echo "  - PHP: https://www.php.net/"
    echo ""
    echo "Or simply open index.html in your browser"
    exit 1
fi
