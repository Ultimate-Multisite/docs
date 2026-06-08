---
id: wu_membership_calculated_date_expiration
title: Filter - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# Filter: wu_membership_calculated_date_expiration

Szűrőzi a számított lejárati dátumot.

## Paraméterek

| Neve | Típus | Leírás |
|------|------|-------------|
| $expiration | `string` | A számított lejárati dátum MySQL formátumban. |
| $membership_id | `int` | A tagság azonosítója. |
| $membership | `\WP_Ultimo\Models\Membership` | A tagság objektuma. |

### Desde

- 2.0
### Forrás

Meghatározva a [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) fájlban, 1309-sorban.
