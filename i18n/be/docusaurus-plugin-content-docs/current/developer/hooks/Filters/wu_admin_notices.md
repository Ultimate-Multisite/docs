---
id: wu_admin_notices
title: Фільтр - wu_admin_notices
sidebar_label: wu_admin_notices
_i18n_hash: b98d294d75277dfcfd941ca0e573e10c
---
# Filter: wu_admin_notices {#filter-wuadminnotices}

Гэта дазваляе рэалізантам фільтраваць паведамленні адмінастрацыі, якія дадаў Ultimate Multisite.

## Параметры {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $notices | `array` | Спіс паведамленняў для гэтага канкрэтнага панэля. |
| $all_notices | `array` | Спіс дададзеных паведамленняў, падзелены па панэлях. |
| $panel | `string` | Панэль, з якога трэба атрымаць паведамленні. |
| $filter | `string` | Калі паведамленні, якія можна закрыць, былі адфільтрэваны. |
| $dismissed_messages | `array` | Спіс ключаў паведамленняў, якія былі закрыты. |

### Since {#since}

- 2.0.0
### Source {#source}

Вызначаны ў [`inc/class-admin-notices.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-admin-notices.php#L121) на 121-й кропцы.


## Returns {#returns}
