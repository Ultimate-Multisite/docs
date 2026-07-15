---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

Dit laat ontwikkelaars toe om die netwerkaktivering-kontrole te omseil.

Dit is nuttig wanneer jy op composer-gebaseerde en ander aangepaste opspatings werk, soos Bedrock, byvoorbeeld, waar die gebruik van plugins as mu-plugins die norm is.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Of ons die kontrole moet skip of nie; standaard is vals. |

### Since {#since}

- 2.0.0
### Source {#source}

Bepaald in [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) op lyn 272


## Returns {#returns}
Gee waar true as jy die kontrole wil skip, en vals anders.
