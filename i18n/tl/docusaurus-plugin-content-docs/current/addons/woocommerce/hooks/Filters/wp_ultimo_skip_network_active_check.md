---
id: wp_ultimo_skip_network_active_check
title: Pansala - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check {#filter-wpultimoskipnetworkactivecheck}

Pinapayagan ang mga developer na i-short-circuit ang pagsusuri ng network activation.

Kapaki-pakinabang ito kapag gumagamit ng composer-based at iba pang custom na setup, tulad ng Bedrock, halimbawa, kung saan ang paggamit ng mga plugin bilang mu-plugins ang karaniwan.

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Kung dapat ba nating laktawan ang pagsusuri o hindi, default ay false. |

### Mula noong {#since}

- 2.0.0
### Pinagmulan {#source}

Tinukoy sa [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) sa linya 272


## Mga Return {#returns}
true kung nais mong laktawan ang pagsusuri, false kung hindi.
