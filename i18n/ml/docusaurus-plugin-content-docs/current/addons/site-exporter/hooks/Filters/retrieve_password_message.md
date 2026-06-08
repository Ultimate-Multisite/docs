---
id: retrieve_password_message
title: ഫിൽട്ടർ - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

പാസ്‌വേർഡ് റീസെറ്റ് ഇമെയിലിന്റെ സന്ദേശത്തിന്റെ ഉള്ളടക്കം (message body) മാറ്റിയെഴുതാൻ ഇത് ഉപയോഗിക്കുന്നു.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | ഡിഫോൾട്ട് ഇമെയിൽ സന്ദേശം. |
| $key | `string` | ആക്ടിവേഷൻ കീ. |
| $user_login | `string` | ഉപയോക്താവിന്റെ യൂസർ നെയിം. |
| $user_data | `\WP_User` | WP_User ഒബ്ജക്റ്റ്. |

### Since

- 2.8.0
- 4.1.0: <code>$user_login</code> ഉം <code>$user_data</code> ഉം പാരാമീറ്ററുകൾ ചേർത്തു.
### Source

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) എന്ന ഫയലിലെ 149-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.

## Returns
ഡിഫോൾട്ട് ഇമെയിൽ സന്ദേശം.
