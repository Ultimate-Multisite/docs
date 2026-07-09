---
id: wu_membership_calculated_date_expiration
title: Filter - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# Filter: wu_membership_calculated_date_expiration {#filter-wumembershipcalculateddateexpiration}

Memfilter tanggal kedaluwarsa yang dihitung.

## Parameter {#parameters}

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $expiration | `string` | Tanggal kedaluwarsa yang dihitung dalam format MySQL. |
| $membership_id | `int` | ID keanggotaan. |
| $membership | `\WP_Ultimo\Models\Membership` | Objek keanggotaan. |

### Sejak {#since}

- 2.0
### Sumber {#source}

Didefinisikan di [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) pada baris 1309
