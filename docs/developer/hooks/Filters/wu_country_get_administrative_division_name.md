---
id: wu_country_get_administrative_division_name
title: "Filter - wu_country_get_administrative_division_name"
sidebar_label: "wu_country_get_administrative_division_name"
---

# Filter: wu_country_get_administrative_division_name

Returns nice name of the country administrative sub-divisions.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | The division name. Usually something like state, province, region, etc. |
| $country_code | `string` | Two-letter ISO code for the country. |
| $state_code | `string` | Two-letter ISO code for the state. |
| $ucwords | `bool` | if we uppercase the words. |
| $current_country | `\WP_Ultimo\Country\Country` | Instance of the current class. |

### Since

- 2.0.11
### Source

Defined in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) at line 250


## Returns
The modified division name.
