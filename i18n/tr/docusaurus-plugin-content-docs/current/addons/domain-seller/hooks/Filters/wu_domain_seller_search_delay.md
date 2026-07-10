---
id: wu_domain_seller_search_delay
title: Filtre - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filtre: wu_domain_seller_search_delay {#filter-wudomainsellersearchdelay}

Alan adı arama debounce gecikmesini milisaniye cinsinden filtreler.

Bu değeri artırmak, yavaş bağlantılarda API çağrısı sayısını azaltır.

## Parametreler {#parameters}

| Ad | Tip | Açıklama |
|------|------|-------------|
| $delay | `int` | Debounce gecikmesi milisaniye cinsinden. Varsayılan: 500. |

### Since {#since}

- 2.1.0
### Source {#source}

[`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) dosyasındaki 854. satırda tanımlanmıştır.
