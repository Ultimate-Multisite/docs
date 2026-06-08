---
id: wu_membership_pre_renew
title: Дія - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Дія: wu_membership_pre_renew

Виконується перед оновленням членства.

## Параметри

| Ім'я | Тип | Опис |
|------|------|-------------|
| $expiration | `string` | Нова дата закінчення терміну, яку потрібно встановити. |
| $membership_id | `int` | Ідентифікатор членства. |
| $membership | `\Membership` | Об'єкт членства. |

### З версії

- 2.0
### Джерело

Визначено в [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) на рядку 2204
