---
id: wu_country_get_states
title: フィルタ - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# フィルタ: wu_country_get_states

この国の州のリストを返します。

## パラメータ

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $states | `array` | XX => 名前形式の州のリスト。 |
| $country_code | `string` | 国の2文字ISOコード。 |
| $current_country | `\WP_Ultimo\Country\Country` | 現在のクラスのインスタンス。 |

### バージョン

- 2.0.11

### ソース

以下のファイルで定義されています: [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) 行 86

## 戻り値

フィルタリングされた州のリスト。
