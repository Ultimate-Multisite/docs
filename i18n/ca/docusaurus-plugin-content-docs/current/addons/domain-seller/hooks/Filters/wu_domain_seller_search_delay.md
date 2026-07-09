---
id: wu_domain_seller_search_delay
title: Filtre - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay {#filter-wudomainsellersearchdelay}

Filtra el retras (debounce delay) de la cerca de domini en mil·liseconds.

Augmenta aquest valor per reduir les crides a l'API quan la connexió és lenta.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $delay | `int` | Retras de debounce en mil·liseconds. Per defecte, 500. |

### Desvingut {#since}

- 2.1.0
### Font {#source}

Definit a [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) a la línia 854
