---
id: networks_pre_user_is_network_admin
title: Filter - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# 篩選器：networks_pre_user_is_network_admin

用於篩選使用者所擔任管理員的網路，以直接決定流程結果。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $ | `array\|bool\|null` | 網路 ID 列表或 false。只要不是 null，就會直接決定流程結果。 |
| $ | `int` | 應回傳網路的用戶 ID。 |

### 自 {#since}

- 2.0.0
### 來源 {#source}

定義於 [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) 的第 688 行
