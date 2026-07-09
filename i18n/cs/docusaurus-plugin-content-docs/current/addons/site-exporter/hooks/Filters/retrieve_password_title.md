---
id: retrieve_password_title
title: Filtrační funkce - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filtr: retrieve_password_title {#filter-retrievepasswordtitle}

Tento filtr upravuje předmět e-mailu pro reset hesla.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $title | `string` | Výchozí název e-mailu. |
| $user_login | `string` | Uživatelské jméno uživatele. |
| $user_data | `\WP_User` | Objekt WP_User. |

### Od verze {#since}

- 2.8.0
- 4.4.0: Přidány parametry <code>$user_login</code> a <code>$user_data</code>.
### Zdroj {#source}

Definováno v [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) na řádku 135


## Vrací {#returns}
Výchozí název e-mailu.
