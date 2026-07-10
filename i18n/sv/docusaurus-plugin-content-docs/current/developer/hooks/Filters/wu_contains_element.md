---
id: wu_contains_element
title: Filter - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# Filter: wu_contains_element {#filter-wucontainselement}

Låter utvecklare ändra resultatet av den initiala sökningen.

Detta är användbart för tredjepartsbyggare och liknande.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $contains_elements | `bool` | Om elementet finns på innehållet. |
| $content | `string` | Innehållet som granskas. |
| $element | `self` | Det aktuella elementet. |
| $post | `null\|\WP_Post` | Inlägg som ska kontrolleras. |

### Sedan {#since}

- 2.0.0
### Källa {#source}

Definieras i [`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) på rad 534
