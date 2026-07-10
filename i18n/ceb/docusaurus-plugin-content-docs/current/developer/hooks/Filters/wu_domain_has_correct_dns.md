---
id: wu_domain_has_correct_dns
title: Pansala - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns {#filter-wudomainhascorrectdns}

Tugoti ang mga tigpalambo sa dugang-modulo nga makadugang og bag-ong mga pagsusi aron mahibut ang mga resulta.

## Mga Parametro {#parameters}

| Ngalan | Matang | Deskripsyon |
|------|------|-------------|
| $result | `bool` | ang kasamtangang resulta. |
| $domain | `self` | Ang kasamtangang domain instance. |
| $domains_and_ips | `array` | Ang lista sa mga domain ug IP nga nakit-an sa DNS lookup. |

### Sukad {#since}

- 2.0.4
### Tinubdan {#source}

Gihubit sa [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) sa linya 455


## Mga Ibalik {#returns}
Kung husto ba ang pagka-configure sa DNS o dili.
