---
id: wu_country_get_administrative_division_name
title: Suodatin - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

Palauttaa maan hallinnollisten osa-alueiden selkeän nimen.

## Parametrit {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | Osa-alueen nimi. Yleensä jotakin kuten osavaltio, provinssi, alue jne. |
| $country_code | `string` | Maan kaksikirjaiminen ISO-koodi. |
| $state_code | `string` | Osavaltion kaksikirjaiminen ISO-koodi. |
| $ucwords | `bool` | jos muutamme sanojen alkukirjaimet isoiksi. |
| $current_country | `\WP_Ultimo\Country\Country` | Nykyisen luokan instanssi. |

### Alkaen {#since}

- 2.0.11
### Lähde {#source}

Määritelty tiedostossa [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) rivillä 250


## Palauttaa {#returns}
Muokatun osa-alueen nimen.
