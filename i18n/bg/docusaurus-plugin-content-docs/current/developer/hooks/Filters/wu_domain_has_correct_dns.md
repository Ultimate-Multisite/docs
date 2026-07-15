---
id: wu_domain_has_correct_dns
title: Филтър - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

Позволява на разработчиците на плагини да добавят нови проверки, за да дефинират резултатите.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $result | `bool` | текущият резултат. |
| $domain | `self` | Текуща инстанция на домейна. |
| $domains_and_ips | `array` | Списъкът от домейни и IP адреси, намерени при DNS заявката. |

### Since {#since}

- 2.0.4
### Source {#source}

Defined in [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) at line 455


## Returns {#returns}
Връща дали DNS е настроен правилно или не.
