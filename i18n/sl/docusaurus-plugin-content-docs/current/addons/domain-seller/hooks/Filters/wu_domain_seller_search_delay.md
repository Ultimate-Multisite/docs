---
id: wu_domain_seller_search_delay
title: Filter - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay

Filtrira zakasnitev debounce pri iskanju domene v milisekundah.

Povečajte to vrednost, da zmanjšate število API klicev pri počasnih povezavah.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $delay | `int` | Zakasnitev debounce v milisekundah. Privzeto 500. |

### Od različice {#since}

- 2.1.0
### Vir {#source}

Določeno v [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) v vrstici 854
