---
id: wu_country_get_states
title: Filter - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states

Bu ülkenin eyalet listesini döndürür.

## Parametreler

| Ad | Tip | Açıklama |
|------|------|-------------|
| $states | `array` | XX => Ad formatında eyalet listesi. |
| $country_code | `string` | Ülke için iki harfli ISO kodu. |
| $current_country | `\WP_Ultimo\Country\Country` | Mevcut sınıfın örneği. |

### Kullanılmaya Başladığı Versiyon

- 2.0.11
### Kaynak

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) dosyasında, 86. satırda tanımlanmıştır.


## Döndürdüğü Değer
Filtrelenmiş eyalet listesi.
