---
id: wu_domain_seller_search_delay
title: Filter - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay

Filtert de debounce-vertraging voor de domeinsuche in milliseconden.

Verhoog deze waarde om het aantal API-aanroepen te verminderen bij langzame verbindingen.

## Parameters {#parameters}

| Naam | Type | Beschrijving |
|------|------|-------------|
| $delay | `int` | De debounce-vertraging in milliseconden. Standaard is 500. |

### Sinds {#since}

- 2.1.0
### Bron {#source}

Wordt gedefinieerd in [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) op regel 854
