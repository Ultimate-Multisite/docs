---
id: signup_get_available_languages
title: Filter - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filtre: signup_get_available_languages {#filter-signupgetavailablelanguages}

Ön yüzde (front-end) site kaydı sırasında kullanılabilir dil listesini filtreler.

Bu hook'a boş bir dizi (array) göndermek, kayıt formundaki ayar çıktısını devre dışı bırakır ve site oluşturulurken varsayılan dil kullanılır. Zaten kurulu olmayan diller listeden çıkarılır.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $available_languages | `array` | Kullanılabilir diller. |

### Versiyon {#since}

- 4.4.0
### Kaynak {#source}

[`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) dosyasında 117. satırda tanımlanmıştır.
