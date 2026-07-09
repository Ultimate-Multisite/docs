---
id: wu_country_get_administrative_division_name
title: Filtre - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

Ülke idari alt bölümlerinin düzgün bir adını döndürür.

## Parametreler {#parameters}

| Name | Type | Açıklama |
|------|------|-------------|
| $name | `string` | Bölüm adı. Genellikle eyalet, vilayet, bölge vb. gibi bir şeydir. |
| $country_code | `string` | Ülke için iki harfli ISO kodu. |
| $state_code | `string` | Eyalet için iki harfli ISO kodu. |
| $ucwords | `bool` | Kelimeleri büyük harfe çevirip çevirmeyeceğimiz. |
| $current_country | `\WP_Ultimo\Country\Country` | Mevcut sınıfın örneği. |

### Kullanılmaya Başladığı {#since}

- 2.0.11
### Kaynak {#source}

[inc/country/class-country.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) adresinde 250. satırda tanımlanmıştır.


## Dönüş Değeri {#returns}
Değiştirilmiş bölüm adı.
