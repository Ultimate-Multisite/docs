---
id: wu_post_count_statuses
title: Filtru - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Filtru: wu_post_count_statuses

Permite dezvoltatorilor de plugin să modifice ce status de post ar trebui contat. În mod implicit, sunt contate postările cu statusul *published* și *private*.

## Parametri

| Nume | Tip | Descriere |
|------|------|-------------|
| $post_status | `array` | Lista de statusuri de post |
| $post_type | `string` | Slug-ul tipului de post |

### De la

- 1.9.1
### Sursă

Definit în [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) la linia 119


## Returnează
Un nou array cu statusurile de post
