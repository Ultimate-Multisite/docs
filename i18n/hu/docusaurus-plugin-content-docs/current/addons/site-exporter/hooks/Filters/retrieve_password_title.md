---
id: retrieve_password_title
title: Szűrő - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

Szűrja a jelszó visszaállítási e-mail tárgyát.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $title | `string` | Az alapértelmezett e-mail tárgy. |
| $user_login | `string` | Az felhasználónév. |
| $user_data | `\WP_User` | WP_User objektum. |

### Desde {#since}

- 2.8.0
- 4.4.0: Hozzáadta a <code>$user_login</code> és <code>$user_data</code> paramétereket.
### Forrás {#source}

Definíciója található [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) fájlban, 135-sorban.


## Visszaadja {#returns}
Az alapértelmezett e-mail tárgy.
