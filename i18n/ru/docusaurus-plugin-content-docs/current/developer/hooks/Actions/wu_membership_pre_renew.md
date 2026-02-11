---
id: wu_membership_pre_renew
title: Действие - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Действие: wu_membership_pre_renew

Триггер до обновления членства.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $expiration | `string` | Новая дата истечения, которую нужно установить. |
| $membership_id | `int` | ID членства. |
| $membership | `\Membership` | Объект членства. |

### С версии

- 2.0

### Источник

Определено в [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) на строке 2204
