---
id: wu_domain_seller_search_delay
title: Filtrační parametr - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay

Filtruje zpoždění (debounce delay) pro vyhledávání domény v milisekundách.

Zvýšením této hodnoty se sníží počet volání API, zejména při pomalém připojení.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $delay | `int` | Zpoždění (debounce delay) v milisekundách. Výchozí hodnota je 500. |

### Od {#since}

- 2.1.0
### Zdroj {#source}

Definováno v [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) na řádku 854
