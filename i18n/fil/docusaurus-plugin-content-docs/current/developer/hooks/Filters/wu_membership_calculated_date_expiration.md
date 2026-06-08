---
id: wu_membership_calculated_date_expiration
title: Filter - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# Filter: wu_membership_calculated_date_expiration

Sinusuri (o nagba-filter) nito ang kalkuladong petsa ng pag-expire.

## Mga Parameter

| Name | Type | Deskripsyon |
|------|------|-------------|
| $expiration | `string` | Ang kalkuladong petsa ng pag-expire sa format ng MySQL. |
| $membership_id | `int` | Ang ID ng membership. |
| $membership | `\WP_Ultimo\Models\Membership` | Ang object ng membership. |

### Since

- 2.0
### Source

Tinukoy sa [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) sa linya 1309
