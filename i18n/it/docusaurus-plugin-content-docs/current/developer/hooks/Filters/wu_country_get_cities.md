---
id: wu_country_get_cities
title: Filtro - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filtro: wu_country_get_cities

Restituisce l'elenco delle città di uno stato in un paese.

## Parameters

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $cities | `array` | Elenco dei nomi delle città dello stato. Non sono presenti chiavi. |
| $country_code | `string` | Codice ISO a due lettere per il paese. |
| $state_code | `string` | Codice ISO a due lettere per lo stato. |
| $current_country | `\WP_Ultimo\Country\Country` | Istanza della classe corrente. |

### Da

- 2.0.11

### Fonte

Definito in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) alla riga 146

## Restituisce

L'elenco filtrato degli stati.
