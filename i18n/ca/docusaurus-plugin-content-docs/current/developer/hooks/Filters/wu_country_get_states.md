---
id: wu_country_get_states
title: Filtre - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filtre: wu_country_get_states

Retorna la llista d’estats per a aquest país.

## Paràmetres

| Nom | Tipus | Descripció |
|------|------|-------------|
| $states | `array` | Llista d’estats en format XX =&gt; Nom. |
| $country_code | `string` | Codi ISO de dues lletres per al país. |
| $current_country | `\WP_Ultimo\Country\Country` | Instància de la classe actual. |

### Des de

- 2.0.11
### Font

Definit a [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) a la línia 86


## Retorna
La llista filtrada d’estats.
