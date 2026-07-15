---
id: wu_contains_element
title: Filter - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# Filter: wu_contains_element

Giv udviklere mulighed for at ændre resultaterne af den indledende søgning.

Dette er nyttigt til tredjepartsbyggere og lignende.

## Parametre {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $contains_elements | `bool` | Om elementet findes i indholdet. |
| $content | `string` | Indholdet, der undersøges. |
| $element | `self` | Det aktuelle element. |
| $post | `null\|\WP_Post` | indlæg, der skal kontrolleres. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Defineret i [`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) på linje 534
