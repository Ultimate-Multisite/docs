---
id: retrieve_password_title
title: Sía - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Sía: retrieve_password_title

Síar efni tölvupósts fyrir endurstillingu lykilorðs.

## Færibreytur {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $title | `string` | Sjálfgefinn titill tölvupósts. |
| $user_login | `string` | Notandanafnið fyrir notandann. |
| $user_data | `\WP_User` | WP_User hlutur. |

### Síðan {#since}

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Uppruni {#source}

Skilgreint í [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) í línu 135


## Skilar {#returns}
Sjálfgefinn titill tölvupósts.
