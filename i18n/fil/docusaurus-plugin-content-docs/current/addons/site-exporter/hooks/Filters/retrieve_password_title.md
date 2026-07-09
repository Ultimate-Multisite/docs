---
id: retrieve_password_title
title: Filter - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title {#filter-retrievepasswordtitle}

Binabago nito ang subject (paksa) ng email na ipinapadala kapag nagre-reset ng password.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $title | `string` | Ang default na subject ng email. |
| $user_login | `string` | Ang username ng user. |
| $user_data | `\WP_User` | WP_User object. |

### Since {#since}

- 2.8.0
- 4.4.0: Nagdagdag ng mga parameter na <code>$user_login</code> at <code>$user_data</code>.
### Source {#source}

Tinukoy sa [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) sa linya 135.


## Returns {#returns}
Ang default na subject ng email.
