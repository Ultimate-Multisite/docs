---
id: retrieve_password_message
title: Scagaire - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Scagaire: retrieve_password_message {#filter-retrievepasswordmessage}

Scagann sé corp theachtaireacht ríomhphoist athshocraithe pasfhocail.

## Paraiméadair {#parameters}

| Ainm | Cineál | Cur síos |
|------|------|-------------|
| $message | `string` | Teachtaireacht ríomhphoist réamhshocraithe. |
| $key | `string` | An eochair ghníomhachtaithe. |
| $user_login | `string` | An t-ainm úsáideora don úsáideoir. |
| $user_data | `\WP_User` | Oibiacht WP_User. |

### Ó {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Foinse {#source}

Sainithe in [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) ag líne 149


## Filleann {#returns}
Teachtaireacht ríomhphoist réamhshocraithe.
