---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

Geeft een mooie naam van de administratieve subdivisies van het land.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | De naam van de divisie. Meestal iets als staat, provincie, regio, enz. |
| $country_code | `string` | Tweeletterige ISO-code voor het land. |
| $state_code | `string` | Tweeletterige ISO-code voor de staat. |
| $ucwords | `bool` | Als we de woorden in hoofdletters zetten. |
| $current_country | `\WP_Ultimo\Country\Country` | Instantie van de huidige klasse. |

### Sinds

- 2.0.11

### Bron

Gedefinieerd in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) op regel 250

## Retourneert
De aangepaste naam van de divisie.
