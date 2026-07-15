---
id: wu_country_get_administrative_division_name
title: Hidlydd - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Hidlydd: wu_country_get_administrative_division_name

Yn dychwelyd enw taclus is-adrannau gweinyddol y wlad.

## Paramedrau {#parameters}

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $name | `string` | Enw’r adran. Fel arfer rhywbeth fel talaith, talaith, rhanbarth, ac ati. |
| $country_code | `string` | Cod ISO dwy lythyren ar gyfer y wlad. |
| $state_code | `string` | Cod ISO dwy lythyren ar gyfer y dalaith. |
| $ucwords | `bool` | os ydym yn rhoi’r geiriau mewn priflythrennau. |
| $current_country | `\WP_Ultimo\Country\Country` | Enghraifft o’r dosbarth cyfredol. |

### Ers {#since}

- 2.0.11
### Ffynhonnell {#source}

Wedi’i ddiffinio yn [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) ar linell 250


## Yn Dychwelyd {#returns}
Enw’r adran wedi’i addasu.
