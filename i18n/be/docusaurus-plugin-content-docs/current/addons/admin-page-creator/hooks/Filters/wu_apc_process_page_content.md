---
id: wu_apc_process_page_content
title: Фільтр - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Filter: wu_apc_process_page_content {#filter-wuapcprocesspagecontent}

Дазваляе рэалізавальнікам змяніць канчатковы кантэнт.

## Параметры {#parameters}

| Назва | Тып | Опісанне |
|------|------|-------------|
| $content | `string` | Кантэнт пасля замен. |
| $content_before_processing | `string` | Кантэнт да замен. |
| $to_replace | `array` | Массив, які ўтрымлівае плейсҳолдэры. |
| $placeholder_count | `int` | Колькасць знойдзеных плейсҳолдэраў. |

### З версіі {#since}

- 1.4.0
### Шторышча {#source}

Вызначаны ў [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) на 46-й кропцы.

## Павяртае {#returns}
Кантэнт пасля змены.
