---
id: move_site
title: Action - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Action: move_site {#action-movesite}

當網站被移動到新的網路時，此動作會觸發。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $site_id | `int` | 已被移動的網站的 ID。 |
| $old_network_id | `int` | 網站原始網路的 ID。 |
| $new_network_id | `int` | 網站被移動到的網路的 ID。 |

### 適用版本 {#since}

- 1.3.0
### 來源 {#source}

定義於 [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) 的第 1587 行
