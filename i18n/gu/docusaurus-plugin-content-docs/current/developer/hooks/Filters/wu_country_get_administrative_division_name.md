---
id: wu_country_get_administrative_division_name
title: ફિલ્ટર - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

દેશના વહીવટી પેટા-વિભાગોનું સુંદર નામ પાછું આપે છે.

## પરિમાણો (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | વિભાગનું નામ. સામાન્ય રીતે રાજ્ય (state), પ્રાંત (province), પ્રદેશ (region) વગેરે જેવું કંઈક. |
| $country_code | `string` | દેશ માટે બે-અક્ષરનો ISO કોડ. |
| $state_code | `string` | રાજ્ય માટે બે-અક્ષરનો ISO કોડ. |
| $ucwords | `bool` | જો આપણે શબ્દોને મોટા અક્ષરો (uppercase) માં કરવા માંગતા હોઈએ. |
| $current_country | `\WP_Ultimo\Country\Country` | વર્તમાન ક્લાસની ઇન્સ્ટન્સ. |

### ક્યારથી (Since)

- 2.0.11
### સ્ત્રોત (Source)

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) માં લાઇન 250 પર વ્યાખ્યાયિત છે.

## પરત કરે છે (Returns)
સુધારેલું વિભાગનું નામ.
