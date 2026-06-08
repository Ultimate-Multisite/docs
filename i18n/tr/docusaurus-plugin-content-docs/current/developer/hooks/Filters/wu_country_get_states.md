---
id: wu_country_get_states
title: Filter - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filtre: wu_country_get_states

Bu ülke için eyalet listesini döndürür.

## Parametreler

| Adı | Tür | Açıklama |
|------|------|-------------|
| $states | `array` | XX => Adı formatında eyalet listesi. |
| $country_code | `string` | Ülke için iki harfli ISO kodu. |
| $current_country | `\WP_Ultimo\Country\Country` | Mevcut sınıfın örneği. |

### Başlangıç

- 2.0.11
### Kaynak

[`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) dosyasında 86. satırda tanımlanmıştır.


## Dönüş Değeri
Filtrelenmiş eyalet listesi.
