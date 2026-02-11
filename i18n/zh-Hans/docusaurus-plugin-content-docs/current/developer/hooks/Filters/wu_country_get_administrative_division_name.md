---
id: wu_country_get_administrative_division_name
title: 过滤器 - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

返回国家行政子划分的优雅名称。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | 划分名称。通常类似州、省、地区等。 |
| $country_code | `string` | 国家的两字母 ISO 代码。 |
| $state_code | `string` | 州的两字母 ISO 代码。 |
| $ucwords | `bool` | 是否将单词首字母大写。 |
| $current_country | `\WP_Ultimo\Country\Country` | 当前类的实例。 |

### Since

- 2.0.11

### Source

Defined in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) at line 250

## Returns

修改后的划分名称。
