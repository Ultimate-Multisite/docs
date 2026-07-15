---
id: wu_domain_seller_search_delay
title: Filter - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay

Filtrerar fördröjningen (debounce delay) för sökningen efter domän i millisekunder.

Öka detta värde för att minska antalet API-anrop vid långsamma anslutningar.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $delay | `int` | Fördröjning i millisekunder. Standardvärde är 500. |

### Sedan {#since}

- 2.1.0
### Källa {#source}

Definieras i [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) på rad 854
