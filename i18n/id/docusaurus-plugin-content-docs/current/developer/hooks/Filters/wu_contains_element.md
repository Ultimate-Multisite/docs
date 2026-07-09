---
id: wu_contains_element
title: Filter - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# Filter: wu_contains_element {#filter-wucontainselement}

Memungkinkan developer untuk mengubah hasil pencarian awal.

Ini berguna untuk *builder* pihak ketiga dan sejenisnya.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $contains_elements | `bool` | Apakah elemen tersebut terkandung di dalam konten. |
| $content | `string` | Konten yang sedang diperiksa. |
| $element | `self` | Elemen saat ini. |
| $post | `null\|\WP_Post` | *post* yang akan diperiksa. |

### Since {#since}

- 2.0.0
### Source {#source}

Didefinisikan di [`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) pada baris 534
