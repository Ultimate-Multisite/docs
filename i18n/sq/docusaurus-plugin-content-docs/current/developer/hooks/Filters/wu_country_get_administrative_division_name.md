---
id: wu_country_get_administrative_division_name
title: Filtër - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filtër: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

Kthen emrin e rregullt të nënndarjeve administrative të vendit.

## Parametrat {#parameters}

| Emri | Lloji | Përshkrimi |
|------|------|-------------|
| $name | `string` | Emri i nënndarjes. Zakonisht diçka si shtet, provincë, rajon, etj. |
| $country_code | `string` | Kodi ISO me dy shkronja për vendin. |
| $state_code | `string` | Kodi ISO me dy shkronja për shtetin. |
| $ucwords | `bool` | nëse i shkruajmë fjalët me shkronja të mëdha. |
| $current_country | `\WP_Ultimo\Country\Country` | Instancë e klasës aktuale. |

### Që nga {#since}

- 2.0.11
### Burimi {#source}

Përcaktuar në [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) në rreshtin 250


## Kthen {#returns}
Emrin e modifikuar të nënndarjes.
