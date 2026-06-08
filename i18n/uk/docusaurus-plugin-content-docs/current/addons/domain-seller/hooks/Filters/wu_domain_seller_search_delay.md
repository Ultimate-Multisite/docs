---
id: wu_domain_seller_search_delay
title: Фільтр - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay

Фільтрує затримку дебаунсу пошуку домену в мілісекундах.

Збільште це значення, щоб зменшити кількість викликів API при повільному з'єднанні.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $delay | `int` | Затримка дебаунсу в мілісекундах. За замовчуванням 500. |

### Since

- 2.1.0
### Source

Визначено в [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) у рядку 854
