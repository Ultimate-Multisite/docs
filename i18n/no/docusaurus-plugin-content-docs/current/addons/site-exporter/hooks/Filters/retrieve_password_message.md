---
id: retrieve_password_message
title: Filter - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message {#filter-retrievepasswordmessage}

Filtrerer meldingsteksten i e-posten for tilbakestilling av passord.

## Parametere {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Standard e-postmelding. |
| $key | `string` | Aktiveringsnøkkelen. |
| $user_login | `string` | Brukernavnet til brukeren. |
| $user_data | `\WP_User` | WP_User-objekt. |

### Siden {#since}

- 2.8.0
- 4.1.0: Lagt til <code>$user_login</code> og <code>$user_data</code> parametere.
### Kilde {#source}

Definert i [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) på linje 149


## Returnerer {#returns}
Standard e-postmelding.
