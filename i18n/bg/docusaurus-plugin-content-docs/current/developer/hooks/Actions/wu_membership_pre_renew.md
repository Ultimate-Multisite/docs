---
id: wu_membership_pre_renew
title: Действие - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew

Изпълнява се преди преновяването на членството.

## Параметри

| Name | Type | Описание |
|------|------|-------------|
| $expiration | `string` | Новата дата на изтичане, която трябва да бъде зададена. |
| $membership_id | `int` | ID на членството. |
| $membership | `\Membership` | Обект на членството. |

### От версия

- 2.0
### Източник

Дефиниран в [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) на линия 2204
