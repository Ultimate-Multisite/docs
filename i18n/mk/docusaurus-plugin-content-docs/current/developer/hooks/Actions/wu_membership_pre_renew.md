---
id: wu_membership_pre_renew
title: Дејство - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew

Се активира пред обновувањето на членството.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Нов датум на истекување што треба да се постави. |
| $membership_id | `int` | ID на членството. |
| $membership | `\Membership` | Објект на членство. |

### Од {#since}

- 2.0
### Извор {#source}

Дефинирано во [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) на линија 2204
