---
id: wu_domain_has_correct_dns
title: Filter - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

Lar plugin-utviklere legge til nye sjekker for å definere resultatene.

## Parametere

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $result | `bool` | det nåværende resultatet. |
| $domain | `self` | Den nåværende domeneinstansen. |
| $domains_and_ips | `array` | Listen over domener og IP-adresser funnet under DNS-oppslaget. |

### Tilgjengelig siden

- 2.0.4
### Kilde

Definert i [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) på linje 455.


## Returnerer
Om DNS er riktig satt opp eller ikke.
