---
id: retrieve_password_message
title: Filtrum - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Colum: retrieve_password_message {#filter-retrievepasswordmessage}

Corpus nuntii epistulae ad tesseram restituendam colat.

## Parametra {#parameters}

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $message | `string` | Nuntius epistulae praedefinitus. |
| $key | `string` | Clavis activationis. |
| $user_login | `string` | Nomen usoris pro usore. |
| $user_data | `\WP_User` | Obiectum WP_User. |

### Ab {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Fons {#source}

Definitum in [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) ad lineam 149


## Reddit {#returns}
Nuntius epistulae praedefinitus.
