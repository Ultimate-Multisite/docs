---
id: wu_post_count
title: Filtre - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Filter: wu_post_count

Permet aux développeurs de plugins de modifier le nombre total

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $count | `int` | Le nombre total d'articles |
| $post_counts | `object` | Objet WordPress retourné par la fonction wp_count_posts |
| $post_type | `string` | Le slug du type d'article |

### Depuis

- 1.9.1
### Source

Defined in [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) at line 136

## Returns
Nouveau total
