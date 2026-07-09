---
id: wu_domain_has_correct_dns
title: Филтер - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns {#filter-wudomainhascorrectdns}

Им овозможува на развивачите на plugin-и да додаваат нови проверки за да ги дефинираат резултатите.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $result | `bool` | тековниот резултат. |
| $domain | `self` | Тековната инстанца на доменот. |
| $domains_and_ips | `array` | Списокот на домени и IP-адреси пронајдени при DNS-пребарувањето. |

### Од {#since}

- 2.0.4
### Извор {#source}

Дефинирано во [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) на линија 455


## Враќа {#returns}
Дали DNS е правилно поставен или не.
