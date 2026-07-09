---
id: retrieve_password_title
title: Pansala - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title {#filter-retrievepasswordtitle}

Sinasala ang paksa ng email para sa pag-reset ng password.

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $title | `string` | Default na pamagat ng email. |
| $user_login | `string` | Ang username para sa user. |
| $user_data | `\WP_User` | WP_User object. |

### Mula noong {#since}

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Pinagmulan {#source}

Tinukoy sa [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) sa linya 135


## Mga Ibinabalik {#returns}
Default na pamagat ng email.
