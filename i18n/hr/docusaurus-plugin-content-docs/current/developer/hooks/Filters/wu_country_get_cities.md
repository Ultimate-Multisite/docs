---
id: wu_country_get_cities
title: Filtar - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

Vraća popis gradova za državu u zemlji.

## Parametri

| Naziv | Tip | Opis |
|------|------|-------------|
| $cities | `array` | Popis naziva gradova u državi. Ključevi nisu prisutni. |
| $country_code | `string` | Dvoslovni ISO kod za zemlju. |
| $state_code | `string` | Dvoslovni ISO kod za državu. |
| $current_country | `\WP_Ultimo\Country\Country` | Instanca trenutačne klase. |

### Od verzije

- 2.0.11
### Izvor

Definirano u [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) u retku 146


## Vraća
Filtrirani popis država.
