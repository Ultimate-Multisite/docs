---
id: wu_country_get_cities
title: ਫਿਲਟਰ - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

ਇੱਕ ਦੇਸ਼ ਵਿੱਚ ਇੱਕ ਸੂਬੇ ਦੇ ਸ਼ਹਿਰਾਂ ਦੀ ਸੂਚੀ ਵਾਪਸ ਕਰਦਾ ਹੈ।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $cities | `array` | ਸੂਬੇ ਦੇ ਸ਼ਹਿਰਾਂ ਦੇ ਨਾਮਾਂ ਦੀ ਸੂਚੀ। ਕੋਈ keys ਨਹੀਂ ਹਨ। |
| $country_code | `string` | ਦੇਸ਼ ਲਈ ਦੋ-ਅੱਖਰੀ ISO ਕੋਡ। |
| $state_code | `string` | ਸੂਬੇ ਲਈ ਦੋ-ਅੱਖਰੀ ISO ਕੋਡ। |
| $current_country | `\WP_Ultimo\Country\Country` | ਮੌਜੂਦਾ class ਦਾ instance। |

### Since {#since}

- 2.0.11
### Source {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) ਵਿੱਚ ਲਾਈਨ 146 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ ਗਿਆ ਹੈ।


## Returns {#returns}
ਸੂਬਿਆਂ ਦੀ ਫਿਲਟਰ ਕੀਤੀ ਸੂਚੀ।
