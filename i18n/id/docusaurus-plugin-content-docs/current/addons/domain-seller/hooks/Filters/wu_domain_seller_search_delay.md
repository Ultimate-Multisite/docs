---
id: wu_domain_seller_search_delay
title: Filter - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay

Memfilter penundaan *debounce* pencarian domain dalam milidetik.

Tingkatkan nilai ini untuk mengurangi panggilan API pada koneksi yang lambat.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $delay | `int` | Penundaan *debounce* dalam milidetik. Default 500. |

### Since

- 2.1.0
### Source

Didefinisikan di [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) pada baris 854
