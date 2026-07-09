---
id: switch_network
title: Akce - switch_network
sidebar_label: switch_network
_i18n_hash: 40e813a787afb90d335c7dd7b8c93eb2
---
# Action: switch_network {#action-switchnetwork}

Spustí se, když se změní aktuální kontext sítě.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $new_network_id | `int` | ID sítě, na kterou se přepíná. |
| $old_network_id | `int` | ID předchozí aktuální sítě. |

### Od {#since}

- 1.3.0
### Zdroj {#source}

Definováno v [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L859) na řádku 859
