---
id: wu_country_get_cities
title: 过滤 - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

返回一个国家中某州的城市列表。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $cities | `array` | 州内城市名称列表。没有键。 |
| $country_code | `string` | 国家两字母 ISO 代码。 |
| $state_code | `string` | 州两字母 ISO 代码。 |
| $current_country | `\WP_Ultimo\Country\Country` | 当前类的实例。 |

### Since

- 2.0.11

### Source

Defined in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) at line 146

## Returns

过滤后的州列表。
