---
id: move_site
title: Acțiune - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Acțiune: move_site {#action-movesite}

Se declanșează după ce un site a fost mutat într-o nouă rețea.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $site_id | `int` | ID-ul site-ului care a fost mutat. |
| $old_network_id | `int` | ID-ul rețelei originale pentru site. |
| $new_network_id | `int` | ID-ul rețelei către care a fost mutat site-ul. |

### De la {#since}

- 1.3.0
### Sursă {#source}

Definit în [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) la linia 1587
