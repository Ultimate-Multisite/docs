---
id: wp_ultimo_skip_network_active_check
title: 过滤器 - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# 过滤器: wp_ultimo_skip_network_active_check

允许开发者跳过网络激活检查。

这在使用基于 Composer 的和其他自定义设置（例如 Bedrock）时非常有用，在这些情况下，将插件作为 mu-plugins 使用是常规做法。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | 是否跳过检查，默认值为 false。 |

### Since

- 2.0.0

### Source

Defined in [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) at line 272

## Returns

如果你想跳过检查则返回 true，否则返回 false。
