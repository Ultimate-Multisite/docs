---
id: wu_country_get_cities
title: Filter - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

Gibt die Liste der Städte für einen Staat in einem Land zurück.

## Parameters

| Name | Type | Beschreibung |
|------|------|-------------|
| $cities | `array` | Liste der Städtenamen des Bundeslandes. Es sind keine Schlüssel vorhanden. |
| $country_code | `string` | Zwei­buchstabiger ISO-Code für das Land. |
| $state_code | `string` | Zwei­buchstabiger ISO-Code für den Staat. |
| $current_country | `\WP_Ultimo\Country\Country` | Instanz der aktuellen Klasse. |

### Seit

- 2.0.11

### Quelle

Definiert in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) in Zeile 146

## Rückgabe
Die gefilterte Liste der Staaten.
