---
id: wu_contains_element
title: Filter - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# Filter: wu_contains_element

Umožňuje vývojářům změnit výsledky počátečního vyhledávání.

Je to užitečné pro externí konstruktory a podobné systémy.

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $contains_elements | `bool` | Zkontroluje, zda je prvek obsažen v obsahu. |
| $content | `string` | Obsah, který je zkoumán. |
| $element | `self` | Aktuální prvek. |
| $post | `null\|\WP_Post` | Příspěvek, který je kontrolován. |

### Od

- 2.0.0
### Zdroj

Definováno v [`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) na řádku 534
