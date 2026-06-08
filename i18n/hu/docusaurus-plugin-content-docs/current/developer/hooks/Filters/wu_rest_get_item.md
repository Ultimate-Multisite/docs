---
id: wu_rest_get_item
title: Szűrő - wu_rest_get_item
sidebar_label: wu_rest_get_item
_i18n_hash: 6e3f51a53f5b4bafef3d438273c979c8
---
# Szűrő: wu_rest_get_item

Megállapítja, hogy a kérés tovább haladhat-e, vagy meg kell állítani.

## Paraméterek

| Neve | Típusa | Leírása |
|------|------|-------------|
| $allowed | `bool` | Kezdeti visszaadási érték. |
| $rest_base | `array` | Az entitás slugja. |
| $this | `\Base_Manager` | Az objektum példánat. |

### Kezdő verzió

- 2.0.0
### Forrás

Definálva a [`inc/apis/trait-rest-api.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-rest-api.php#L388) fájlban a 388-edik soron.
