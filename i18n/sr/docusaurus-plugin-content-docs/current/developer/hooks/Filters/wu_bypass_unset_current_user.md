---
id: wu_bypass_unset_current_user
title: Филтер - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Филтер: wu_bypass_unset_current_user {#filter-wubypassunsetcurrentuser}

Омогућава програмерима да заобиђу код за поништавање тренутног корисника.

Враћање било чега осим null заобићи ће поништавање тренутно пријављеног корисника. Ово може бити корисно у неким сценаријима, на пример, када се ради са под-сајтовима који се користе као администраторски панели.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null за наставак, било шта друго да се то заобиђе. |
| $current_user | `false\|\WP_User` | Објекат тренутног корисника. |

### Од верзије {#since}

- 2.0.11
### Извор {#source}

Дефинисано у [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) у реду 221


## Враћа се {#returns}
