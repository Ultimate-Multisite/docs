---
id: wu_apc_process_page_content
title: Филтер - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Филтер: wu_apc_process_page_content {#filter-wuapcprocesspagecontent}

Им дозволува на програмерите да ја изменат конечната содржина

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $content | `string` | Содржина по замените. |
| $content_before_processing | `string` | Содржина пред замените. |
| $to_replace | `array` | Низа што ги содржи зачуваните placeholders. |
| $placeholder_count | `int` | Број на пронајдени placeholders. |

### Од {#since}

- 1.4.0
### Извор {#source}

Дефинирано во [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) на линија 46


## Враќа {#returns}
Содржина по измената.
