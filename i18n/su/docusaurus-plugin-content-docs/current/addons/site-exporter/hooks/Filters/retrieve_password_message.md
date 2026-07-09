---
id: retrieve_password_message
title: Saringan - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Saringan: retrieve_password_message {#filter-retrievepasswordmessage}

Nyaring eusi talatah tina surel reset sandi.

## Paraméter {#parameters}

| Ngaran | Tipe | Pedaran |
|------|------|-------------|
| $message | `string` | Talatah surel standar. |
| $key | `string` | Konci aktivasina. |
| $user_login | `string` | Ngaran pamaké pikeun pamaké éta. |
| $user_data | `\WP_User` | Objék WP_User. |

### Ti mimiti {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Sumber {#source}

Ditetepkeun dina [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) dina baris 149


## Balikan {#returns}
Talatah surel standar.
