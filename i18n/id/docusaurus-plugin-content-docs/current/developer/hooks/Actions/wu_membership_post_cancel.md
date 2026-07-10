---
id: wu_membership_post_cancel
title: Action - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Action: wu_membership_post_cancel {#action-wumembershippostcancel}

Dipicu setelah keanggotaan dibatalkan.

Ini memicu email pembatalan.

## Parameter {#parameters}

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $membership_id | `int` | ID keanggotaan. |
| $membership | `\WP_Ultimo\Models\Membership` | Objek keanggotaan. |

### Sejak {#since}

- 2.0
### Sumber {#source}

Didefinisikan di [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) pada baris 2290
