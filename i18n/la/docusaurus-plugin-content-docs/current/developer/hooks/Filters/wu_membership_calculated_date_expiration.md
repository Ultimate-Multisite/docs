---
id: wu_membership_calculated_date_expiration
title: Filtrum - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# Filtrum: wu_membership_calculated_date_expiration

Filtrat diem exspirationis computatum.

## Parametra

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $expiration | `string` | Dies exspirationis computatus in forma MySQL. |
| $membership_id | `int` | ID sodalitatis. |
| $membership | `\WP_Ultimo\Models\Membership` | Objectum sodalitatis. |

### Ex quo

- 2.0
### Fons

Definitum in [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) ad lineam 1309
