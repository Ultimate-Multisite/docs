---
id: wu_membership_pre_cancel
title: Действие - wu_membership_pre_cancel
sidebar_label: wu_membership_pre_cancel
_i18n_hash: 0a9e6270824bf3aeac93b4ad8909f4d3
---
# Action: wu_membership_pre_cancel {#action-wumembershipprecancel}

Изпълнява се преди отмяната на членството.

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $membership_id | `int` | Идентификаторът на членството. |
| $membership | `\WP_Ultimo\Models\Membership` | Обект на членството. |

### От {#since}

- 2.0
### Източник {#source}

Дефиниран в [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2267) на ред 2267
