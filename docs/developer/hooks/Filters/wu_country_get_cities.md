---
id: wu_country_get_cities
title: "Filter - wu_country_get_cities"
sidebar_label: "wu_country_get_cities"
---

# Filter: wu_country_get_cities

Returns the list of cities for a state in a country.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $cities | `array` | List of state city names. No keys are present. |
| $country_code | `string` | Two-letter ISO code for the country. |
| $state_code | `string` | Two-letter ISO code for the state. |
| $current_country | `\WP_Ultimo\Country\Country` | Instance of the current class. |

### Since

- 2.0.11
### Source

Defined in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) at line 146


## Returns
The filtered list of states.
