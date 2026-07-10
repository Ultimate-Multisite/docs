---
id: wu_domain_has_correct_dns
title: Salain - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns {#filter-wudomainhascorrectdns}

Payagan ang mga tagapagpaunlad ng karugtong na magdagdag ng mga bagong pagsusuri upang tukuyin ang mga resulta.

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $result | `bool` | ang kasalukuyang resulta. |
| $domain | `self` | Ang kasalukuyang instance ng domain. |
| $domains_and_ips | `array` | Ang listahan ng mga domain at IP na nakita sa DNS lookup. |

### Simula Noong {#since}

- 2.0.4
### Pinagmulan {#source}

Tinukoy sa [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) sa linya 455


## Ibinabalik {#returns}
Kung tama ang pagkakaayos ng DNS o hindi.
