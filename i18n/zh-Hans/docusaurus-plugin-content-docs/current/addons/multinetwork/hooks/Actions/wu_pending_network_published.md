---
id: wu_pending_network_published
title: 动作 - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Action: wu_pending_network_published

在待处理网络发布后触发。

## 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | 已创建的网络。 |
| $membership | `\WP_Ultimo\Models\Membership` | 会员。 |
| $pending_network | `array` | 原始待处理网络数据。 |

### 来源

在 [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) 的第 1815 行定义
