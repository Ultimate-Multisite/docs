---
id: wu_country_get_cities
title: फ़िल्टर - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

यह किसी देश के एक राज्य के लिए शहरों की सूची लौटाता है।

## पैरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $cities | `array` | राज्य के शहरों के नामों की सूची। इसमें कोई की (key) नहीं होती है। |
| $country_code | `string` | देश के लिए दो-अक्षर वाला ISO कोड। |
| $state_code | `string` | राज्य के लिए दो-अक्षर वाला ISO कोड। |
| $current_country | `\WP_Ultimo\Country\Country` | वर्तमान क्लास का इंस्टेंस। |

### कब से उपलब्ध {#since}

- 2.0.11
### स्रोत {#source}

Defined in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) at line 146


## रिटर्न करता है {#returns}
राज्यों की फ़िल्टर की गई सूची।
