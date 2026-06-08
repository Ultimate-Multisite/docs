---
id: retrieve_password_title
title: Filter - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

Filtrează subiectul email-ului de resetare a parolei.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $title | `string` | Titlul implicit pentru email. |
| $user_login | `string` | Numele de utilizator al utilizatorului. |
| $user_data | `\WP_User` | Obiect WP_User. |

### De la

- 2.8.0
- 4.4.0: A adăugat parametrii <code>$user_login</code> și <code>$user_data</code>.
### Sursă

Definit în [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) la linia 135


## Returnează
Titlul implicit al email-ului.
