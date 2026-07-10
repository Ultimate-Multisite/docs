---
id: wu_apc_process_page_content
title: Фильтр — wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Фильтр: wu_apc_process_page_content {#filter-wuapcprocesspagecontent}

Позволяет разработчикам изменять итоговое содержимое

## Параметры {#parameters}

| Имя | Тип | Описание |
|------|------|-------------|
| $content | `string` | Content after replacements. |
| $content_before_processing | `string` | Content pre replecements. |
| $to_replace | `array` | Array containing the placeholders hold. |
| $placeholder_count | `int` | Number of placeholders found. |

### Начиная с версии {#since}

- 1.4.0
### Источник {#source}

Определено в [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) в строке 46


## Возвращает {#returns}
Содержимое после изменения.
