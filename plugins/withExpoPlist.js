// Generates ios/<AppName>/Supporting/Expo.plist, which the Xcode project
// references in a Copy Files build phase. Expo CLI normally creates this
// file when expo-updates is installed; without it the build fails with
// "unable to read input file … Expo.plist: No such file or directory".
const { withDangerousMod } = require('@expo/config-plugins');
const fs = require('fs');
const path = require('path');

const EXPO_PLIST_CONTENT = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
\t<key>EXUpdatesCheckOnLaunch</key>
\t<string>NEVER</string>
\t<key>EXUpdatesEnabled</key>
\t<false/>
\t<key>EXUpdatesLaunchWaitMs</key>
\t<integer>0</integer>
\t<key>EXUpdatesRuntimeVersion</key>
\t<string>exposdk:52.0.0</string>
\t<key>EXUpdatesURL</key>
\t<string>https://u.expo.dev/</string>
</dict>
</plist>
`;

const withExpoPlist = (config) => {
  return withDangerousMod(config, [
    'ios',
    async (config) => {
      const appName = config.modRequest.projectName;
      const supportingDir = path.join(
        config.modRequest.platformProjectRoot,
        appName,
        'Supporting',
      );
      fs.mkdirSync(supportingDir, { recursive: true });
      const plistPath = path.join(supportingDir, 'Expo.plist');
      if (!fs.existsSync(plistPath)) {
        fs.writeFileSync(plistPath, EXPO_PLIST_CONTENT, 'utf8');
      }
      return config;
    },
  ]);
};

module.exports = withExpoPlist;
