---
id: wu_country_get_states
title: 过滤 - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# 过滤器: wu_country_get_states

返回该国家的州列表。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $states | `array` | XX => 名称格式的州列表。 |
| $country_code | `string` | 该国家的两字母 ISO 代码。 |
| $current_country | `\WP_Ultimo\Country\Country` | 当前类的实例。 |

### 自

- 2.0.11

### 来源

定义于 [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) 在第 86 行

## 返回值

过滤后的州列表。
