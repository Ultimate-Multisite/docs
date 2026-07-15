---
id: wu_country_get_administrative_division_name
title: Fyuluta - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Fyuluta: wu_country_get_administrative_division_name

Imabweza dzina labwino la zigawo zoyang'anira za dziko.

## Zizindikiro {#parameters}

| Dzina | Mtundu | Kufotokozera |
|------|------|-------------|
| $name | `string` | Dzina la chigawo. Nthawi zambiri chimakhala ngati state, province, region, ndi zina zotero. |
| $country_code | `string` | Khodi ya ISO ya zilembo ziwiri ya dziko. |
| $state_code | `string` | Khodi ya ISO ya zilembo ziwiri ya state. |
| $ucwords | `bool` | ngati tikulemba mawu ndi zilembo zazikulu. |
| $current_country | `\WP_Ultimo\Country\Country` | Instance ya class yapano. |

### Kuyambira {#since}

- 2.0.11
### Gwero {#source}

Yafotokozedwa mu [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) pa mzere 250


## Zobwezedwa {#returns}
Dzina la chigawo losinthidwa.
