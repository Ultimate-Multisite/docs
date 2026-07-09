---
id: retrieve_password_title
title: Filtër - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

Filtron subjektin e emailit për rivendosjen e fjalëkalimit.

## Parametrat

| Emri | Lloji | Përshkrimi |
|------|------|-------------|
| $title | `string` | Titulli i parazgjedhur i emailit. |
| $user_login | `string` | Emri i përdoruesit për përdoruesin. |
| $user_data | `\WP_User` | Objekti WP_User. |

### Që nga

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Burimi

Përcaktuar në [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) në rreshtin 135


## Kthen
Titullin e parazgjedhur të emailit.
