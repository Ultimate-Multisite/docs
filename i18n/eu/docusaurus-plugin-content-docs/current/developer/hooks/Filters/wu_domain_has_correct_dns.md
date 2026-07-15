---
id: wu_domain_has_correct_dns
title: Iragazkia - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Iragazkia: wu_domain_has_correct_dns

Plugin garatzaileei egiaztapen berriak gehitzeko aukera ematen die, emaitzak definitzeko.

## Parametroak {#parameters}

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $result | `bool` | uneko emaitza. |
| $domain | `self` | Uneko domeinu-instantzia. |
| $domains_and_ips | `array` | DNS bilaketan aurkitutako domeinuen eta IPen zerrenda. |

### Noiztik {#since}

- 2.0.4
### Iturburua {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) fitxategian definitua, 455. lerroan


## Itzulketak {#returns}
DNSa behar bezala konfiguratuta dagoen ala ez.
