---
id: wu_membership_post_cancel
title: Дејство - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Action: wu_membership_post_cancel

Се активира откако членството ќе биде откажано.

Ова ја активира е-поштата за откажување.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership_id | `int` | ID на членството. |
| $membership | `\WP_Ultimo\Models\Membership` | Објект на членството. |

### Од {#since}

- 2.0
### Извор {#source}

Дефинирано во [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) на линија 2290
