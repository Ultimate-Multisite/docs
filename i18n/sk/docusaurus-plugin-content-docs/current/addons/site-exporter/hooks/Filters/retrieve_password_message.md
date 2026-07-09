---
id: retrieve_password_message
title: Filter – retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

Filtruje telo správy e-mailu na obnovenie hesla.

## Parametre

| Názov | Typ | Popis |
|------|------|-------------|
| $message | `string` | Predvolená e-mailová správa. |
| $key | `string` | Aktivačný kľúč. |
| $user_login | `string` | Používateľské meno používateľa. |
| $user_data | `\WP_User` | Objekt WP_User. |

### Od verzie

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Zdroj

Definované v [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) na riadku 149


## Vráti
Predvolená e-mailová správa.
