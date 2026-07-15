---
id: wu_country_get_states
title: फ़िल्टर - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states

यह फ़ंक्शन इस देश के राज्यों की सूची लौटाता है।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $states | `array` | XX => नाम फॉर्मेट में राज्यों की सूची। |
| $country_code | `string` | देश के लिए दो-अक्षर का ISO कोड। |
| $current_country | `\WP_Ultimo\Country\Country` | वर्तमान क्लास का इंस्टेंस। |

### Since {#since}

- 2.0.11
### Source {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) में लाइन 86 पर परिभाषित।

## Returns {#returns}
राज्यों की फ़िल्टर की गई सूची।
