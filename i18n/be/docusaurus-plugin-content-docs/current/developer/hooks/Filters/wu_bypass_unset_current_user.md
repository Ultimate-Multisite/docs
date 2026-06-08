---
id: wu_bypass_unset_current_user
title: Фільтр - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

Дазваляе рэкабітэнтам праскочыць (bypass) код, які адключае (unset) датэжыні карыстальніка.

Паўтарэнне чагосьці, што не нуль (null), адключыць датэжыні карыстальніка, які ўвайшоў у сістэму. Гэта можа быць карысным у некаторых сценарыях, напрыклад, калі выпрацоўваеце з субсайтамі, якія выкарыстоўваюцца як адмінскія панэлі.

## Параметры

| Назва | Тып | Апісан |
|------|------|-------------|
| $null_or_bypass | `mixed` | Нуль, каб прайсці мінуў, або што-га пайменне, каб праскочыць гэта. |
| $current_user | `false\|\WP_User` | Аબ્'ект датэжыні карыстальніка. |

### З

- 2.0.11
### Паходжанне

Вызначана ў [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) на 221-й паўніне


## Павяртае
