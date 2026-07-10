---
id: switch_network
title: Acțiune - switch_network
sidebar_label: switch_network
_i18n_hash: 40e813a787afb90d335c7dd7b8c93eb2
---
# Action: switch_network {#action-switchnetwork}

Se declanșează când contextul curent de rețea este schimbat.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $new_network_id | `int` | ID-ul rețelei către care se trece. |
| $old_network_id | `int` | ID-ul rețelei care era curentă anterior. |

### De la {#since}

- 1.3.0
### Sursă {#source}

Definit în [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L859) la linia 859
