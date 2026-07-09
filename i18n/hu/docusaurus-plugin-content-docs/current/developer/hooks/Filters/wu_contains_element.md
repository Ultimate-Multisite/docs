---
id: wu_contains_element
title: Filter - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# Filter: wu_contains_element {#filter-wucontainselement}

A fejlesztőknek lehetővé teszi, hogy módosítsák az eredeti keresési eredményeket.

Ez hasznos külső (third-party) page buildereknek és hasonló eszközöknek.

## Paraméterek {#parameters}

| Név | Típus | Leírás |
|------|------|-------------|
| $contains_elements | `bool` | Ha az elem tartalmában található. |
| $content | `string` | Az átvizelt tartalom. |
| $element | `self` | Az aktuális elem. |
| $post | `null\|\WP_Post` | Az ellenőrizendő post. |

### Since {#since}

- 2.0.0
### Forrás {#source}

Definíciója található [`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) fájlban, 534-sorban.
