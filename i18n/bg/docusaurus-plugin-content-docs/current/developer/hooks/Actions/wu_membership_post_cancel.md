---
id: wu_membership_post_cancel
title: Действие - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Action: wu_membership_post_cancel {#action-wumembershippostcancel}

Активира се след отмяната на членството.

Това изпраща имейла за отмяна.

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $membership_id | `int` | ID на членството. |
| $membership | `\WP_Ultimo\Models\Membership` | Обект на членството. |

### От {#since}

- 2.0
### Източник {#source}

Дефиниран в [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) на линия 2290
