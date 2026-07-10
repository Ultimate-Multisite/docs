---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

Returnerer et pent navn på landets administrative underinndelinger.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $name | `string` | Underdelingsnavnet. Dette er vanligvis noe som stat, fylke, region, osv. |
| $country_code | `string` | To-bokstavs ISO-kode for landet. |
| $state_code | `string` | To-bokstavs ISO-kode for staten. |
| $ucwords | `bool` | Om vi skal skrive bokstavene med stor forbokstav. |
| $current_country | `\WP_Ultimo\Country\Country` | Instans av den nåværende klassen. |

### Siden {#since}

- 2.0.11
### Kilde {#source}

Definert i [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) på linje 250


## Returnerer {#returns}
Det modifiserte underdelingsnavnet.
