---
id: wu_domain_has_correct_dns
title: Filter - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filtru: wu_domain_has_correct_dns

Permite dezvoltatorilor de plugin să adauge verificări noi pentru a defini rezultatele.

## Parametri {#parameters}

| Name | Type | Descriere |
|------|------|-------------|
| $result | `bool` | rezultatul curent. |
| $domain | `self` | Instanța curentă a domeniului. |
| $domains_and_ips | `array` | Lista de domenii și IP-uri găsite în căutarea DNS. |

### De la {#since}

- 2.0.4
### Sursă {#source}

Definit în [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) la linia 455


## Returnează {#returns}
Indică dacă DNS-ul este configurat corect sau nu.
