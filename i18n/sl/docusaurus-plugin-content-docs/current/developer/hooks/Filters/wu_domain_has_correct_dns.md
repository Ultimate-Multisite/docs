---
id: wu_domain_has_correct_dns
title: Filter - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

Omogoči razvijalcem pluginov, da dodajo nova preverjanja za določitev rezultatov.

## Parametri

| Ime | Vrsta | Opis |
|------|------|-------------|
| $result | `bool` | trenutni rezultat. |
| $domain | `self` | Trenutna instanca domene. |
| $domains_and_ips | `array` | Seznam domen in IP-jev, najdenih pri poizvedbi DNS. |

### Od različice

- 2.0.4
### Vir

Določeno v [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) v vrstici 455


## Vrne
Ali je DNS pravilno nastavljen ali ne.
