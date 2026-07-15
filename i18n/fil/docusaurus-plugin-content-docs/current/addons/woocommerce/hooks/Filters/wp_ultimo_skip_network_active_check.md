---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

Nagpapahintulot ito sa mga developer na i-skip (short-circuit) ang pag-check kung aktibo ba ang network.

Kapaki-pakinabang ito kapag gumagamit ka ng mga setup na base sa composer at iba pang custom na pag-aayos, tulad ng Bedrock, halimbawa, kung saan ang paggamit ng mga plugin bilang mu-plugins ay karaniwan.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Kung gusto nating i-skip ang pag-check o hindi, ang default ay `false`. |

### Since {#since}

- 2.0.0
### Source {#source}

Nakatakda sa [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) sa linya 272


## Returns {#returns}
`true` kung gusto mong i-skip ang pag-check, at `false` kung hindi.
