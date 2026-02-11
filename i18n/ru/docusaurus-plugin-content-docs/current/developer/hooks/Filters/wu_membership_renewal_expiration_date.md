---
id: wu_membership_renewal_expiration_date
title: Фильтр - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Фильтр: wu_membership_renewal_expiration_date

Фильтрует рассчитанную дату истечения срока, чтобы она была установлена после продления.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $expiration | `string` | Вычисленная дата истечения срока. |
| $plan | `\Product` | Объект уровня членства. |
| $membership_id | `int` | Идентификатор членства. |
| $membership | `\Membership` | Объект членства. |

### С версии

- 2.0.0

### Источник

Определено в [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) на строке 2192
