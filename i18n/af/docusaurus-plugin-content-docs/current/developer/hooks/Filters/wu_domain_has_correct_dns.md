---
id: wu_domain_has_correct_dns
title: Filter - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns {#filter-wudomainhascorrectdns}

Dit laat plugin-ontwikkelaars toe om nuwe kontrole by te voeg om die resultate te definieer.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $result | `bool` | Die huidige resultaat. |
| $domain | `self` | Die huidige domein-instansie. |
| $domains_and_ips | `array` | Die lys van domeine en IP's wat op die DNS-navraag gevind is. |

### Since {#since}

- 2.0.4
### Source {#source}

Benoem in [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) op lyn 455


## Returns {#returns}
Of die DNS korrek opgestel is of nie.
