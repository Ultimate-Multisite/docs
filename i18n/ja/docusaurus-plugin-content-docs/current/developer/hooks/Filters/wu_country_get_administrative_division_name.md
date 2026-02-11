---
id: wu_country_get_administrative_division_name
title: フィルタ - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

国の行政区分の見やすい名前を返します。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | 分割名です。通常は州、県、地域などです。 |
| $country_code | `string` | 国の2文字ISOコードです。 |
| $state_code | `string` | 州の2文字ISOコードです。 |
| $ucwords | `bool` | 単語を大文字にするかどうか。 |
| $current_country | `\WP_Ultimo\Country\Country` | 現在のクラスのインスタンスです。 |

### Since

- 2.0.11

### Source

Defined in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) at line 250


## Returns
The modified division name.
