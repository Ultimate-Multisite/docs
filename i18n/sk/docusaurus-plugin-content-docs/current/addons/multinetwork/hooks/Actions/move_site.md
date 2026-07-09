---
id: move_site
title: Akcia - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Action: move_site {#action-movesite}

Spustí sa po presunutí stránky do novej siete.

## Parametre {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $site_id | `int` | ID stránky, ktorá bola presunutá. |
| $old_network_id | `int` | ID pôvodnej siete pre stránku. |
| $new_network_id | `int` | ID siete, do ktorej bola stránka presunutá. |

### Od verzie {#since}

- 1.3.0
### Zdroj {#source}

Definované v [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) na riadku 1587
