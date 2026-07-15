---
id: wu_country_get_cities
title: Filter - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

Vrne seznam mest za zvezno državo v državi.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $cities | `array` | Seznam imen mest v zvezni državi. Ključi niso prisotni. |
| $country_code | `string` | Dvočrkovna ISO koda za državo. |
| $state_code | `string` | Dvočrkovna ISO koda za zvezno državo. |
| $current_country | `\WP_Ultimo\Country\Country` | Instanca trenutnega razreda. |

### Od različice {#since}

- 2.0.11
### Vir {#source}

Določeno v [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) v vrstici 146


## Vrne {#returns}
Filtriran seznam zveznih držav.
