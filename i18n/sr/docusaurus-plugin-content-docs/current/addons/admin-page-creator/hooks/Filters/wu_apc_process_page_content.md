---
id: wu_apc_process_page_content
title: Филтер - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Филтер: wu_apc_process_page_content

Омогућава програмерима да мењају коначни садржај

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $content | `string` | Садржај након замена. |
| $content_before_processing | `string` | Садржај пре замена. |
| $to_replace | `array` | Низ који садржи чуваре места. |
| $placeholder_count | `int` | Број пронађених чувара места. |

### Од верзије {#since}

- 1.4.0
### Извор {#source}

Дефинисано у [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) у линији 46


## Враћа {#returns}
Садржај након измене.
