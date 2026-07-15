---
id: wu_country_get_administrative_division_name
title: Criathrag - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Criathrag: wu_country_get_administrative_division_name

Tillidh e ainm snasail airson fo-roinnean rianachd na dùthcha.

## Paramadairean {#parameters}

| Ainm | Seòrsa | Tuairisgeul |
|------|------|-------------|
| $name | `string` | Ainm na roinne. Mar as trice rudeigin mar stàit, mòr-roinn, sgìre, msaa. |
| $country_code | `string` | Còd ISO dà-litir airson na dùthcha. |
| $state_code | `string` | Còd ISO dà-litir airson na stàite. |
| $ucwords | `bool` | ma chuireas sinn na faclan ann an litrichean mòra. |
| $current_country | `\WP_Ultimo\Country\Country` | Eisimpleir den chlas làithreach. |

### Bho {#since}

- 2.0.11
### Tùs {#source}

Air a mhìneachadh ann an [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) aig loidhne 250


## Tillidh {#returns}
Ainm na roinne air atharrachadh.
