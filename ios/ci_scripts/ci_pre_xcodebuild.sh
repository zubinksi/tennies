#!/bin/sh
set -e

# Ensure Homebrew is in PATH (Apple Silicon Xcode Cloud)
if [ -f "/opt/homebrew/bin/brew" ]; then
  eval "$(/opt/homebrew/bin/brew shellenv)"
elif [ -f "/usr/local/bin/brew" ]; then
  eval "$(/usr/local/bin/brew shellenv)"
fi

export HOMEBREW_NO_AUTO_UPDATE=1

echo "Installing/updating Node.js..."
brew install node || brew upgrade node || true

echo "Node: $(node --version), npm: $(npm --version)"

echo "Installing npm dependencies..."
cd "$CI_PRIMARY_REPOSITORY_PATH"
npm install

echo "Installing CocoaPods dependencies..."
cd "$CI_PRIMARY_REPOSITORY_PATH/ios"
pod install
