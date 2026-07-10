---
id: wu_domain_has_correct_dns
title: Filter - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns {#filter-wudomainhascorrectdns}

Pinapayagan nito ang mga developer ng plugin na magdagdag ng mga bagong pag-tsek (checks) para matukoy ang resulta.

## Mga Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $result | `bool` | Ang kasalukuyang resulta. |
| $domain | `self` | Ang kasalukuyang *instance* ng domain. |
| $domains_and_ips | `array` | Ang listahan ng mga domain at IP na nahanap sa *DNS lookup*. |

### Simula {#since}

- 2.0.4
### Pinagmulan {#source}

Tinukoy sa [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) sa linya 455


## Ibinabalik {#returns}
Kung tama ba ang pag-setup ng DNS o hindi.
