---
id: retrieve_password_title
title: Filter - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

പാസ്‌വേർഡ് റീസെറ്റ് ഇമെയിലിന്റെ സബ്ജക്റ്റ് (subject) മാറ്റാൻ ഇത് ഉപയോഗിക്കുന്നു.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $title | `string` | ഡിഫോൾട്ട് ഇമെയിൽ സബ്ജക്റ്റ്. |
| $user_login | `string` | ഉപയോക്താവിന്റെ യൂസർ നെയിം. |
| $user_data | `\WP_User` | WP_User ഒബ്ജക്റ്റ്. |

### Since {#since}

- 2.8.0
- 4.4.0: <code>$user_login</code> ഉം <code>$user_data</code> ഉം പരാമീറ്ററുകൾ ചേർത്തു.
### Source {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) എന്നതിൽ, 135-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.


## Returns {#returns}
ഡിഫോൾട്ട് ഇമെയിൽ സബ്ജക്റ്റ്.
