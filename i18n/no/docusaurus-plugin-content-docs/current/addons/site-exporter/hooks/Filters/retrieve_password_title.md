---
id: retrieve_password_title
title: Filter - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title {#filter-retrievepasswordtitle}

Filtrerer emnefeltet i passordtilbakestillings-e-posten.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $title | `string` | Standard emnefelt for e-posten. |
| $user_login | `string` | Brukernavnet til brukeren. |
| $user_data | `\WP_User` | WP_User-objekt. |

### Siden {#since}

- 2.8.0
- 4.4.0: Legget til parameterne <code>$user_login</code> og <code>$user_data</code>.
### Kilde {#source}

Definert i [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) på linje 135


## Returnerer {#returns}
Standard emnefelt for e-posten.
