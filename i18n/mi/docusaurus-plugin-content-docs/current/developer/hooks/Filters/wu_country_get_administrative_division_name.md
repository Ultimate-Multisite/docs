---
id: wu_country_get_administrative_division_name
title: Tātari - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Tātari: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

Ka whakahoki i te ingoa ātaahua o ngā wehenga whakahaere ā-rohe o te whenua.

## Ngā tawhā {#parameters}

| Ingoa | Momo | Whakaahuatanga |
|------|------|-------------|
| $name | `string` | Te ingoa wehenga. Ko te tikanga he mea pēnei i te state, province, region, me ērā atu. |
| $country_code | `string` | Waehere ISO pū-rua mō te whenua. |
| $state_code | `string` | Waehere ISO pū-rua mō te state. |
| $ucwords | `bool` | mēnā ka pūmatua tātou i ngā kupu. |
| $current_country | `\WP_Ultimo\Country\Country` | Tauira o te karaehe o nāianei. |

### Mai rā anō {#since}

- 2.0.11
### Pūtake {#source}

Kua tautuhia i [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) i te rārangi 250


## Ngā whakahokinga {#returns}
Te ingoa wehenga kua whakarerekētia.
