---
id: wu_membership_calculated_date_expiration
title: Филтер - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# Филтер: wu_membership_calculated_date_expiration

Го филтрира пресметаниот датум на истекување.

## Параметри

| Име | Тип | Опис |
|------|------|-------------|
| $expiration | `string` | Пресметан датум на истекување во MySQL формат. |
| $membership_id | `int` | ID на членството. |
| $membership | `\WP_Ultimo\Models\Membership` | Објект на членство. |

### Од

- 2.0
### Извор

Дефинирано во [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) на линија 1309
