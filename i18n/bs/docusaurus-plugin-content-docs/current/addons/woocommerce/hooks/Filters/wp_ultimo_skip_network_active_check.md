---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

Omogućava developerima da zaobiđu provjeru aktivacije mreže.

Ovo je korisno kada koristite postavke bazirane na Composeru i druge prilagođene postavke, kao što je Bedrock, na primjer, gdje je korištenje pluginova kao mu-pluginova standard.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Ako želimo preskočiti provjeru ili ne, podrazumijevano je `false`. |

### Since

- 2.0.0
### Source

Defined in [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) at line 272


## Returns
`true` ako želite preskočiti provjeru, `false` u suprotnom slučaju.
