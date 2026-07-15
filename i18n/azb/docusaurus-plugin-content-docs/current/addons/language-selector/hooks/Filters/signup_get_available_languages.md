---
id: signup_get_available_languages
title: Filter - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# Filter: signup_get_available_languages

Bu filter, ön yüz (front-end) üzerinden site kaydı yaparken gösterilecek dil listesini düzenler.

Bu hook'a boş bir dizi (`array`) gönderirseniz, kayıt formundaki ayar çıktısı devre dışı kalır ve site oluşturulurken varsayılan dil kullanılır. Zaten kurulu olmayan diller listeden çıkarılır (stripped).

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $available_languages | `array` | Kullanılabilir diller. |

### Since {#since}

- 4.4.0
### Source {#source}

[`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) dosyasında 117. satırda tanımlanmıştır.
