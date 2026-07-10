---
id: wu_membership_pre_renew
title: Aksi - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew {#action-wumembershipprerenew}

Dipicu sebelum perpanjangan keanggotaan.

## Parameter {#parameters}

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $expiration | `string` | Tanggal kedaluwarsa baru yang akan diatur. |
| $membership_id | `int` | ID keanggotaan. |
| $membership | `\Membership` | Objek keanggotaan. |

### Sejak {#since}

- 2.0
### Sumber {#source}

Didefinisikan di [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) pada baris 2204
