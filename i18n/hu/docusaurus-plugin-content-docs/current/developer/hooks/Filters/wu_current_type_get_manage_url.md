---
id: wu_current_type_get_manage_url
title: 'Szűrő - wu_current_{$type}_get_manage_url'
sidebar_label: 'wu_current_{$type}_get_manage_url'
_i18n_hash: b3c7180a6e4666d7998ce8a20ba1cfea
---
# Szűrő: wu_current_\{$type\}_get_manage_url {#filter-wucurrenttypegetmanageurl}

Megengedi a fejlesztőknek módosítani az oldal kezelő URL paramétereit.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $manage_site_url | `string` | A site kezelő URL-je. |
| $id | `int` | Az oldal azonosítója. |
| $site_hash | `string` | Az oldal hash-e. |

### Desde {#since}

- 2.0.9
### Forrás {#source}

Definíciója található [`inc/class-current.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-current.php#L214) fájlban, 214-sorban.


## Visszaadja {#returns}
A módosított kezelő URL-t.
