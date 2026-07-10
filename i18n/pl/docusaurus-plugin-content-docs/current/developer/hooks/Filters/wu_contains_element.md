---
id: wu_contains_element
title: Filtr - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# Filtr: wu_contains_element {#filter-wucontainselement}

Pozwala deweloperom zmienić wyniki wstępnego wyszukiwania.

Jest to przydatne dla zewnętrznych edytorów (builderów) i podobnych narzędzi.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $contains_elements | `bool` | Czy element jest zawarty w treści. |
| $content | `string` | Treść, którą sprawdzamy. |
| $element | `self` | Aktualny element. |
| $post | `null\|\WP_Post` | Post, który ma zostać sprawdzony. |

### Od {#since}

- 2.0.0
### Źródło {#source}

Zdefiniowane w [`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) w linii 534
