---
id: wu_post_count
title: Saringan - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Saringan: wu_post_count {#filter-wupostcount}

Ngidini pangembang piranti tambahan ngganti gunggung cacah total

## Paramèter {#parameters}

| Jeneng | Tipe | Katrangan |
|------|------|-------------|
| $count | `int` | Gunggung cacah kiriman total |
| $post_counts | `object` | Objek WordPress sing dibalèkaké déning fn wp_count_posts |
| $post_type | `string` | Slug jinis kiriman |

### Wiwit {#since}

- 1.9.1
### Sumber {#source}

Ditetepaké ing [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) ing larik 136


## Bali {#returns}
Total anyar
