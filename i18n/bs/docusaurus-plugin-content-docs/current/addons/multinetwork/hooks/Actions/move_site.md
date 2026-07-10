---
id: move_site
title: Akcija - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Akcija: move_site {#action-movesite}

Pokreće se nakon što je sajt premešten na novu mrežu.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $site_id | `int` | ID sajta koji je premešten. |
| $old_network_id | `int` | ID originalne mreže za sajt. |
| $new_network_id | `int` | ID mreže na koju je sajt premešten. |

### Od verzije {#since}

- 1.3.0
### Izvor {#source}

Definisano u [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) na liniji 1587
