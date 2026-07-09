---
id: wu_enforce_password_rules
title: ಫಿಲ್ಟರ್ - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

ಹೆಚ್ಚುವರಿ ಪಾಸ್‌ವರ್ಡ್ ನಿಯಮಗಳನ್ನು ಜಾರಿಗೊಳಿಸಬೇಕೇ ಎಂಬುದನ್ನು ಫಿಲ್ಟರ್ ಮಾಡುತ್ತದೆ.

ಇದು `true` ಆಗಿದ್ದರೆ, ಕನಿಷ್ಠ ಉದ್ದ ಮತ್ತು ಅಕ್ಷರ ಅವಶ್ಯಕತೆಗಳನ್ನು ಕಡ್ಡಾಯಗೊಳಿಸುತ್ತದೆ. "Super Strong" ಸೆಟ್ಟಿಂಗ್‌ಗಾಗಿ ಅಥವಾ Defender Pro ನ Strong Password ಫೀಚರ್ ಸಕ್ರಿಯವಾಗಿದ್ದಾಗ ಇದು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸಕ್ರಿಯವಾಗಿರುತ್ತದೆ.

## ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | ಹೆಚ್ಚುವರಿ ನಿಯಮಗಳನ್ನು ಜಾರಿಗೊಳಿಸಬೇಕೇ. |
| $strength_setting | `string` | ಆಡಳಿತ (Admin) ಸೆಟ್ಟಿಂಗ್‌ನ ಮೌಲ್ಯ. |
| $defender_active | `bool` | Defender Pro Strong Password ಸಕ್ರಿಯವಾಗಿದೆಯೇ. |

### ಯಾವಾಗದಿಂದ {#since}

- 2.4.0
### ಮೂಲ {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) ನಲ್ಲಿ 531ನೇ ಸಾಲಿನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ
