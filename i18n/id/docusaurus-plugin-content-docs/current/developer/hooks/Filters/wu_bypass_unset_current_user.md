---
id: wu_bypass_unset_current_user
title: Filter - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

Memungkinkan pengembang untuk melewati kode yang menghapus pengguna saat ini.

Mengembalikan nilai apa pun selain `null` akan melewati penghapusan pengguna yang sedang masuk. Ini berguna dalam beberapa skenario, misalnya saat berurusan dengan situs anak yang digunakan sebagai panel admin.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | `null` untuk melanjutkan, nilai apa pun lainnya untuk melewati proses tersebut. |
| $current_user | `false\|\WP_User` | Objek pengguna saat ini. |

### Since {#since}

- 2.0.11
### Source {#source}

Didefinisikan di [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) pada baris 221


## Returns {#returns}
