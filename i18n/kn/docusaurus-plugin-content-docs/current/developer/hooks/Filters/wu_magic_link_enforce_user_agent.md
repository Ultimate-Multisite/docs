---
id: wu_magic_link_enforce_user_agent
title: Filter - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent

ಬಳಕೆದಾರರ ಏಜೆಂಟ್ (user agent) ಪರಿಶೀಲನೆಯನ್ನು ಜಾರಿಗೊಳಿಸಬೇಕೇ ಇಲ್ಲವೇ ಎಂಬುದನ್ನು ಫಿಲ್ಟರ್ ಮಾಡಿ.

ಟೋಕನ್‌ಗಳು ವಿಭಿನ್ನ ಬ್ರೌಸರ್ಗಳು/ಸಾಧನಗಳಲ್ಲಿ ಕೆಲಸ ಮಾಡಲು ಅನುಮತಿಸಲು ಇದನ್ನು `false` ಎಂದು ಹೊಂದಿಸಿ. ಇದು ಭದ್ರತೆಯನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ ಆದರೆ ಬಳಕೆಯ ಅನುಕೂಲವನ್ನು (usability) ಹೆಚ್ಚಿಸುತ್ತದೆ.

## ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | ಬಳಕೆದಾರರ ಏಜೆಂಟ್ ಹೊಂದಾಣಿಕೆಯನ್ನು (user agent matching) ಜಾರಿಗೊಳಿಸಬೇಕೇ ಇಲ್ಲವೇ. |

### ಯಾವಾಗ ಲಭ್ಯ (Since)

- 2.0.0
### ಮೂಲ (Source)

[`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) ನಲ್ಲಿ 410ನೇ ಸಾಲಿನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ.
