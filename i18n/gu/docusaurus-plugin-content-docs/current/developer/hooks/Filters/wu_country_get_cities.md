---
id: wu_country_get_cities
title: ફિલ્ટર - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

કોઈ દેશના રાજ્યમાં રહેલા શહેરોની યાદી પાછી આપે છે.

## પેરામીટર્સ (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $cities | `array` | રાજ્યના શહેરના નામની યાદી. કોઈ કી (keys) હાજર નથી. |
| $country_code | `string` | દેશ માટે બે-અક્ષરનો ISO કોડ. |
| $state_code | `string` | રાજ્ય માટે બે-અક્ષરનો ISO કોડ. |
| $current_country | `\WP_Ultimo\Country\Country` | વર્તમાન ક્લાસનો ઇન્સ્ટન્સ (Instance). |

### ક્યારથી (Since)

- 2.0.11
### સ્ત્રોત (Source)

Defined in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) at line 146


## પરત કરે છે (Returns)
ફિલ્ટર કરેલી રાજ્યોની યાદી.
