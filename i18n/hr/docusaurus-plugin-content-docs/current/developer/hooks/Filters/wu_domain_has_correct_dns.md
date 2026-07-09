---
id: wu_domain_has_correct_dns
title: Filtar - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filtar: wu_domain_has_correct_dns {#filter-wudomainhascorrectdns}

Omogućuje programerima dodataka dodavanje novih provjera radi definiranja rezultata.

## Parametri {#parameters}

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $result | `bool` | trenutačni rezultat. |
| $domain | `self` | Trenutačna instanca domene. |
| $domains_and_ips | `array` | Popis domena i IP adresa pronađenih pri DNS pretraživanju. |

### Od {#since}

- 2.0.4
### Izvor {#source}

Definirano u [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) u retku 455


## Povratna vrijednost {#returns}
Je li DNS ispravno postavljen ili nije.
