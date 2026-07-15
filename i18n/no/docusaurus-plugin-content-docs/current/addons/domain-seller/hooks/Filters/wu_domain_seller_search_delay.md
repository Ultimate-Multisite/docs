---
id: wu_domain_seller_search_delay
title: Filter - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay

Filtrerer forsinkelsen (debounce delay) for domenesøk i millisekunder.

Øk denne verdien for å redusere API-kall på tregere tilkoblinger.

## Parametere {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $delay | `int` | Forsinkelse i millisekunder. Standard er 500. |

### Since {#since}

- 2.1.0
### Source {#source}

Definert i [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) på linje 854
