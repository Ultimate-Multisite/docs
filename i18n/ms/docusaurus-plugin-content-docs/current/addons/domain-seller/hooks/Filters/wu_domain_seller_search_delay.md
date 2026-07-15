---
id: wu_domain_seller_search_delay
title: Penapis - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay

Menapis kelewatan *debounce* carian domain dalam milisaat.

Tingkatkan nilai ini untuk mengurangkan panggilan API pada sambungan yang perlahan.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $delay | `int` | Kelewatan *debounce* dalam milisaat. Lalai 500. |

### Since {#since}

- 2.1.0
### Source {#source}

Didefinisikan dalam [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) pada baris 854
