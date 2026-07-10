---
id: retrieve_password_message
title: Filtras - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filtras: retrieve_password_message {#filter-retrievepasswordmessage}

Filtruoja slaptažodžio atkūrimo el. laiško pranešimo tekstą.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $message | `string` | Numatytasis el. laiško pranešimas. |
| $key | `string` | Aktyvavimo raktas. |
| $user_login | `string` | Naudotojo naudotojo vardas. |
| $user_data | `\WP_User` | WP_User objektas. |

### Nuo {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Šaltinis {#source}

Apibrėžta [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) 149 eilutėje


## Grąžina {#returns}
Numatytąjį el. laiško pranešimą.
