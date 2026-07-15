---
id: wu_domain_has_correct_dns
title: Filtrační funkce - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

Umožňuje vývojářům pluginů přidat nové kontroly, aby definovali výsledky.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $result | `bool` | aktuální výsledek. |
| $domain | `self` | aktuální instance domény. |
| $domains_and_ips | `array` | seznam domén a IP adres nalezených při DNS dotazu. |

### Since {#since}

- 2.0.4
### Source {#source}

Defined in [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) at line 455


## Returns {#returns}
Pokud je DNS správně nastaven, nebo ne.
