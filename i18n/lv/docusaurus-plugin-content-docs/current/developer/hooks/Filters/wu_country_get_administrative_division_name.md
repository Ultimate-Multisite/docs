---
id: wu_country_get_administrative_division_name
title: Filtrs - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filtrs: wu_country_get_administrative_division_name

Atgriež glītu valsts administratīvo apakšiedalījumu nosaukumu.

## Parametri

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $name | `string` | Iedalījuma nosaukums. Parasti kaut kas līdzīgs state, province, region utt. |
| $country_code | `string` | Divu burtu ISO kods valstij. |
| $state_code | `string` | Divu burtu ISO kods štatam. |
| $ucwords | `bool` | Vai vārdus rakstām ar lielajiem sākumburtiem. |
| $current_country | `\WP_Ultimo\Country\Country` | Pašreizējās klases instance. |

### Kopš

- 2.0.11
### Avots

Definēts [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) 250. rindā


## Atgriež
Mainīto iedalījuma nosaukumu.
