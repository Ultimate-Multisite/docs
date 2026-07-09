---
id: retrieve_password_title
title: Iragazkia - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title {#filter-retrievepasswordtitle}

Pasahitza berrezartzeko emailaren gaia iragazten du.

## Parametroak {#parameters}

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $title | `string` | Emailaren izenburu lehenetsia. |
| $user_login | `string` | Erabiltzailearen erabiltzaile-izena. |
| $user_data | `\WP_User` | WP_User objektua. |

### Noiztik {#since}

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Iturburua {#source}

[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) fitxategian definituta, 135. lerroan


## Itzultzen du {#returns}
Emailaren izenburu lehenetsia.
