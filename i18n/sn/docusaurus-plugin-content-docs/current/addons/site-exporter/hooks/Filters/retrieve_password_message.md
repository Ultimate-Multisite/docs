---
id: retrieve_password_message
title: Sefa - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Sefa: retrieve_password_message {#filter-retrievepasswordmessage}

Inosefa muviri weshoko reemail rekugadzirisa patsva password.

## Maparamita {#parameters}

| Zita | Rudzi | Tsananguro |
|------|------|-------------|
| $message | `string` | Shoko reemail rekutanga. |
| $key | `string` | Kiyi yekumisikidza. |
| $user_login | `string` | Zita rekupinda remushandisi. |
| $user_data | `\WP_User` | Chinhu cheWP_User. |

### Kubva {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Kwakabva {#source}

Yakatsanangurwa mu[`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) pamutsetse 149


## Zvinodzoka {#returns}
Shoko reemail rekutanga.
