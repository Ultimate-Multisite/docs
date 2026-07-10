---
id: retrieve_password_title
title: Filter - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title {#filter-retrievepasswordtitle}

Filter die onderwerp van die wagwoordreset-e-pos.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $title | `string` | Standaard e-posonderwerp. |
| $user_login | `string` | Die gebruikersnaam vir die gebruiker. |
| $user_data | `\WP_User` | WP_User objek. |

### Since {#since}

- 2.8.0
- 4.4.0: Het die <code>$user_login</code> en <code>$user_data</code> parameters bygevoeg.
### Source {#source}

Bepaald in [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) by bladsy 135


## Returns {#returns}
Die standaard e-posonderwerp.
