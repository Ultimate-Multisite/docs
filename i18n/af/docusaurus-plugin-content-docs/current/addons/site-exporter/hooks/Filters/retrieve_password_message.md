---
id: retrieve_password_message
title: Filter - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

Filter die boodskapsliggaam van die wagwoordreset-e-pos.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Standaard-e-posboodskap. |
| $key | `string` | Die aktivering sleutel. |
| $user_login | `string` | Die gebruikersnaam vir die gebruiker. |
| $user_data | `\WP_User` | WP_User objek. |

### Since

- 2.8.0
- 4.1.0: Added <code>$user_login</code> and <code>$user_data</code> parameters.
### Source

Defined in [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) at line 149


## Returns
Standaard-e-posboodskap.
