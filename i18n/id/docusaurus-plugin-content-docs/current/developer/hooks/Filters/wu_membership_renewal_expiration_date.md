---
id: wu_membership_renewal_expiration_date
title: Filter - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Filter: wu_membership_renewal_expiration_date

Menyaring tanggal kedaluwarsa yang dihitung agar ditetapkan setelah perpanjangan.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Tanggal kedaluwarsa yang dihitung. |
| $plan | `\Product` | Objek level keanggotaan. |
| $membership_id | `int` | ID keanggotaan. |
| $membership | `\Membership` | Objek keanggotaan. |

### Sejak {#since}

- 2.0.0
### Sumber {#source}

Didefinisikan di [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) pada baris 2192
