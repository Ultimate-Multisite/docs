---
id: wu_country_get_states
title: 篩選器 - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# 過濾器：wu_country_get_states {#filter-wucountrygetstates}

返回此國家的州列表。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $states | `array` | 州列表，格式為 XX => 名稱。 |
| $country_code | `string` | 國家的兩位字母 ISO 代碼。 |
| $current_country | `\WP_Ultimo\Country\Country` | 當前類別的實例。 |

### 自 {#since}

- 2.0.11
### 來源 {#source}

定義於 [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) 的第 86 行


## 返回值 {#returns}
過濾後的州列表。
