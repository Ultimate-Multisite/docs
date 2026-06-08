---
id: retrieve_password_title
title: Filtry - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filtr: retrieve_password_title

Filtruje temat wiadomości e-mail dotyczącej resetowania hasła.

## Parametry

| Nazwa | Typ | Opis |
|------|------|-------------|
| $title | `string` | Domyślny temat wiadomości e-mail. |
| $user_login | `string` | Nazwa użytkownika. |
| $user_data | `\WP_User` | Obiekt WP_User. |

### Od

- 2.8.0
- 4.4.0: Dodano parametry <code>$user_login</code> i <code>$user_data</code>.
### Źródło

Zdefiniowany w [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) w linii 135


## Zwraca
Domyślny temat wiadomości e-mail.
