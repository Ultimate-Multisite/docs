---
id: retrieve_password_message
title: Filter - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

ಪಾಸ್‌ವರ್ಡ್ ರೀಸೆಟ್ ಇಮೇಲ್‌ನ ಸಂದೇಶದ ಬಾಡಿ (message body) ಅನ್ನು ಫಿಲ್ಟರ್ ಮಾಡುತ್ತದೆ.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | ಡೀಫಾಲ್ಟ್ ಇಮೇಲ್ ಸಂದೇಶ. |
| $key | `string` | 액ಟಿವೇಷನ್ ಕೀ. |
| $user_login | `string` | ಬಳಕೆದಾರರ ಯೂಸರ್ neame. |
| $user_data | `\WP_User` | WP_User ಆಬ್ಜೆಕ್ಟ್. |

### Since

- 2.8.0
- 4.1.0: <code>$user_login</code> ಮತ್ತು <code>$user_data</code> ಪ್ಯಾರಾಮೀಟರ್‌ಗಳನ್ನು ಸೇರಿಸಲಾಗಿದೆ.
### Source

Defined in [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) at line 149


## Returns
ಡೀಫಾಲ್ಟ್ ಇಮೇಲ್ ಸಂದೇಶ.
