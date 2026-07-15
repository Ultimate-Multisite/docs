---
title: ಪ್ಲಗ್ಇನ್ ಬಿಲ್ಡರ್ ಮತ್ತು ಸ್ಯಾಂಡ್‌ಬಾಕ್ಸ್
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder ಮತ್ತು Sandbox

Gratis AI Agent v1.5.0 ಮೂಲಕ **Plugin Builder & Sandbox System** ಅನ್ನು ಪರಿಚಯಿಸಲಾಗಿದೆ. ಇದು AI ಅಸಿಸ್ಟೆಂಟ್‌ಗೆ ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ WordPress plugins ಅನ್ನು ರಚಿಸಲು, ಸಕ್ರಿಯಗೊಳಿಸಲು ಮತ್ತು ನಿರ್ವಹಿಸಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ — ಇದೆಲ್ಲವೂ ಸುರಕ್ಷಿತ, ಪ್ರತ್ಯೇಕವಾದ sandbox environment ಮೂಲಕ ನಡೆಯುತ್ತದೆ.

## Overview {#overview}

Plugin Builder ಎಂಬುದು AI ಅಸಿಸ್ಟೆಂಟ್‌ಗೆ ನೈಸರ್ಗಿಕ ಭಾಷೆಯ ವಿನಂತಿಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ಕಸ್ಟಮ್ WordPress plugins ಬರೆಯಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ರಚಿಸಲಾದ plugins ಅನ್ನು ಲೈವ್ ಸೈಟ್ ಕಾರ್ಯಕ್ಷಮತೆಯ ಮೇಲೆ ಯಾವುದೇ ಪರಿಣಾಮ ಬೀರುವ ಮೊದಲು, ಅವುಗಳನ್ನು ವ್ಯಾಲಿಡೇಟ್ ಮಾಡಲಾಗುತ್ತದೆ, ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ ಮತ್ತು sandbox ಲೇಯರ್‌ನಲ್ಲಿ ಸಕ್ರಿಯಗೊಳಿಸಲಾಗುತ್ತದೆ.

ಇದರ ಉಪಯೋಗಗಳು ಹೀಗಿವೆ:

- Developerರ ಸಹಾಯವಿಲ್ಲದೆ ಲಘು ಉಪಯುಕ್ತ plugins ಅನ್ನು ರಚಿಸುವುದು.
- WordPress hooks ಅಥವಾ custom post types ಅಗತ್ಯವಿರುವ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ಪ್ರೋಟೋಟೈಪ್ ಮಾಡುವುದು.
- ಬ್ಯಾಚ್ ಆಪರೇಷನ್‌ಗಳಿಗಾಗಿ ಕಡಿಮೆ ಅವಧಿಯ automation scripts ಅನ್ನು ರಚಿಸುವುದು.

## AI ಮೂಲಕ Plugin ರಚಿಸುವುದು {#generating-a-plugin-via-ai}

ಒಂದು plugin ಅನ್ನು ರಚಿಸಲು, Gratis AI Agent chat interface ತೆರೆಯಿರಿ ಮತ್ತು ನಿಮಗೆ ಏನು ಬೇಕು ಎಂಬುದನ್ನು ವಿವರಿಸಿ. ಉದಾಹರಣೆಗೆ:

> "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ನಲ್ಲಿ ಕಸ್ಟಮ್ ಅಡ್ಮಿನ್ ನೋಟಿಸ್ ಅನ್ನು ಸೇರಿಸುವ plugin ಅನ್ನು ರಚಿಸಿ."

AI ಈ ಕೆಳಗಿನ ಕೆಲಸಗಳನ್ನು ಮಾಡುತ್ತದೆ:

1. structured code generation ಬಳಸಿ plugin PHP ಕೋಡ್ ಅನ್ನು ಉತ್ಪಾದಿಸುತ್ತದೆ.
2. ಸಿಂಟ್ಯಾಕ್ಸ್ ದೋಷಗಳು ಮತ್ತು ಅಸುರಕ್ಷಿತ ಮಾದರಿಗಳಿಗಾಗಿ ಔಟ್‌ಪುಟ್ ಅನ್ನು ವ್ಯಾಲಿಡೇಟ್ ಮಾಡುತ್ತದೆ.
3. ರಚಿಸಲಾದ plugin ಅನ್ನು sandbox ಸ್ಟೋರ್‌ನಲ್ಲಿ ಉಳಿಸುತ್ತದೆ.
4. plugin slug ಮತ್ತು **Activate in Sandbox** ಬಟನ್‌ನೊಂದಿಗೆ confirmation ಅನ್ನು ಮರಳಿ ನೀಡುತ್ತದೆ.

ಸಕ್ರಿಯಗೊಳಿಸುವ ಮೊದಲು, ನೀವು ಅದೇ ಸಂಭಾಷಣಾ thread ನಲ್ಲಿ follow up ಮಾಡುವ ಮೂಲಕ ಫಲಿತಾಂಶವನ್ನು ಪರಿಷ್ಕರಿಸಬಹುದು.

## Sandbox Activation {#sandbox-activation}

sandbox ನಲ್ಲಿ ರಚಿಸಲಾದ plugin ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುವುದು, ಅದನ್ನು ಲೈವ್ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ಸಕ್ರಿಯಗೊಳಿಸುವುದಕ್ಕಿಂತ ಭಿನ್ನವಾಗಿದೆ. sandbox:

- plugin ಅನ್ನು ಪ್ರತ್ಯೇಕ WordPress environment (wp-env) ನಲ್ಲಿ ಚಲಾಯಿಸುತ್ತದೆ.
- ಯಾವುದೇ PHP ದೋಷಗಳು, ಎಚ್ಚರಿಕೆಗಳು ಅಥವಾ hook conflicts ಅನ್ನು ಸೆರೆಹಿಡಿಯುತ್ತದೆ.
- activation ಫಲಿತಾಂಶವನ್ನು chat interface ನಲ್ಲಿ ವರದಿ ಮಾಡುತ್ತದೆ.

sandbox ನಲ್ಲಿ plugin ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲು, AI chat response ನಲ್ಲಿರುವ **Activate in Sandbox** ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ, ಅಥವಾ ಈ slash command ಅನ್ನು ಬಳಸಿ:

```
/activate-plugin <plugin-slug>
```

activation ಯಶಸ್ವಾಯಿತೇ ಅಥವಾ ವಿಫಲವಾಯಿತೇ ಎಂಬುದನ್ನು ಸ್ಥಿತಿ ಸಂದೇಶವು ಖಚಿತಪಡಿಸುತ್ತದೆ. ವಿಫಲವಾದರೆ, error log ಅನ್ನು chat thread ನಲ್ಲಿ ಪ್ರದರ್ಶಿಸಲಾಗುತ್ತದೆ.

## Generated Plugins ಅನ್ನು ನಿರ್ವಹಿಸುವುದು {#managing-generated-plugins}

ರಚಿಸಲಾದ plugins ಅನ್ನು **Gratis AI Agent → Plugin Builder → Manage Plugins** ನಲ್ಲಿ ಪಟ್ಟಿ ಮಾಡಲಾಗಿದೆ. ಈ screen ನಿಂದ ನೀವು:

| Action | Description |
|---|---|
| **View source** | ಸಂಪೂರ್ಣ plugin PHP ಕೋಡ್ ಅನ್ನು ಪರಿಶೀಲಿಸಿ. |
| **Re-activate in sandbox** | sandbox activation ಪರಿಶೀಲನೆಯನ್ನು ಮರು-ಚಲಾಯಿಸಿ. |
| **Install on network** | plugin ಅನ್ನು ಲೈವ್ ನೆಟ್‌ವರ್ಕ್‌ಗೆ ನಿಯೋಜಿಸಿ (ಮಾನವ ಹಸ್ತಚಾಲಿತ confirmation ಅಗತ್ಯ). |
| **Update** | AI ಮೂಲಕ ಹೊಸ ಆವೃತ್ತಿಯನ್ನು ನೀಡಿ, ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಕೋಡ್ ಅನ್ನು ಬದಲಾಯಿಸಿ. |
| **Delete** | plugin ಅನ್ನು sandbox ಸ್ಟೋರ್‌ನಿಂದ ತೆಗೆದುಹಾಕಿ. ಮೊದಲು ಎಲ್ಲಾ sites ನಿಂದ ಅದನ್ನು de-activate ಮಾಡುತ್ತದೆ. |

:::warning
**Install on network** ಎಂಬುದು ರಚಿಸಲಾದ plugin ಅನ್ನು ನಿಮ್ಮ ಲೈವ್ WordPress multisite ಗೆ ನಿಯೋಜಿಸುತ್ತದೆ. ಮುಂದುವರಿಯುವ ಮೊದಲು plugin ಕೋಡ್ ಅನ್ನು ಪರಿಶೀಲಿಸಿ. ಲೈವ್ ಇನ್‌ಸ್ಟಾಲ್ ಅನ್ನು ಪೂರ್ಣಗೊಳಿಸುವ ಮೊದಲು Gratis AI Agent confirmation ಕೇಳುತ್ತದೆ.
:::

## Network ಮೇಲೆ Generated Plugin ಅನ್ನು ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡುವುದು {#installing-a-generated-plugin-on-the-network}

sandbox ನಲ್ಲಿರುವ plugin ಬಗ್ಗೆ ನೀವು ತೃಪ್ತರಾಗಿದ್ದರೆ, ನೀವು ಅದನ್ನು ಲೈವ್ ನೆಟ್‌ವರ್ಕ್ ಮೇಲೆ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಬಹುದು:

1. **Gratis AI Agent → Plugin Builder → Manage Plugins** ಗೆ ಹೋಗಿ.
2. ನೀವು ನಿಯೋಜಿಸಲು ಬಯಸುವ plugin ಪಕ್ಕದಲ್ಲಿರುವ **Install on Network** ಕ್ಲಿಕ್ ಮಾಡಿ.
3. ಡೈಲಾಗ್ ಅನ್ನು ಖಚಿತಪಡಿಸಿ. plugin ಅನ್ನು `wp-content/plugins/` ಗೆ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಲಾಗುತ್ತದೆ ಮತ್ತು ನೆಟ್‌ವರ್ಕ್-ಸಕ್ರಿಯಗೊಳಿಸಲಾಗುತ್ತದೆ.

ವೈಕલ્પಿಕವಾಗಿ, chat interface ನಲ್ಲಿ slash command ಬಳಸಿ:

```
/install-plugin <plugin-slug>
```

## Plugin Updates {#plugin-updates}

ರಚಿಸಲಾದ plugin ಅನ್ನು ಅಪ್ಡೇಟ್ ಮಾಡಲು, ಹೊಸ ಸಂಭಾಷಣೆಯಲ್ಲಿ AI ಅಸಿಸ್ಟೆಂಟ್‌ಗೆ ಬದಲಾವಣೆಯನ್ನು ವಿವರಿಸಿ:

> "dashboard-notice plugin ಅನ್ನು ಅಡ್ಮಿನ್ ಮಾತ್ರ ನೋಟಿಸ್ ಅನ್ನು ತೋರಿಸುವಂತೆ ಅಪ್ಡೇಟ್ ಮಾಡಿ."

AI ಹೊಸ ಆವೃತ್ತಿಯನ್ನು ರಚಿಸುತ್ತದೆ, ಅದು ಪ್ರಸ್ತುತ ಆವೃತ್ತಿಯ ಜೊತೆಗೆ sandbox ನಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ. ಅಪ್ಡೇಟ್ ಅನ್ವಯಿಸುವ ಮೊದಲು ನೀವು diff ಅನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು confirmation ನೀಡಬೇಕು.

## HookScanner Integration {#hookscanner-integration}

Plugin Builder ಪ್ರತಿ ರಚಿಸಲಾದ plugin ನಿಂದ ನೋಂದಾಯಿಸಲಾದ hooks ಮತ್ತು filters ಅನ್ನು ವಿಶ್ಲೇಷಿಸಲು ஒருங்கிணைக்கப்பட்ட **HookScanner** ಅನ್ನು ಬಳಸುತ್ತದೆ. HookScanner ಔಟ್‌ಪುಟ್ ಅನ್ನು chat response ನಲ್ಲಿ ತೋರಿಸಲಾಗುತ್ತದೆ ಮತ್ತು ಇದರಲ್ಲಿ ಸೇರಿರುತ್ತದೆ:

- ನೋಂದಾಯಿಸಲಾದ Action hooks (`add_action` calls).
- ನೋಂದಾಯಿಸಲಾದ Filter hooks (`add_filter` calls).
- plugin dependencies ನಲ್ಲಿ ಕಂಡುಬರುವ ಯಾವುದೇ hooks (ಇದು `vendor/` ಮತ್ತು `node_modules/` directories ಅನ್ನು ಬಿಟ್ಟುಬಿಡುತ್ತದೆ).

ಇದರಿಂದ plugin ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುವ ಮೊದಲು ಅದರ ನಡವಳಿಕೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ.

## Security Considerations {#security-considerations}

- ರಚಿಸಲಾದ plugins ಗಳನ್ನು ಕೈಯಾರೆ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡಿದ plugins ಗಳಿಂದ ಪ್ರತ್ಯೇಕವಾಗಿ ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ ಮತ್ತು ನೀವು ಅವುಗಳನ್ನು ನೆಟ್‌ವರ್ಕ್ ಮೇಲೆ ಸ್ಪಷ್ಟವಾಗಿ ಇನ್‌ಸ್ಟಾಲ್ ಮಾಡದಿದ್ದರೆ standard WordPress plugin management screen ಮೂಲಕ ಅವುಗಳನ್ನು ಪ್ರವೇಶಿಸಲಾಗುವುದಿಲ್ಲ.
- plugin ಫೈಲ್‌ಗಳನ್ನು ಬರೆಯುವಾಗ directory traversal ಅನ್ನು ತಡೆಯಲು sandbox path validation ಅನ್ನು ಬಳಸುತ್ತದೆ.
- ಅಪಾಯಕಾರಿ function calls (ಉದಾಹರಣೆಗೆ, `eval`, `exec`, `system`) ಹೊಂದಿರುವ plugins ಗಳನ್ನು ವ್ಯಾಲಿಡೇಶನ್ ಸಮಯದಲ್ಲಿ ಫ್ಲ್ಯಾಗ್ ಮಾಡಲಾಗುತ್ತದೆ ಮತ್ತು ಅವುಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲಾಗುವುದಿಲ್ಲ.
