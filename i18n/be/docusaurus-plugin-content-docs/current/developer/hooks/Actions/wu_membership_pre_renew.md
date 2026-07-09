---
id: wu_membership_pre_renew
title: Дзея - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew {#action-wumembershipprerenew}

Выконваецца пачатку пановлення ўступства.

## Параметры {#parameters}

| Назва | Тып | Апісан |
|------|------|-------------|
| $expiration | `string` | Новая дата экспірацыі, якая будзе ўстаноўлена. |
| $membership_id | `int` | ID ўступства. |
| $membership | `\Membership` | Объект ўступства. |

### З {#since}

- 2.0
### Шторышча {#source}

Вызначана ў [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) у 2204-й пакульцы.
