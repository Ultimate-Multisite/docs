---
id: wu_contains_element
title: Filter - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# Filtre: wu_contains_element

Geliştiricilerin başlangıç arama sonuçlarını değiştirmesine olanak tanır.

Bu, üçüncü taraf yapıcılar (builder'lar) gibi durumlar için kullanışlıdır.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $contains_elements | `bool` | Elementin içerikte bulunup bulunmadığını kontrol eder. |
| $content | `string` | İncelenen içerik. |
| $element | `self` | Mevcut element. |
| $post | `null\|\WP_Post` | Kontrol edilecek gönderi. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) dosyasında 534. satırda tanımlanmıştır.
