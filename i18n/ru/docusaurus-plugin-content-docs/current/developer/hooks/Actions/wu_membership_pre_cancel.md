---
id: wu_membership_pre_cancel
title: Действие - wu_membership_pre_cancel
sidebar_label: wu_membership_pre_cancel
_i18n_hash: 0a9e6270824bf3aeac93b4ad8909f4d3
---
# Action: wu_membership_pre_cancel

Вызывается до отмены членства.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $membership_id | `int` | Идентификатор членства. |
| $membership | `\WP_Ultimo\Models\Membership` | Объект членства. |

### С версии

- 2.0

### Источник

Определено в [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2267) на строке 2267
