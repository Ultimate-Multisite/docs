---
id: wu_country_get_cities
title: फिल्टर - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities {#filter-wucountrygetcities}

कुनै देशको राज्यका लागि सहरहरूको सूची फिर्ता गर्छ।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $cities | `array` | राज्यका सहर नामहरूको सूची। कुनै key उपस्थित छैनन्। |
| $country_code | `string` | देशका लागि दुई-अक्षरीय ISO code। |
| $state_code | `string` | राज्यका लागि दुई-अक्षरीय ISO code। |
| $current_country | `\WP_Ultimo\Country\Country` | हालको class को instance। |

### Since {#since}

- 2.0.11
### Source {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) मा line 146 मा परिभाषित


## Returns {#returns}
राज्यहरूको फिल्टर गरिएको सूची।
