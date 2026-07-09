---
id: wu_bypass_unset_current_user
title: Penapis - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user {#filter-wubypassunsetcurrentuser}

Membenarkan pembangun untuk melepasi kod `unset current user`.

Mengembalikan apa-apa selain `null` akan melepasi proses penghapusan pengguna semasa yang log masuk. Ini boleh berguna dalam beberapa senario, contohnya, apabila berurusan dengan sub-situs yang digunakan sebagai panel pentadbir.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | `null` untuk meneruskan, apa-apa nilai lain untuk melepasi proses tersebut. |
| $current_user | `false\|\WP_User` | Objek pengguna semasa. |

### Since {#since}

- 2.0.11
### Source {#source}

Didefinisikan dalam [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) pada baris 221

## Returns {#returns}
