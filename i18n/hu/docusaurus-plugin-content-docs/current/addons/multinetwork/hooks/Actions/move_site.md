---
id: move_site
title: Akció - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Action: move_site {#action-movesite}

Elfogván/Elkicking, amikor egy oldalt egy új hálózatba mozdítanak.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $site_id | `int` | Az elmozdított oldal azonosítója. |
| $old_network_id | `int` | Az oldal eredeti hálózatának azonosítója. |
| $new_network_id | `int` | Az oldal elmozdulásának célhálózatának azonosítója. |

### Öttek {#since}

- 1.3.0
### Forrás {#source}

Definálva a [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) fájlban, 1587-sorban.
