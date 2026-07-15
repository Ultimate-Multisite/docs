---
id: wu_membership_calculated_date_expiration
title: Pansala - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# Filter: wu_membership_calculated_date_expiration

Gi-filter ang gikalkulang petsa sa pag-expire.

## Mga Parameter {#parameters}

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $expiration | `string` | Gikalkulang petsa sa pag-expire sa MySQL format. |
| $membership_id | `int` | ID sa membership. |
| $membership | `\WP_Ultimo\Models\Membership` | Membership object. |

### Sukad {#since}

- 2.0
### Tinubdan {#source}

Gihubit sa [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) sa linya 1309
