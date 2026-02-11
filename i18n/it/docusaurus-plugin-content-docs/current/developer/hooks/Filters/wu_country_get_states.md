---
id: wu_country_get_states
title: Filtro - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filtro: wu_country_get_states

Restituisce l'elenco degli stati per questo paese.

## Parametri

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $states | `array` | Elenco degli stati in formato XX => Nome. |
| $country_code | `string` | Codice ISO a due lettere per il paese. |
| $current_country | `\WP_Ultimo\Country\Country` | Istanza della classe corrente. |

### Da

- 2.0.11

### Fonte

Definito in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) alla riga 86

## Restituisce

L'elenco filtrato degli stati.
