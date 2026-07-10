---
id: switch_network
title: Ação - switch_network
sidebar_label: switch_network
_i18n_hash: 40e813a787afb90d335c7dd7b8c93eb2
---
# Ação: switch_network {#action-switchnetwork}

Disparada quando o contexto de rede atual é alterado.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $new_network_id | `int` | ID da rede para a qual está a ser alterada. |
| $old_network_id | `int` | ID da rede anteriormente atual. |

### Desde {#since}

- 1.3.0
### Fonte {#source}

Definida em [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L859) na linha 859
