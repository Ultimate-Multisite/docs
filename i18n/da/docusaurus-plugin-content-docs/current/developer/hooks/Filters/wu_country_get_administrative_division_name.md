---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

Returnerer pænt navn på landets administrative underinddelinger.

## Parametre

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $name | `string` | Inddelingens navn. Normalt noget som stat, provins, region osv. |
| $country_code | `string` | ISO-kode på to bogstaver for landet. |
| $state_code | `string` | ISO-kode på to bogstaver for staten. |
| $ucwords | `bool` | om vi skriver ordene med stort begyndelsesbogstav. |
| $current_country | `\WP_Ultimo\Country\Country` | Instans af den aktuelle klasse. |

### Siden

- 2.0.11
### Kilde

Defineret i [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) på linje 250


## Returnerer
Det ændrede inddelingsnavn.
