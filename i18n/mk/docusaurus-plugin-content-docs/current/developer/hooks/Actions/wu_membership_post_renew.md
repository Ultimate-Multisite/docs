---
id: wu_membership_post_renew
title: Дејство - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew

Се активира по обновувањето на членството.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Нов датум на истекување што треба да се постави. |
| $membership_id | `int` | ID на членството. |
| $membership | `\Membership` | Објект на членство. |

### Од верзија

- 2.0
### Извор

Дефинирано во [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) на линија 2235
