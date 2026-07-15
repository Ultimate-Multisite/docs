---
id: retrieve_password_title
title: Filter - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

Filtrerar ämnet i lösenordsåterställningsmejlet.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $title | `string` | Standardämne för e-postmeddelandet. |
| $user_login | `string` | Användarnamnet för användaren. |
| $user_data | `\WP_User` | WP_User-objekt. |

### Sedan {#since}

- 2.8.0
- 4.4.0: Lägger till parametrarna <code>$user_login</code> och <code>$user_data</code>.
### Källa {#source}

Definieras i [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) på rad 135


## Returnerar {#returns}
Standardämnet för e-postmeddelandet.
