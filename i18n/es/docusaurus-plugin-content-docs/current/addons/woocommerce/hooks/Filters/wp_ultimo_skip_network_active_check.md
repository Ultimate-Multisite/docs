---
id: wp_ultimo_skip_network_active_check
title: Filtro - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

Allow for developers to short-circuit the network activation check.

This is useful when using composer-based and other custom setups, such as Bedrock, for example, where using plugins as mu-plugins are the norm.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | If we should skip the check or not, defaults to false. |

### Since

- 2.0.0
### Source

Defined in [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) at line 272


## Returns
true if you wish to skip the check, false otherwise.
