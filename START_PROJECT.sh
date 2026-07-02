#!/bin/bash

# BloodCare Project Startup Script
# This script helps you get started with the BloodCare project

echo "========================================="
echo "  BloodCare - Blood Bank Management System"
echo "  Starting Development Environment"
echo "========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

echo "🚀 Starting development server..."
echo "   The application will open at http://localhost:3000"
echo ""
echo "   Press Ctrl+C to stop the server"
echo ""
echo "========================================="
echo ""

# Start the development server
npm start
