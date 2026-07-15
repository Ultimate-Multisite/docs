---
id: wu_admin_notices
title: Филтер - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Филтер: wu_admin_notices

Дозволете им на програмерите да ги филтрираат администраторските известувања додадени од Ultimate Multisite.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $notices | `array` | Листа на известувања за тој конкретен панел. |
| $all_notices | `array` | Листа на додадени известувања, одделени по панел. |
| $panel | `string` | Панел за преземање на известувањата. |
| $filter | `string` | Дали известувањата што може да се отфрлат биле филтрирани. |
| $dismissed_messages | `array` | Листа на клучеви на отфрлени известувања. |

### Од верзија {#since}

- 2.0.0
### Извор {#source}

Дефинирано во [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) на линија 121


## Враќа {#returns}
