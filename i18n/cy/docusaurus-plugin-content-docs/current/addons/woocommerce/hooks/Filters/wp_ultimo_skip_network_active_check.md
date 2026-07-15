---
id: wp_ultimo_skip_network_active_check
title: Hidlydd - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Hidlydd: wp_ultimo_skip_network_active_check

Caniatáu i ddatblygwyr fyr-gylchu’r gwiriad actifadu rhwydwaith.

Mae hyn yn ddefnyddiol wrth ddefnyddio gosodiadau seiliedig ar composer a gosodiadau personol eraill, megis Bedrock, er enghraifft, lle mae defnyddio ategion fel mu-plugins yn arferol.

## Paramedrau {#parameters}

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $skip_network_activation_check | `bool` | A ddylem hepgor y gwiriad ai peidio, y rhagosodiad yw false. |

### Ers {#since}

- 2.0.0
### Ffynhonnell {#source}

Wedi’i ddiffinio yn [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) ar linell 272


## Dychweliadau {#returns}
true os ydych yn dymuno hepgor y gwiriad, false fel arall.
