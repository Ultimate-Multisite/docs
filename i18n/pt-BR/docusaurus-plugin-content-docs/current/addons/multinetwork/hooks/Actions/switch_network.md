---
id: switch_network
title: Ação - switch_network
sidebar_label: switch_network
_i18n_hash: 40e813a787afb90d335c7dd7b8c93eb2
---
# Action: switch_network {#action-switchnetwork}

Dispara quando o contexto da rede atual é alterado.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $new_network_id | `int` | ID da rede que está sendo alterada. |
| $old_network_id | `int` | ID da rede que era a atual anteriormente. |

### Since {#since}

- 1.3.0

### Source {#source}

Defined in [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L859) at line 859
