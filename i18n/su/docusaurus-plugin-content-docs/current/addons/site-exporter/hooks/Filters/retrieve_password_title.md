---
id: retrieve_password_title
title: Saringan - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Saringan: retrieve_password_title

Nyaring subjék email reset sandi.

## Paraméter

| Ngaran | Tipe | Pedaran |
|------|------|-------------|
| $title | `string` | Judul email standar. |
| $user_login | `string` | Ngaran pamaké pikeun pamaké éta. |
| $user_data | `\WP_User` | Objék WP_User. |

### Ti saprak

- 2.8.0
- 4.4.0: Added the <code>$user_login</code> and <code>$user_data</code> parameters.
### Sumber

Ditetepkeun dina [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) dina garis 135


## Balikan
Judul email standar.
