---
id: retrieve_password_title
title: Filter - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

ಪಾಸ್‌ವರ್ಡ್ ರೀಸೆಟ್ ಇಮೇಲ್‌ನ ವಿಷಯವನ್ನು (subject) ಫಿಲ್ಟರ್ ಮಾಡಲು ಇದು ಸಹಾಯ ಮಾಡುತ್ತದೆ.

## ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $title | `string` | ಡೀಫಾಲ್ಟ್ ಇಮೇಲ್ ಶೀರ್ಷಿಕೆ. |
| $user_login | `string` | ಬಳಕೆದಾರರಿಗಾಗಿ ಯೂಸರ್ neame. |
| $user_data | `\WP_User` | WP_User ಆಬ್ಜೆಕ್ಟ್. |

### ಇಂದಿನಿಂದ {#since}

- 2.8.0
- 4.4.0: <code>$user_login</code> ಮತ್ತು <code>$user_data</code> ಪ್ಯಾರಾಮೀಟರ್‌ಗಳನ್ನು ಸೇರಿಸಲಾಗಿದೆ.
### ಮೂಲ {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) ನಲ್ಲಿ ಲೈನ್ 135 ರಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ.

## ಮರಳಿ ನೀಡುತ್ತದೆ {#returns}
ಡೀಫಾಲ್ಟ್ ಇಮೇಲ್ ಶೀರ್ಷಿಕೆ.
