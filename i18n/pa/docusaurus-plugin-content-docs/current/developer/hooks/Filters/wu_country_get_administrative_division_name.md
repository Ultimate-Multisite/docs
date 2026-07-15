---
id: wu_country_get_administrative_division_name
title: ਫਿਲਟਰ - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

ਦੇਸ਼ ਦੇ ਪ੍ਰਸ਼ਾਸਕੀ ਉਪ-ਵਿਭਾਗਾਂ ਦਾ ਵਧੀਆ ਨਾਮ ਵਾਪਸ ਕਰਦਾ ਹੈ।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | ਵਿਭਾਗ ਦਾ ਨਾਮ। ਆਮ ਤੌਰ 'ਤੇ ਸਟੇਟ, ਪ੍ਰੋਵਿੰਸ, ਰੀਜਨ, ਆਦਿ ਵਰਗਾ ਕੁਝ। |
| $country_code | `string` | ਦੇਸ਼ ਲਈ ਦੋ-ਅੱਖਰੀ ISO ਕੋਡ। |
| $state_code | `string` | ਸਟੇਟ ਲਈ ਦੋ-ਅੱਖਰੀ ISO ਕੋਡ। |
| $ucwords | `bool` | ਜੇਕਰ ਅਸੀਂ ਸ਼ਬਦਾਂ ਨੂੰ ਵੱਡੇ ਅੱਖਰਾਂ (uppercase) ਵਿੱਚ ਕਰੀਏ। |
| $current_country | `\WP_Ultimo\Country\Country` | ਮੌਜੂਦਾ ਕਲਾਸ ਦਾ ਇੰਸਟੈਂਸ। |

### Since {#since}

- 2.0.11
### Source {#source}

Defined in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) at line 250


## Returns {#returns}
ਬਦਲਿਆ ਹੋਇਆ ਵਿਭਾਗ ਦਾ ਨਾਮ।
