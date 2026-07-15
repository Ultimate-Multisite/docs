---
id: wu_domain_has_correct_dns
title: Filter - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

Omogućava programerima pluginova da dodaju nove provjere kako bi definisali rezultate.

## Parametri {#parameters}

| Name | Type | Opis |
|------|------|-------------|
| $result | `bool` | Trenutni rezultat. |
| $domain | `self` | Trenutna instanca domena. |
| $domains_and_ips | `array` | Lista domena i IP adresa pronađenih prilikom DNS upita. |

### Od {#since}

- 2.0.4
### Izvor {#source}

Definisan je u [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) na liniji 455.


## Vraća {#returns}
Da li je DNS pravilno postavljen ili ne.
