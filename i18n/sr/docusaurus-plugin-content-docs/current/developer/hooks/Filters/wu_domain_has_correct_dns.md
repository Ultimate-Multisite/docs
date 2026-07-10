---
id: wu_domain_has_correct_dns
title: Филтер - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Филтер: wu_domain_has_correct_dns {#filter-wudomainhascorrectdns}

Омогућава plugin програмерима да додају нове провере како би дефинисали резултате.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $result | `bool` | тренутни резултат. |
| $domain | `self` | Тренутна инстанца домена. |
| $domains_and_ips | `array` | Листа домена и IP адреса пронађених при DNS lookup-у. |

### Од верзије {#since}

- 2.0.4
### Извор {#source}

Дефинисано у [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) на линији 455


## Враћа {#returns}
Да ли је DNS исправно подешен или није.
