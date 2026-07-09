---
id: wu_country_get_states
title: Filter - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states {#filter-wucountrygetstates}

या देशाची राज्यांची यादी परत करतो.

## पॅरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $states | `array` | XX => Name स्वरूपात राज्यांची यादी. |
| $country_code | `string` | देशासाठी दोन-अक्षरी ISO कोड. |
| $current_country | `\WP_Ultimo\Country\Country` | सध्याच्या क्लासची एक उदाहरण (instance). |

### कधीपासून {#since}

- 2.0.11
### स्रोत {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) मध्ये लाइन 86 वर परिभाषित केले आहे.


## परत करतो {#returns}
फिल्टर केलेली राज्यांची यादी.
