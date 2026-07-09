---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

Gëtt de schéinen Numm vun den administrativen Ënnerdeelunge vum Land zeréck.

## Parameteren

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $name | `string` | Den Numm vun der Ënnerdeelung. Normalerweis eppes wéi Bundesstaat, Provënz, Regioun, asw. |
| $country_code | `string` | Zwee-Buschtawen-ISO-Code fir d'Land. |
| $state_code | `string` | Zwee-Buschtawen-ISO-Code fir de Bundesstaat. |
| $ucwords | `bool` | ob mir d'Wierder mat Groussbuschtawen ufänke loossen. |
| $current_country | `\WP_Ultimo\Country\Country` | Instanz vun der aktueller Klass. |

### Zanter

- 2.0.11
### Quell

Definéiert an [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) op Linn 250


## Gëtt zeréck
Den geännerten Numm vun der Ënnerdeelung.
