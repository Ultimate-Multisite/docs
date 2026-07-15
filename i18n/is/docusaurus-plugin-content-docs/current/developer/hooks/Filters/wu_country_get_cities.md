---
id: wu_country_get_cities
title: Sía - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Sía: wu_country_get_cities

Skilar lista yfir borgir fyrir fylki í landi.

## Færibreytur {#parameters}

| Heiti | Tegund | Lýsing |
|------|------|-------------|
| $cities | `array` | Listi yfir borgarnöfn fylkis. Engir lyklar eru til staðar. |
| $country_code | `string` | Tveggja stafa ISO-kóði fyrir landið. |
| $state_code | `string` | Tveggja stafa ISO-kóði fyrir fylkið. |
| $current_country | `\WP_Ultimo\Country\Country` | Tilvik af núverandi klasa. |

### Síðan {#since}

- 2.0.11
### Uppruni {#source}

Skilgreint í [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) á línu 146


## Skilar {#returns}
Síaður listi yfir fylki.
