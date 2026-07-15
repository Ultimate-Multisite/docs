---
id: retrieve_password_message
title: Isihlungi - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Isihlungi: retrieve_password_message

Sihlunga umzimba womlayezo we-imeyili yokusetha kabusha iphasiwedi.

## Amapharamitha {#parameters}

| Igama | Uhlobo | Incazelo |
|------|------|-------------|
| $message | `string` | Umlayezo we-imeyili ozenzakalelayo. |
| $key | `string` | Ukhiye wokwenza kusebenze. |
| $user_login | `string` | Igama lomsebenzisi lomsebenzisi. |
| $user_data | `\WP_User` | Into ye-WP_User. |

### Kusukela {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Umthombo {#source}

Kuchazwe ku-[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) emugqeni 149


## Okubuyiswayo {#returns}
Umlayezo we-imeyili ozenzakalelayo.
