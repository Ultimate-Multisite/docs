---
id: networks_pre_user_is_network_admin
title: Filter - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# 过滤器: networks_pre_user_is_network_admin

过滤用户是管理员的网络，以便快速中断流程。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $ | `array\|bool\|null` | 网络 ID 列表或 false。除 null 之外的任何值都会快速中断流程。 |
| $ | `int` | 用于返回网络的用户 ID。 |

### 自

- 2.0.0

### 源码

定义在 [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) 第 688 行
