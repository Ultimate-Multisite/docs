---
id: wu_membership_post_renew
title: Aksi - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew

Dipicu setelah perpanjangan keanggotaan.

## Parameter

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $expiration | `string` | Tanggal kedaluwarsa baru yang akan diatur. |
| $membership_id | `int` | ID keanggotaan. |
| $membership | `\Membership` | Objek keanggotaan. |

### Sejak

- 2.0
### Sumber

Didefinisikan di [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) pada baris 2235
