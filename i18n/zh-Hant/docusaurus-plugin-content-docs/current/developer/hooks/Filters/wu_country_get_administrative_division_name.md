---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# 篩選器：wu_country_get_administrative_division_name

用於返回國家行政區劃的友善名稱。

## 參數

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $name | `string` | 區劃名稱。通常類似州、省、地區等。 |
| $country_code | `string` | 國家的兩位字母 ISO 代碼。 |
| $state_code | `string` | 州的兩位字母 ISO 代碼。 |
| $ucwords | `bool` | 是否將單字大寫。 |
| $current_country | `\WP_Ultimo\Country\Country` | 當前類別的實例。 |

### 自

- 2.0.11
### 來源

定義於 [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) 的第 250 行


## 返回值
修改後的區劃名稱。
