---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

यह देश के प्रशासनिक उप-विभागों का अच्छा नाम (nice name) लौटाता है।

## पैरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | विभाजन का नाम। आमतौर पर यह राज्य (state), प्रांत (province), क्षेत्र (region), आदि जैसा कुछ होता है। |
| $country_code | `string` | देश के लिए दो-अक्षर वाला ISO कोड। |
| $state_code | `string` | राज्य के लिए दो-अक्षर वाला ISO कोड। |
| $ucwords | `bool` | क्या हमें शब्दों को बड़े अक्षरों (uppercase) में करना है। |
| $current_country | `\WP_Ultimo\Country\Country` | वर्तमान क्लास का इंस्टेंस। |

### कब से उपलब्ध {#since}

- 2.0.11
### स्रोत {#source}

लाइन 250 पर [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) में परिभाषित किया गया है।


## रिटर्न करता है {#returns}
संशोधित विभाजन का नाम।
