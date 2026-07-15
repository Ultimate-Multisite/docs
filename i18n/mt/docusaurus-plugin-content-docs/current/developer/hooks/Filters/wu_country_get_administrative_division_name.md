---
id: wu_country_get_administrative_division_name
title: Filtru - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

Jirritorna l-isem sabiħ tas-sotto-diviżjonijiet amministrattivi tal-pajjiż.

## Parametri {#parameters}

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $name | `string` | L-isem tad-diviżjoni. Normalment xi ħaġa bħal stat, provinċja, reġjun, eċċ. |
| $country_code | `string` | Kodiċi ISO b’żewġ ittri għall-pajjiż. |
| $state_code | `string` | Kodiċi ISO b’żewġ ittri għall-istat. |
| $ucwords | `bool` | jekk nagħmlu l-kliem b’ittri kbar. |
| $current_country | `\WP_Ultimo\Country\Country` | Istanza tal-klassi attwali. |

### Minn {#since}

- 2.0.11
### Sors {#source}

Definit f’[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) fil-linja 250


## Jirritorna {#returns}
L-isem tad-diviżjoni modifikat.
