---
id: wu_country_get_administrative_division_name
title: Filtar - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

Vraća lijepi naziv administrativnih podjela zemlje.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | Naziv podjele. Obično nešto poput state, province, region itd. |
| $country_code | `string` | Dvoslovni ISO kod za zemlju. |
| $state_code | `string` | Dvoslovni ISO kod za state. |
| $ucwords | `bool` | ako riječi pišemo velikim početnim slovima. |
| $current_country | `\WP_Ultimo\Country\Country` | Instanca trenutne klase. |

### Od {#since}

- 2.0.11
### Izvor {#source}

Definirano u [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) u retku 250


## Vraća {#returns}
Izmijenjeni naziv podjele.
