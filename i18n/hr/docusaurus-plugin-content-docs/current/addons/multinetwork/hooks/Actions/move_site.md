---
id: move_site
title: Radnja - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Akcija: move_site {#action-movesite}

Pokreće se nakon što je site premješten u novu mrežu.

## Parametri {#parameters}

| Naziv | Tip | Opis |
|------|------|-------------|
| $site_id | `int` | ID sitea koji je premješten. |
| $old_network_id | `int` | ID izvorne mreže za site. |
| $new_network_id | `int` | ID mreže u koju je site premješten. |

### Od verzije {#since}

- 1.3.0
### Izvor {#source}

Definirano u [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) na retku 1587
