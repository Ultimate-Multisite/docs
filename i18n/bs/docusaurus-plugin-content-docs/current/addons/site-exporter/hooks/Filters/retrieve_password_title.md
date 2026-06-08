---
id: retrieve_password_title
title: Filter - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

Filtrira predmet e-maila za resetovanje lozinke.

## Parametri

| Name | Type | Opis |
|------|------|-------------|
| $title | `string` | Podrazumevani naslov e-maila. |
| $user_login | `string` | Korisničko ime korisnika. |
| $user_data | `\WP_User` | WP_User objekat. |

### Od verzije

- 2.8.0
- 4.4.0: Dodati su parametri <code>$user_login</code> i <code>$user_data</code>.
### Izvor

Definisano je u [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) na liniji 135


## Vraća
Podrazumevani naslov e-maila.
