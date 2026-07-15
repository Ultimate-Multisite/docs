---
id: switch_network
title: 動作 - switch_network
sidebar_label: switch_network
_i18n_hash: 40e813a787afb90d335c7dd7b8c93eb2
---
# Action: switch_network

當目前的網路環境（network context）切換時觸發。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $new_network_id | `int` | 正在切換到的網路的 ID。 |
| $old_network_id | `int` | 之前目前所在的網路的 ID。 |

### 從版本 {#since}

- 1.3.0
### 來源 {#source}

定義於 [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L859) 第 859 行
