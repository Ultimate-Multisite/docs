---
id: wu_domain_has_correct_dns
title: Фільтр - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

Дазваляе разработнікам плагінаў дадаваць новыя праверкі для вызначэння вынікаў.

## Параметры {#parameters}

| Назва | Тып | Апісан |
|------|------|-------------|
| $result | `bool` | бягучы вынік. |
| $domain | `self` | Bieжачыя спасылкі на домен. |
| $domains_and_ips | `array` | Спіс доменаў і IP-адрэсаў, выяўленых па DNS-запыце. |

### З {#since}

- 2.0.4
### Шторышча {#source}

Вызначаны ў [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) у 455-й пасылцы.


## Паказвае {#returns}
Яні, чи правільна наладжаваны DNS, і яні, чи не правільна.
