---
id: wu_country_get_administrative_division_name
title: Süzgüç - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name

Ýurt dolandyryş bölümleriniň owadan adyny gaýtarýar.

## Parametrler {#parameters}

| Ady | Görnüşi | Düşündiriş |
|------|------|-------------|
| $name | `string` | Bölümiň ady. Adatça ştat, welaýat, sebit we ş.m. ýaly bir zat. |
| $country_code | `string` | Ýurt üçin iki harply ISO kody. |
| $state_code | `string` | Ştat üçin iki harply ISO kody. |
| $ucwords | `bool` | sözleri baş harplar bilen ýazýan bolsak. |
| $current_country | `\WP_Ultimo\Country\Country` | Häzirki class-yň nusgasy. |

### Şondan bäri {#since}

- 2.0.11
### Çeşme {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) içinde 250-nji setirde kesgitlenen


## Gaýtarýar {#returns}
Üýtgedilen bölüm ady.
