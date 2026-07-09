---
id: retrieve_password_message
title: Nzacha - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message {#filter-retrievepasswordmessage}

Na-enyocha ọdịnaya ozi nke email mmegharị okwuntughe.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Ozi email ndabara. |
| $key | `string` | Igodo mmalite. |
| $user_login | `string` | Aha njirimara maka onye ọrụ. |
| $user_data | `\WP_User` | Ihe WP_User. |

### Kemgbe {#since}

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Isi mmalite {#source}

A kọwara ya na [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) na ahịrị 149


## Returns {#returns}
Ozi email ndabara.
