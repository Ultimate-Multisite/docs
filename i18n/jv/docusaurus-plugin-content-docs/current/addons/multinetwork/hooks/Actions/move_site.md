---
id: move_site
title: Tindakan - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Action: move_site {#action-movesite}

Mlaku sawisé site wis dipindhah menyang network anyar.

## Paramèter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $site_id | `int` | ID saka site sing wis dipindhah. |
| $old_network_id | `int` | ID saka network asli kanggo site kasebut. |
| $new_network_id | `int` | ID saka network sing dadi panggonan site dipindhah. |

### Wiwit {#since}

- 1.3.0
### Sumber {#source}

Ditetepaké ing [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) ing baris 1587
