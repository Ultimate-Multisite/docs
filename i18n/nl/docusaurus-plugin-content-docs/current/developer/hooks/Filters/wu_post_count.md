---
id: wu_post_count
title: Filter - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count

Laat pluginontwikkelaars de totale telling wijzigen

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $count | `int` | Het totale aantal berichten |
| $post_counts | `object` | WordPress-object geretourneerd door de wp_count_posts-functie |
| $post_type | `string` | De slug van het berichttype |

### Since

- 1.9.1

### Source

Gedefinieerd in [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) op regel 136

## Returns
Nieuwe totale
