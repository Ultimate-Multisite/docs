---
id: wu_minimum_password_strength
title: ಫಿಲ್ಟರ್ - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

ಅಗತ್ಯವಿರುವ ಕನಿಷ್ಠ ಪಾಸ್‌ವರ್ಡ್ ಶಕ್ತಿಯನ್ನು (zxcvbn ಸ್ಕೋರ್) ಫಿಲ್ಟರ್ ಮಾಡಿ.

ಶಕ್ತಿ ಮಟ್ಟಗಳು: - 0, 1: ತುಂಬಾ ದುರ್ಬಲ - 2: ದುರ್ಬಲ - 3: ಮಧ್ಯಮ - 4: ಬಲವಾದ (default)

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | ಅಗತ್ಯವಿರುವ ಕನಿಷ್ಠ ಶಕ್ತಿ ಮಟ್ಟ. |
| $strength_setting | `string` | ಅಡ್ಮಿನ್ ಸೆಟ್ಟಿಂಗ್ ಮೌಲ್ಯ (medium, strong, super_strong). |

### Since {#since}

- 2.4.0
### Source {#source}

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) at line 516
