---
id: retrieve_password_message
title: Iragazkia - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Iragazkia: retrieve_password_message

Pasahitza berrezartzeko emailaren mezuaren gorputza iragazten du.

## Parametroak {#parameters}

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $message | `string` | Email-mezu lehenetsia. |
| $key | `string` | Aktibazio-gakoa. |
| $user_login | `string` | Erabiltzailearen erabiltzaile-izena. |
| $user_data | `\WP_User` | WP_User objektua. |

### Noiztik {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Iturburua {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) fitxategian definitua, 149. lerroan


## Itzultzen du {#returns}
Email-mezu lehenetsia.
