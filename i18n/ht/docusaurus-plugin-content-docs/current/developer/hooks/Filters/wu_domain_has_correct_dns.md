---
id: wu_domain_has_correct_dns
title: Filtè - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

Pèmèt devlopè plugin yo ajoute nouvo verifikasyon pou defini rezilta yo.

## Paramèt {#parameters}

| Non | Kalite | Deskripsyon |
|------|------|-------------|
| $result | `bool` | rezilta aktyèl la. |
| $domain | `self` | Enstans domèn aktyèl la. |
| $domains_and_ips | `array` | Lis domèn ak IP yo jwenn nan rechèch DNS la. |

### Depi {#since}

- 2.0.4
### Sous {#source}

Defini nan [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) nan liy 455


## Retounen {#returns}
Si DNS la konfigire kòrèkteman oswa ou pa.
