---
id: wu_contains_element
title: Filter - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# Filter: wu_contains_element {#filter-wucontainselement}

Umožňuje vývojárom zmeniť výsledky počiatočného vyhľadávania.

Je to užitočné pre nástroje tretích strán na tvorbu stránok a podobne.

## Parametre {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $contains_elements | `bool` | Či je prvok obsiahnutý v obsahu. |
| $content | `string` | Obsah, ktorý sa skúma. |
| $element | `self` | Aktuálny prvok. |
| $post | `null\|\WP_Post` | príspevok na kontrolu. |

### Od verzie {#since}

- 2.0.0
### Zdroj {#source}

Definované v [`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) na riadku 534
