---
id: wu_country_get_cities
title: フィルタ - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities {#filter-wucountrygetcities}

国の州に対する都市リストを返します。

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $cities | `array` | List of state city names. No keys are present. |
| $country_code | `string` | Two-letter ISO code for the country. |
| $state_code | `string` | Two-letter ISO code for the state. |
| $current_country | `\WP_Ultimo\Country\Country` | Instance of the current class. |

### Since {#since}

- 2.0.11

### Source {#source}

Defined in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) 146 行目で定義されています。

## Returns {#returns}

フィルタリングされた州のリスト。
