---
id: wu_domain_seller_search_delay
title: Filter - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay {#filter-wudomainsellersearchdelay}

Filtert die Debounce-Verzögerung für die Domain-Suche in Millisekunden.

Erhöhen Sie diesen Wert, um bei langsamen Verbindungen die Anzahl der API-Aufrufe zu reduzieren.

## Parameter {#parameters}

| Name | Typ | Beschreibung |
|------|------|-------------|
| $delay | `int` | Debounce-Verzögerung in Millisekunden. Standardwert 500. |

### Seit {#since}

- 2.1.0
### Quelle {#source}

Definiert in [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) in Zeile 854
