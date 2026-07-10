---
id: wu_domain_has_correct_dns
title: Suodatin - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns {#filter-wudomainhascorrectdns}

Salli plugin-kehittäjien lisätä uusia tarkistuksia tulosten määrittämiseksi.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $result | `bool` | nykyinen tulos. |
| $domain | `self` | Nykyinen domain-instanssi. |
| $domains_and_ips | `array` | Luettelo DNS-haussa löydetyistä domaineista ja IP-osoitteista. |

### Alkaen {#since}

- 2.0.4
### Lähde {#source}

Määritelty tiedostossa [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) rivillä 455


## Palauttaa {#returns}
Onko DNS määritetty oikein vai ei.
