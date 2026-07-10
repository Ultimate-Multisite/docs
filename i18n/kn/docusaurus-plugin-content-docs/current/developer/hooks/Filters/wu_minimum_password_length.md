---
id: wu_minimum_password_length
title: ಫಿಲ್ಟರ್ - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length {#filter-wuminimumpasswordlength}

ಕನಿಷ್ಠ ಪಾಸ್‌ವರ್ಡ್ ಉದ್ದವನ್ನು ಫಿಲ್ಟರ್ ಮಾಡಲು ಇದು ಸಹಾಯ ಮಾಡುತ್ತದೆ.

`wu_enforce_password_rules` ನಿಜ (true) ಆಗಿರುವಾಗ ಮಾತ್ರ ಇದನ್ನು ಜಾರಿಗೊಳಿಸಲಾಗುತ್ತದೆ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | ಕನಿಷ್ಠ ಪಾಸ್‌ವರ್ಡ್ ಉದ್ದ. ಡೀಫಾಲ್ಟ್ 12 (Defender Pro ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ). |
| $defender_active | `bool` | Defender Pro Strong Password ಸಕ್ರಿಯವಾಗಿದೆಯೇ ಎಂದು ಇದು ತಿಳಿಸುತ್ತದೆ. |

### Since {#since}

- 2.4.0
### Source {#source}

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) at line 543
