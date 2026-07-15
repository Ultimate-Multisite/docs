---
id: retrieve_password_message
title: Filtrační metoda - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

Filtruje tělo zprávy e-mailu pro reset hesla.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $message | `string` | Výchozí zpráva e-mailu. |
| $key | `string` | Aktivizační klíč. |
| $user_login | `string` | Uživatelské jméno uživatele. |
| $user_data | `\WP_User` | Objekt WP_User. |

### Od {#since}

- 2.8.0
- 4.1.0: Přidány parametry <code>$user_login</code> a <code>$user_data</code>.
### Zdroj {#source}

Definováno v [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) na řádku 149.


## Vrací {#returns}
Výchozí zpráva e-mailu.
