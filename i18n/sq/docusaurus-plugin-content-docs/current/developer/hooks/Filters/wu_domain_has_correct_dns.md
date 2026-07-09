---
id: wu_domain_has_correct_dns
title: Filtër - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

Lejon zhvilluesit e plugin të shtojnë kontrolle të reja për të përcaktuar rezultatet.

## Parametrat

| Emri | Type | Përshkrimi |
|------|------|-------------|
| $result | `bool` | rezultati aktual. |
| $domain | `self` | Instanca aktuale e domain. |
| $domains_and_ips | `array` | Lista e domain-eve dhe IP-ve të gjetura në kërkimin DNS. |

### Që prej

- 2.0.4
### Burimi

Përcaktuar në [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) në rreshtin 455


## Kthen
Nëse DNS është konfiguruar saktë apo jo.
