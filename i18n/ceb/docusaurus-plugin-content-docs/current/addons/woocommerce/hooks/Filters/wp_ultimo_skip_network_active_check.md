---
id: wp_ultimo_skip_network_active_check
title: Pagsala - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Salain: wp_ultimo_skip_network_active_check

Gitugotan ang mga developer nga i-short-circuit ang pagsusi sa network activation.

Mapuslanon kini kung naggamit og composer-based ug uban pang pasadyang mga setup, sama sa Bedrock, pananglitan, diin ang paggamit sa mga plugin isip mu-plugins mao ang kasagaran.

## Mga Parameter

| Ngalan | Tipo | Deskripsyon |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Kung angay ba namong laktawan ang pagsusi o dili, default sa false. |

### Sukad

- 2.0.0
### Tinubdan

Gihubit sa [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) sa linya 272


## Mga Ibalik
true kung gusto nimong laktawan ang pagsusi, false kung dili.
