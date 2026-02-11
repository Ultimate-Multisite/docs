---
id: wu_post_count_statuses
title: Filtre - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filter: wu_post_count_statuses

Permet aux développeurs de plugins de changer quel statut de publication doit être compté. Par défaut, les publications publiées et privées sont comptées.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $post_status | `array` | La liste des statuts de publication |
| $post_type | `string` | Le slug du type de publication |

### Since

- 1.9.1

### Source

Défini dans [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) à la ligne 119

## Returns

Nouveau tableau de statuts de publication
