---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

Returns nice name of the country administrative sub-divisions.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | Il nome della divisione. Solitamente qualcosa come stato, provincia, regione, ecc. |
| $country_code | `string` | Codice ISO a due lettere per il paese. |
| $state_code | `string` | Codice ISO a due lettere per lo stato. |
| $ucwords | `bool` | Se trasformiamo le parole in maiuscolo. |
| $current_country | `\WP_Ultimo\Country\Country` | Istanza della classe corrente. |

### Since

- 2.0.11
### Source

Defined in [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) at line 250


## Returns
Il nome della divisione modificato.
