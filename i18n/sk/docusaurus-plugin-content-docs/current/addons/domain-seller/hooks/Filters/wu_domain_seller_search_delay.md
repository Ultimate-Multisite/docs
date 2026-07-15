---
id: wu_domain_seller_search_delay
title: Filter - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay

Filtruje oneskorenie debounce pri vyhľadávaní domény v milisekundách.

Zvýšte túto hodnotu, aby ste znížili počet volaní API pri pomalých pripojeniach.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $delay | `int` | Oneskorenie debounce v milisekundách. Predvolené 500. |

### Od verzie {#since}

- 2.1.0
### Zdroj {#source}

Definované v [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) na riadku 854
