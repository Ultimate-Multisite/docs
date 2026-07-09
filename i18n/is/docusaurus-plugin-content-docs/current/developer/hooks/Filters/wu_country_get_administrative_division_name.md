---
id: wu_country_get_administrative_division_name
title: Sía - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Sía: wu_country_get_administrative_division_name

Skilar snyrtilegu heiti á stjórnsýslusvæðum landsins.

## Færibreytur

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | Heiti svæðisins. Venjulega eitthvað á borð við fylki, hérað, svæði o.s.frv. |
| $country_code | `string` | Tveggja stafa ISO-kóði fyrir landið. |
| $state_code | `string` | Tveggja stafa ISO-kóði fyrir fylkið. |
| $ucwords | `bool` | hvort við breytum orðum í hástafi. |
| $current_country | `\WP_Ultimo\Country\Country` | Tilvik af núverandi klasa. |

### Síðan

- 2.0.11
### Uppruni

Skilgreint í [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) í línu 250


## Skilar
Breytta heiti svæðisins.
