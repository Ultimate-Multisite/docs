---
id: retrieve_password_message
title: Filtër - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filtër: retrieve_password_message

Filtron trupin e mesazhit të emailit për rivendosjen e fjalëkalimit.

## Parametrat

| Emri | Lloji | Përshkrimi |
|------|------|-------------|
| $message | `string` | Mesazhi i parazgjedhur i emailit. |
| $key | `string` | Çelësi i aktivizimit. |
| $user_login | `string` | Emri i përdoruesit për përdoruesin. |
| $user_data | `\WP_User` | Objekti WP_User. |

### Që prej

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Burimi

Përcaktuar në [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) në rreshtin 149


## Kthen
Mesazhin e parazgjedhur të emailit.
