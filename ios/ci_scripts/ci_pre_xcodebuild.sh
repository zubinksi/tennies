#!/bin/sh
set -e

# Set up Homebrew PATH (Apple Silicon Xcode Cloud uses /opt/homebrew)
if [ -f "/opt/homebrew/bin/brew" ]; then
  eval "$(/opt/homebrew/bin/brew shellenv)"
elif [ -f "/usr/local/bin/brew" ]; then
  eval "$(/usr/local/bin/brew shellenv)"
fi

export HOMEBREW_NO_AUTO_UPDATE=1

# Install Node if not present
if ! command -v node >/dev/null 2>&1; then
  echo "Node not found, installing via Homebrew..."
  brew install node
fi

echo "Node: $(node --version), npm: $(npm --version)"

# Export NODE_BINARY so Podfile can find node
export NODE_BINARY=$(command -v node)

echo "Installing npm dependencies..."
cd "$CI_PRIMARY_REPOSITORY_PATH"
npm ci

echo "Installing CocoaPods dependencies..."
cd "$CI_PRIMARY_REPOSITORY_PATH/ios"
# Remove cached Pods to avoid stale podspec version conflicts (e.g. fmt)
rm -rf Pods
pod install --no-repo-update
