---
id: wu_domain_has_correct_dns
title: Filter - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

Võimaldab plugin’i arendajatel lisada uusi kontrolle tulemuste määratlemiseks.

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $result | `bool` | praegune tulemus. |
| $domain | `self` | Praegune domeeni instants. |
| $domains_and_ips | `array` | DNS-päringust leitud domeenide ja IP-de loend. |

### Alates {#since}

- 2.0.4
### Allikas {#source}

Määratletud failis [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) real 455


## Tagastab {#returns}
Kas DNS on õigesti seadistatud või mitte.
