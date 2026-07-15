---
id: retrieve_password_title
title: Filtras - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filtras: retrieve_password_title

Filtruoja slaptažodžio atkūrimo el. laiško temą.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $title | `string` | Numatytasis el. laiško pavadinimas. |
| $user_login | `string` | Naudotojo naudotojo vardas. |
| $user_data | `\WP_User` | WP_User objektas. |

### Nuo {#since}

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Šaltinis {#source}

Apibrėžta faile [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135), 135 eilutėje


## Grąžina {#returns}
Numatytasis el. laiško pavadinimas.
