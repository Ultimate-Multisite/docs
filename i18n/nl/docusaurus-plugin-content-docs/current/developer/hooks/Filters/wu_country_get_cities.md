---
id: wu_country_get_cities
title: Filter - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

Geeft de lijst met steden voor een staat in een land.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $cities | `array` | Lijst met stadennamen van de staat. Er zijn geen sleutels aanwezig. |
| $country_code | `string` | Tweeletterige ISO-code voor het land. |
| $state_code | `string` | Tweeletterige ISO-code voor de staat. |
| $current_country | `\WP_Ultimo\Country\Country` | Instantie van de huidige klasse. |

### Since

- 2.0.11

### Source

Defined in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) at line 146

## Returns

De gefilterde lijst van staten.
