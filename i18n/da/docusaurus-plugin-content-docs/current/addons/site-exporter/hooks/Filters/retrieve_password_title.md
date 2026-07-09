---
id: retrieve_password_title
title: Filter - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

Filtrerer emnet for e-mailen til nulstilling af adgangskode.

## Parametre

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $title | `string` | Standard e-mailtitel. |
| $user_login | `string` | Brugernavnet for brugeren. |
| $user_data | `\WP_User` | WP_User-objekt. |

### Siden

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Kilde

Defineret i [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) på linje 135


## Returnerer
Standard e-mailtitel.
