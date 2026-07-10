---
id: wp_ultimo_skip_network_active_check
title: Sía - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check {#filter-wpultimoskipnetworkactivecheck}

Gerir forriturum kleift að fara framhjá athugun á netvirkjun.

Þetta er gagnlegt þegar notaðar eru composer-byggðar og aðrar sérsniðnar uppsetningar, til dæmis Bedrock, þar sem notkun plugin sem mu-plugins er venjan.

## Færibreytur {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Hvort við eigum að sleppa athuguninni eða ekki, sjálfgefið false. |

### Síðan {#since}

- 2.0.0
### Uppruni {#source}

Skilgreint í [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) í línu 272


## Skilar {#returns}
true ef þú vilt sleppa athuguninni, annars false.
