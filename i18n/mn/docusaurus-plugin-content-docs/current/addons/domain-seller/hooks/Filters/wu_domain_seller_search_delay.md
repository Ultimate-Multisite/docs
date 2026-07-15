---
id: wu_domain_seller_search_delay
title: Шүүлтүүр - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Шүүлтүүр: wu_domain_seller_search_delay

Домэйн хайлтын debounce саатлыг миллисекундээр шүүнэ.

Удаан холболт дээрх API дуудлагыг багасгахын тулд энэ утгыг нэмэгдүүлнэ үү.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $delay | `int` | Debounce саатал миллисекундээр. Анхны утга 500. |

### Хойш {#since}

- 2.1.0
### Эх сурвалж {#source}

[`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854)-д 854-р мөрөнд тодорхойлсон.
