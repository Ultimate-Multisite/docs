---
id: wu_post_count_statuses
title: Filtre - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filtre: wu_post_count_statuses

Permet als desenvolupadors de plugins canviar quin estat de publicació s’ha de comptar. Per defecte, es compten les publicacions publicades i privades

## Paràmetres

| Nom | Tipus | Descripció |
|------|------|-------------|
| $post_status | `array` | La llista d’estats de publicació |
| $post_type | `string` | El slug del tipus de publicació |

### Des de

- 1.9.1
### Font

Definit a [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) a la línia 119


## Retorna
Nou array d’estat de publicació
