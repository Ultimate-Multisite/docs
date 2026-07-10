---
id: wu_domain_seller_search_delay
title: Filter - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay {#filter-wudomainsellersearchdelay}

Sinasaayos nito ang *debounce delay* ng paghahanap ng domain sa miliseconds.

Palakihin ang halaga na ito para mabawasan ang mga API calls kapag mabagal ang koneksyon.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $delay | `int` | Ang *debounce delay* sa miliseconds. Default ay 500. |

### Since {#since}

- 2.1.0
### Source {#source}

Tinukoy sa [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) sa linya 854
