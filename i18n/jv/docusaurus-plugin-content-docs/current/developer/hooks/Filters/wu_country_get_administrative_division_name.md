---
id: wu_country_get_administrative_division_name
title: Saringan - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

Mbalèkaké jeneng apik saka sub-divisi administratif negara.

## Paramèter {#parameters}

| Jeneng | Jinis | Katrangan |
|------|------|-------------|
| $name | `string` | Jeneng divisi. Biasané kaya state, province, region, lsp. |
| $country_code | `string` | Kode ISO rong aksara kanggo negara. |
| $state_code | `string` | Kode ISO rong aksara kanggo state. |
| $ucwords | `bool` | yèn kita nggawé tembung dadi huruf gedhé. |
| $current_country | `\WP_Ultimo\Country\Country` | Instance saka class saiki. |

### Wiwit {#since}

- 2.0.11
### Sumber {#source}

Ditetepaké ing [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) ing baris 250


## Balènan {#returns}
Jeneng divisi sing wis diowahi.
