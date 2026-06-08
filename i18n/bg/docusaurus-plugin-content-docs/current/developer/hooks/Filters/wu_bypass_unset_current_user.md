---
id: wu_bypass_unset_current_user
title: Филтър - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Филтър: wu_bypass_unset_current_user

Позволява на разработчиците да заобиколят кода за изключване на текущия потребител.

Връщането на нещо друго освен `null` ще заобиколи изключването на текущия входен потребител. Това може да бъде полезно в някои сценарии, например при работа с подсайтове, които се използват като административни панели.

## Параметри

| Име | Тип | Описание |
|------|------|-------------|
| $null_or_bypass | `mixed` | `null` за продължаване, всичко друго за заобикаляне. |
| $current_user | `false\|\WP_User` | Обектът на текущия потребител. |

### От

- 2.0.11
### Източник

Дефиниран в [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) на ред 221

## Връща

(Текстът тук е празен, запазвам структурата)
