---
id: retrieve_password_message
title: Criathrag - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Criathrag: retrieve_password_message {#filter-retrievepasswordmessage}

Criathraich corp teachdaireachd a’ phuist-d ath-shuidheachadh facail-fhaire.

## Paramadairean {#parameters}

| Ainm | Seòrsa | Tuairisgeul |
|------|------|-------------|
| $message | `string` | Teachdaireachd puist-d bhunaiteach. |
| $key | `string` | An iuchair gnìomhachaidh. |
| $user_login | `string` | An t-ainm-cleachdaiche airson a’ chleachdaiche. |
| $user_data | `\WP_User` | Oibseact WP_User. |

### Bho {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Tùs {#source}

Mìnichte ann an [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) aig loidhne 149


## Tilleadh {#returns}
Teachdaireachd puist-d bhunaiteach.
