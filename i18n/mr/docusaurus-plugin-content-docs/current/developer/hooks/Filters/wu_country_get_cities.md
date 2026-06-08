---
id: wu_country_get_cities
title: Filter - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

एका देशातील राज्यासाठी (state) शहरांची यादी परत करतो.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $cities | `array` | राज्याच्या शहरांची यादी. यात कोणतेही keys नसतात. |
| $country_code | `string` | देशासाठी दोन-अक्षरी ISO कोड. |
| $state_code | `string` | राज्यासाठी दोन-अक्षरी ISO कोड. |
| $current_country | `\WP_Ultimo\Country\Country` | सध्याच्या क्लासचा (class) एक instance. |

### Since

- 2.0.11
### Source

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) मध्ये लाइन 146 वर परिभाषित केले आहे.


## Returns
फिल्टर केलेली राज्यांची (states) यादी.
