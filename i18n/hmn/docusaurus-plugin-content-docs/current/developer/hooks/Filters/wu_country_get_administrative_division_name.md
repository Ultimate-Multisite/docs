---
id: wu_country_get_administrative_division_name
title: Lim - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Lim: wu_country_get_administrative_division_name

Xa rov qab lub npe zoo ntawm cov kev faib cheeb tsam tswj hwm hauv lub teb chaws.

## Cov parameter {#parameters}

| Npe | Hom | Kev piav qhia |
|------|------|-------------|
| $name | `string` | Lub npe kev faib cheeb tsam. Feem ntau yog tej yam xws li xeev, province, cheeb tsam, thiab lwm yam. |
| $country_code | `string` | Ob-tsab ntawv ISO code rau lub teb chaws. |
| $state_code | `string` | Ob-tsab ntawv ISO code rau lub xeev. |
| $ucwords | `bool` | seb peb puas muab cov lus ua tsiaj ntawv loj. |
| $current_country | `\WP_Ultimo\Country\Country` | Instance ntawm class tam sim no. |

### Txij li {#since}

- 2.0.11
### Qhov chaw {#source}

Teev nyob rau hauv [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) ntawm kab 250


## Xa rov qab {#returns}
Lub npe kev faib cheeb tsam uas twb hloov lawm.
