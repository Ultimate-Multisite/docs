---
id: wu_bypass_unset_current_user
title: Фильтр - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Фильтр: wu_bypass_unset_current_user

Позволяет разработчикам обойти код сброса текущего пользователя.

Возврат любого значения, отличного от null, обойдёт сброс текущего пользователя, вошедшего в систему. Это может быть полезно в некоторых сценариях, например, при работе с подсайтами, используемыми как панели администратора.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null для продолжения, всё остальное — обойти. |
| $current_user | `false\|\WP_User` | Объект текущего пользователя. |

### С момента

- 2.0.11

### Источник

Определено в [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) на строке 221


## Возвращает
