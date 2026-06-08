---
id: retrieve_password_title
title: Filter - retrieve_password_title
sidebar_label: retrieve_password_title
_i18n_hash: 7fcf454c64361885b8f64cc6fbc9ba93
---
# Filter: retrieve_password_title

Mengatur subjek email reset password.

## Parameter

| Name | Type | Description |
|------|------|-------------|
| $title | `string` | Judul email default. |
| $user_login | `string` | Nama pengguna (username) untuk pengguna tersebut. |
| $user_data | `\WP_User` | Objek WP_User. |

### Sejak

- 2.8.0
- 4.4.0: Menambahkan parameter `<code>$user_login</code>` dan `<code>$user_data</code>`.
### Sumber

Didefinisikan di [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L135) pada baris 135


## Mengembalikan
Judul email default.
