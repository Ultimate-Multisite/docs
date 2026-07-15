---
id: wu_country_get_cities
title: Filter - wu_country_get_cities
sidebar_label: wu_country_get_cities
_i18n_hash: 735d225527548ab4de66cd0308439c09
---
# Filter: wu_country_get_cities

Bir ülkedeki bir eyalet için şehir listesini döndürür.

## Parametreler {#parameters}

| Ad | Tip | Açıklama |
|------|------|-------------|
| $cities | `array` | Eyalet şehir adları listesi. Anahtar (key) bulunmamaktadır. |
| $country_code | `string` | Ülke için iki harfli ISO kodu. |
| $state_code | `string` | Eyalet için iki harfli ISO kodu. |
| $current_country | `\WP_Ultimo\Country\Country` | Mevcut sınıfın örneği. |

### Versiyon {#since}

- 2.0.11
### Kaynak {#source}

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L146) dosyasının 146. satırında tanımlanmıştır.


## Dönüş Değeri {#returns}
Filtrelenmiş eyalet listesi.
