---
id: wu_admin_notices
title: Филтер - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Филтер: wu_admin_notices {#filter-wuadminnotices}

Омогућава програмерима да филтрирају admin notices које додаје Ultimate Multisite.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $notices | `array` | Листа обавештења за тај конкретан панел. |
| $all_notices | `array` | Листа додатих обавештења, разврстаних по панелу. |
| $panel | `string` | Панел за преузимање обавештења. |
| $filter | `string` | Да ли су обавештења која се могу одбацити филтрирана. |
| $dismissed_messages | `array` | Листа кључева одбачених обавештења. |

### Од верзије {#since}

- 2.0.0
### Извор {#source}

Дефинисано у [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) у реду 121


## Враћа се {#returns}
