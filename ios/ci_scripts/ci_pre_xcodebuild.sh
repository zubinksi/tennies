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

# Write node path to .xcode.env.local so the build phase picks it up
echo "export NODE_BINARY=$(command -v node)" > "$CI_PRIMARY_REPOSITORY_PATH/ios/.xcode.env.local"
echo "Wrote NODE_BINARY=$(command -v node) to .xcode.env.local"

echo "Installing npm dependencies..."
cd "$CI_PRIMARY_REPOSITORY_PATH"
# Retry npm ci up to 3 times to handle transient network errors (ECONNRESET)
for attempt in 1 2 3; do
  echo "npm ci attempt $attempt..."
  npm ci --fetch-retries=5 --fetch-retry-mintimeout=20000 --fetch-retry-maxtimeout=120000 && break
  if [ $attempt -eq 3 ]; then
    echo "npm ci failed after 3 attempts"
    exit 1
  fi
  echo "npm ci failed, retrying in $((attempt * 10))s..."
  sleep $((attempt * 10))
done

echo "Installing CocoaPods dependencies..."
cd "$CI_PRIMARY_REPOSITORY_PATH/ios"
# Remove stale Pods and Podfile.lock so pod install resolves fresh from node_modules
rm -rf Pods
rm -f Podfile.lock
# Disable CocoaPods stats to avoid unnecessary network calls
export COCOAPODS_DISABLE_STATS=1
# Retry pod install up to 3 times to handle transient network errors (Net::OpenTimeout)
for attempt in 1 2 3; do
  echo "pod install attempt $attempt..."
  pod install --no-repo-update && break
  if [ $attempt -eq 3 ]; then
    echo "pod install failed after 3 attempts"
    exit 1
  fi
  echo "pod install failed, retrying in $((attempt * 10))s..."
  sleep $((attempt * 10))
done
