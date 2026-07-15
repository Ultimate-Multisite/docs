---
id: retrieve_password_title
title: Filter - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

Filtruje predmet e-mailu na obnovenie hesla.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $title | `string` | Predvolený názov e-mailu. |
| $user_login | `string` | Používateľské meno používateľa. |
| $user_data | `\WP_User` | Objekt WP_User. |

### Od verzie {#since}

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Zdroj {#source}

Definované v [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) na riadku 135


## Vracia {#returns}
Predvolený názov e-mailu.
