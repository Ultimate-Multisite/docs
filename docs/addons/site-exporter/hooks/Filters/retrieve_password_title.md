---
id: retrieve_password_title
title: "Filter - retrieve_password_title"
sidebar_label: "retrieve_password_title"
---

# Filter: retrieve_password_title

Filters the subject of the password reset email.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $title | `string` | Default email title. |
| $user_login | `string` | The username for the user. |
| $user_data | `\WP_User` | WP_User object. |

### Since

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Source

Defined in [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) at line 135


## Returns
Default email title.
