---
id: move_site
title: Acció - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Acció: move_site

S'executa després que un lloc web hagi estat traslladat a una nova xarxa (network).

## Paràmetres

| Nom | Tipus | Descripció |
|------|------|-------------|
| $site_id | `int` | L'ID del lloc web que s'ha traslladat. |
| $old_network_id | `int` | L'ID de la xarxa original del lloc web. |
| $new_network_id | `int` | L'ID de la xarxa a la qual s'ha traslladat el lloc web. |

### Des

- 1.3.0
### Font

Definit en [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) a la línia 1587
