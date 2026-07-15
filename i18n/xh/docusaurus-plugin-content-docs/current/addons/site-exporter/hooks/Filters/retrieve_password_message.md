---
id: retrieve_password_message
title: Isihluzi - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Isihluzo: retrieve_password_message

Sihluza umzimba womyalezo we-imeyile yokuseta kwakhona igama lokugqithisa.

## Iiparamitha {#parameters}

| Igama | Uhlobo | Inkcazo |
|------|------|-------------|
| $message | `string` | Umyalezo we-imeyile ongagqibekanga. |
| $key | `string` | Isitshixo sokuvula. |
| $user_login | `string` | Igama lomsebenzisi lomsebenzisi. |
| $user_data | `\WP_User` | Into ye-WP_User. |

### Ukususela {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Umthombo {#source}

Ichazwe kwi-[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) kumgca 149


## Ibuyisa {#returns}
Umyalezo we-imeyile ongagqibekanga.
