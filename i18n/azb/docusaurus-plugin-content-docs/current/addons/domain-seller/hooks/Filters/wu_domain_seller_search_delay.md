---
id: wu_domain_seller_search_delay
title: Filter - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay {#filter-wudomainsellersearchdelay}

Bu filtre, alan adı araması yaparken kullanılan debounce gecikmesini milisaniye cinsinden ayarlar.

Bu değeri artırırsanız, internet bağlantısı yavaş olduğunda API çağrılarının sayısını azaltabilirsiniz.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $delay | `int` | Debounce gecikmesi milisaniye cinsinden. Varsayılan değeri 500'dür. |

### Since {#since}

- 2.1.0
### Source {#source}

[`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) dosyasında 854. satırda tanımlanmıştır.
