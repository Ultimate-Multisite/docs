---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

Ülkenin idari alt bölümlerinin güzel biçimlendirilmiş adını döndürür.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $name | `string` | Bölge adı. Genellikle eyalet, vilayet, bölge gibi bir şey olur. |
| $country_code | `string` | Ülke için iki harfli ISO kodu. |
| $state_code | `string` | Eyalet için iki harfli ISO kodu. |
| $ucwords | `bool` | Kelimeleri büyük harfe çevirip çevirmeyeceğimiz. |
| $current_country | `\WP_Ultimo\Country\Country` | Mevcut sınıfın örneği. |

### Since {#since}

- 2.0.11
### Source {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) dosyasının 250. satırında tanımlanmıştır.


## Returns {#returns}
Değiştirilmiş bölge adını döndürür.
