---
id: networks_user_is_network_admin
title: フィルタ - networks_user_is_network_admin
sidebar_label: networks_user_is_network_admin
_i18n_hash: f8e40a1c47591c0cab73d671cf681281
---
# Filter: networks_user_is_network_admin

ユーザーが管理者であるネットワークをフィルタリングします。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $ | `array\|bool` | ユーザーにネットワークがない場合は false、ある場合はネットワーク ID のリスト。 |
| $ | `int` | ネットワークを返す対象のユーザー ID。 |

### Since

- 2.0.0

### Source

定義は [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L703) の 703 行目にあります。
