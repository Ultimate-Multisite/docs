---
id: wu_domain_has_correct_dns
title: Filter - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns {#filter-wudomainhascorrectdns}

Erlaabt plugin-Entwéckler, nei Iwwerpréiwungen derbäizesetzen, fir d'Resultater ze definéieren.

## Parameteren {#parameters}

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $result | `bool` | dat aktuellt Resultat. |
| $domain | `self` | Déi aktuell Domain-Instanz. |
| $domains_and_ips | `array` | D'Lëscht vun Domainen an IPen, déi bei der DNS-Nosich fonnt goufen. |

### Zanter {#since}

- 2.0.4
### Quell {#source}

Definéiert an [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) op Zeil 455


## Retouren {#returns}
Ob den DNS korrekt ageriicht ass oder net.
