---
id: wu_domain_has_correct_dns
title: Filter - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

Tillåter plugin-utvecklare att lägga till nya kontroller för att definiera resultatet.

## Parametrar {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $result | `bool` | det aktuella resultatet. |
| $domain | `self` | Det aktuella domänobjektet. |
| $domains_and_ips | `array` | Listan över domäner och IP-adresser som hittades vid DNS-uppslaget. |

### Sedan {#since}

- 2.0.4
### Källa {#source}

Definieras i [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) på rad 455


## Returnerar {#returns}
Om DNS är korrekt konfigurerat eller inte.
