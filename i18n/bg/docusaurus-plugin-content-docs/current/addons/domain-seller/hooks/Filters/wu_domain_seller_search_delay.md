---
id: wu_domain_seller_search_delay
title: Филтър - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay {#filter-wudomainsellersearchdelay}

Филтрира закъснението (debounce delay) на търсенето на домейн в милисекунди.

Увеличете тази стойност, за да намалите заявките към API, когато връзката е бавна.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $delay | `int` | Закъснение на debounce в милисекунди. По подразбиране е 500. |

### Since {#since}

- 2.1.0
### Source {#source}

Дефиниран в [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) на линия 854
