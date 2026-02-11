---
id: wu_country_get_states
title: Filter - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states

Gibt die Liste der Bundesländer für dieses Land zurück.

## Parameter

| Name | Type | Beschreibung |
|------|------|-------------|
| $states | `array` | Liste der Bundesländer im Format XX => Name. |
| $country_code | `string` | Zwei­buchstabiger ISO-Code für das Land. |
| $current_country | `\WP_Ultimo\Country\Country` | Instanz der aktuellen Klasse. |

### Seit

- 2.0.11

### Quelle

Definiert in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) an Zeile 86

## Rückgabe
Die gefilterte Liste der Bundesländer.
