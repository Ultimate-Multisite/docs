---
id: networks_user_is_network_admin
title: 過濾器 - networks_user_is_network_admin
sidebar_label: networks_user_is_network_admin
_i18n_hash: f8e40a1c47591c0cab73d671cf681281
---
# 過濾器：networks_user_is_network_admin

用來過濾出某個用戶擔任管理員的網路列表。

## 參數

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $ | `array\|bool` | 網路 ID 列表，或如果該用戶沒有任何網路則為 false。 |
| $ | `int` | 應回傳網路的用戶 ID。 |

### 可用版本

- 2.0.0
### 來源

定義於 [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L703) 的第 703 行
