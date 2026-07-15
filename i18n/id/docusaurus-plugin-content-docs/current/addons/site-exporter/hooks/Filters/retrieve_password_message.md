---
id: retrieve_password_message
title: Filter - retrieve_password_message
sidebar_label: retrieve_password_message
_i18n_hash: c1e9fbd9909dd93e70f291de55ba00e4
---
# Filter: retrieve_password_message

Memfilter isi pesan email reset kata sandi.

## Parameter {#parameters}

| Name | Type | Deskripsi |
|------|------|-------------|
| $message | `string` | Isi pesan email standar. |
| $key | `string` | Kunci aktivasi. |
| $user_login | `string` | Nama pengguna (username) untuk pengguna. |
| $user_data | `\WP_User` | Objek WP_User. |

### Sejak {#since}

- 2.8.0
- 4.1.0: Menambahkan parameter <code>$user_login</code> dan <code>$user_data</code>.
### Sumber {#source}

Didefinisikan di [`inc/mu-migration/includes/commands/class-mu-migration-users.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/commands/class-mu-migration-users.php#L149) pada baris 149


## Mengembalikan {#returns}
Isi pesan email standar.
