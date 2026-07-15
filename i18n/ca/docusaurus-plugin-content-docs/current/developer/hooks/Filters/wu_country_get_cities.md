---
id: wu_country_get_cities
title: Filtre - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filtre: wu_country_get_cities

Retorna la llista de ciutats d’un estat en un país.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $cities | `array` | Llista de noms de ciutats de l’estat. No hi ha claus. |
| $country_code | `string` | Codi ISO de dues lletres del país. |
| $state_code | `string` | Codi ISO de dues lletres de l’estat. |
| $current_country | `\WP_Ultimo\Country\Country` | Instància de la classe actual. |

### Des de {#since}

- 2.0.11
### Font {#source}

Definit a [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) a la línia 146


## Retorna {#returns}
La llista filtrada d’estats.
