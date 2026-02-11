---
id: wp_ultimo_skip_network_active_check
title: Filter - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

Sta ontwikkelaars toe om de netwerkactiveringscontrole te omzeilen.

Dit is handig bij het gebruik van composer-gebaseerde en andere aangepaste configuraties, zoals Bedrock, bijvoorbeeld, waarbij het gebruik van plugins als mu-plugins de norm is.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Of we de controle moeten overslaan of niet, standaard is false. |

### Since

- 2.0.0

### Source

Gedefinieerd in [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) op regel 272

## Returns

true als je de controle wilt overslaan, anders false.
