---
id: retrieve_password_message
title: Penapis - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

Menapis badan mesej e-mel tetapan semula kata laluan.

## Parameter

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Mesej e-mel lalai. |
| $key | `string` | Kunci pengaktifan. |
| $user_login | `string` | Nama pengguna untuk pengguna. |
| $user_data | `\WP_User` | Objek WP_User. |

### Sejak

- 2.8.0
- 4.1.0: Menambah parameter <code>$user_login</code> dan <code>$user_data</code>.
### Sumber

Didefinisikan dalam [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) pada baris 149

## Mengembalikan
Mesej e-mel lalai.
