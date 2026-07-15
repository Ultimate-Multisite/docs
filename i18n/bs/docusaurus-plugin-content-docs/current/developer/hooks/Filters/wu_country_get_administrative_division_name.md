---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

Vraća lijepo ime administrativnih podježdionica zemlje.

## Parametri {#parameters}

| Name | Type | Opis |
|------|------|-------------|
| $name | `string` | Ime podježdionice. Obično nešto poput države, provincije, regiona, itd. |
| $country_code | `string` | Dvosločni ISO kod za zemlju. |
| $state_code | `string` | Dvosločni ISO kod za državnu jedinicu. |
| $ucwords | `bool` | Ako želimo da slova budu velika (kapitalna). |
| $current_country | `\WP_Ultimo\Country\Country` | Instanca trenutne klase. |

### Od {#since}

- 2.0.11
### Izvor {#source}

Definisano je u [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) na liniji 250


## Vraća {#returns}
Izmijenjeno ime podježdionice.
