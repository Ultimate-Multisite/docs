---
id: wu_domain_seller_search_delay
title: Filter - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay

Filtrira kašnjenje (debounce delay) pretrage domena u milisekundama.

Povećanjem ove vrijednosti smanjuje se broj poziva API-ja na sporim vezama.

## Parametri

| Ime | Tip | Opis |
|------|------|-------------|
| $delay | `int` | Kašnjenje (debounce delay) u milisekundama. Podrazumevano je 500. |

### Od

- 2.1.0
### Izvor

Definisano je u [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) na liniji 854
