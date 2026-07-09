---
id: wu_domain_seller_search_delay
title: Suodatin - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay {#filter-wudomainsellersearchdelay}

Suodattaa domainhaun debounce-viiveen millisekunteina.

Suurenna tätä arvoa vähentääksesi API-kutsuja hitailla yhteyksillä.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $delay | `int` | Debounce-viive millisekunteina. Oletus 500. |

### Alkaen versiosta {#since}

- 2.1.0
### Lähde {#source}

Määritelty tiedostossa [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) rivillä 854
