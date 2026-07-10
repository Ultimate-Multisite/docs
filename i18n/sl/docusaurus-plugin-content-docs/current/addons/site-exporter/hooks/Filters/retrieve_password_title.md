---
id: retrieve_password_title
title: Filter - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title {#filter-retrievepasswordtitle}

Filtrira zadevo e-poštnega sporočila za ponastavitev gesla.

## Parametri {#parameters}

| Ime | Tip | Opis |
|------|------|-------------|
| $title | `string` | Privzeti naslov e-poštnega sporočila. |
| $user_login | `string` | Uporabniško ime za uporabnika. |
| $user_data | `\WP_User` | Objekt WP_User. |

### Od različice {#since}

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Vir {#source}

Definirano v [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) v vrstici 135


## Vrne {#returns}
Privzeti naslov e-poštnega sporočila.
