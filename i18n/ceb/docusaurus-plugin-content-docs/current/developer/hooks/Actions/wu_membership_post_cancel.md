---
id: wu_membership_post_cancel
title: Aksyon - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Action: wu_membership_post_cancel {#action-wumembershippostcancel}

Mo-trigger human makansela ang membership.

Kini mo-trigger sa email sa pagkansela.

## Mga Parameter {#parameters}

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $membership_id | `int` | Ang ID sa membership. |
| $membership | `\WP_Ultimo\Models\Membership` | Membership object. |

### Sukad {#since}

- 2.0
### Tinubdan {#source}

Gihubit sa [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) sa linya 2290
