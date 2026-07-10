---
id: wu_domain_has_correct_dns
title: Filtro - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns {#filter-wudomainhascorrectdns}

Allow plugin developers to add new checks in order to define the results.

## Parameters {#parameters}

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $result | `bool` | il risultato corrente. |
| $domain | `self` | l'istanza corrente del dominio. |
| $domains_and_ips | `array` | l'elenco dei domini e degli IP trovati nella ricerca DNS. |

### Da {#since}

- 2.0.4

### Fonte {#source}

Definito in [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) alla riga 455

## Restituisce {#returns}
Se il DNS è configurato correttamente o meno.
