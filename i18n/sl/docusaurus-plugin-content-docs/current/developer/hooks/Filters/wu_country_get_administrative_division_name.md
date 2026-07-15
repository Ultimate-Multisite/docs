---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

Vrne lepo ime administrativnih podrazdelkov države.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | Ime podrazdelka. Običajno nekaj kot zvezna država, provinca, regija itd. |
| $country_code | `string` | Dvočrkovna ISO koda za državo. |
| $state_code | `string` | Dvočrkovna ISO koda za zvezno državo. |
| $ucwords | `bool` | ali besede zapišemo z velikimi začetnicami. |
| $current_country | `\WP_Ultimo\Country\Country` | Instanca trenutnega razreda. |

### Od različice {#since}

- 2.0.11
### Vir {#source}

Definirano v [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) v vrstici 250


## Vrne {#returns}
Spremenjeno ime podrazdelka.
