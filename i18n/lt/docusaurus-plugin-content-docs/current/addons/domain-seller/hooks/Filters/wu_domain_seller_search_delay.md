---
id: wu_domain_seller_search_delay
title: Filtras - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filtras: wu_domain_seller_search_delay

Filtruoja domeno paieškos debounce delsą milisekundėmis.

Padidinkite šią reikšmę, kad sumažintumėte API užklausų skaičių esant lėtiems ryšiams.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $delay | `int` | Debounce delsa milisekundėmis. Numatytoji reikšmė 500. |

### Nuo {#since}

- 2.1.0
### Šaltinis {#source}

Apibrėžta [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) 854 eilutėje
