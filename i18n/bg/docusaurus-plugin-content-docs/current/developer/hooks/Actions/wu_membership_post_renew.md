---
id: wu_membership_post_renew
title: Действие - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew

Изпълнява се след преновяване на членството.

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $expiration | `string` | Новата дата на изтичане, която трябва да бъде зададена. |
| $membership_id | `int` | ID на членството. |
| $membership | `\Membership` | Обект на членството. |

### От {#since}

- 2.0
### Източник {#source}

Дефиниран в [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) на линия 2235
