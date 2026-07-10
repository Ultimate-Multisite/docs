---
id: switch_network
title: Akcia - switch_network
sidebar_label: switch_network
_i18n_hash: 40e813a787afb90d335c7dd7b8c93eb2
---
# Akcia: switch_network {#action-switchnetwork}

Spustí sa, keď sa prepne aktuálny sieťový kontext.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $new_network_id | `int` | ID siete, na ktorú sa prepína. |
| $old_network_id | `int` | ID predtým aktuálnej siete. |

### Od verzie {#since}

- 1.3.0
### Zdroj {#source}

Definované v [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L859) na riadku 859
