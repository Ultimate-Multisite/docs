---
id: wu_country_get_administrative_division_name
title: Salain - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Pansala: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

Mobalik og hapsay nga ngalan sa administratibong mga sub-dibisyon sa nasod.

## Mga Parameter {#parameters}

| Ngalan | Matang | Deskripsyon |
|------|------|-------------|
| $name | `string` | Ang ngalan sa dibisyon. Kasagaran usa ka butang sama sa estado, probinsya, rehiyon, ug uban pa. |
| $country_code | `string` | Duha-ka-letra nga ISO code para sa nasod. |
| $state_code | `string` | Duha-ka-letra nga ISO code para sa estado. |
| $ucwords | `bool` | kung atong himuong uppercase ang mga pulong. |
| $current_country | `\WP_Ultimo\Country\Country` | Instance sa kasamtangang klase. |

### Sukad {#since}

- 2.0.11
### Gigikanan {#source}

Gidefine sa [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) sa linya 250


## Mobalik {#returns}
Ang giusab nga ngalan sa dibisyon.
