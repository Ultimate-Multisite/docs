---
id: wu_post_count_statuses
title: Filter - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Szűrő: wu_post_count_statuses

Ez a szűrő lehetővé teszi a plugin fejlesztők számára, hogy megváltoztassák, hogy melyik poszt státuszt kell számolni. Alapértelmezés szerint a közzétett és a magán posztokat számolja.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $post_status | `array` | A poszt státusza listája |
| $post_type | `string` | A poszt típusa (slug) |

### Since {#since}

- 1.9.1
### Source {#source}

Definíciója található [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) fájlban, 119-sorban.

## Várható visszaadás {#returns}
Új poszt státusza tömb
