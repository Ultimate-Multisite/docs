---
id: wu_country_get_cities
title: 過濾器 - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# 篩選器：wu_country_get_cities

用於根據國家和州，回傳該州下的城市列表。

## 參數

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $cities | `array` | 州城市名稱列表。此列表不包含鍵值。 |
| $country_code | `string` | 國家的兩位字母 ISO 代碼。 |
| $state_code | `string` | 州的兩位字母 ISO 代碼。 |
| $current_country | `\WP_Ultimo\Country\Country` | 當前類別的實例。 |

### 自

- 2.0.11
### 來源

定義於 [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) 的第 146 行。


## 回傳值
篩選後的州列表。
