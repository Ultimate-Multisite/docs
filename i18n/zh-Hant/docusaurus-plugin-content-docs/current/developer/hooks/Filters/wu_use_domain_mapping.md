---
id: wu_use_domain_mapping
title: 過濾器 - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

判斷是否應該使用某個映射關係

通常情況下，您只想允許使用「啟用」的映射關係。不過，如果您想要使用更進階的邏輯，或者想讓非啟用的網域也能被映射，只需在這裡進行過濾即可。

## 參數

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $is_active | `bool` | 是否應將此映射關係視為啟用狀態？ |
| $mapping | `\Domain` | 我們正在檢查的映射關係 |
| $domain | `string` |  |

### 來源

定義於 [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) 的第 391 行
