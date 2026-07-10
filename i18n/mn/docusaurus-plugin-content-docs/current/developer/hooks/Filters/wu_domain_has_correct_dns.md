---
id: wu_domain_has_correct_dns
title: Шүүлтүүр - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Шүүлтүүр: wu_domain_has_correct_dns {#filter-wudomainhascorrectdns}

Үр дүнг тодорхойлохын тулд нэмэлт хөгжүүлэгчдэд шинэ шалгалтууд нэмэх боломж олгоно.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $result | `bool` | одоогийн үр дүн. |
| $domain | `self` | Одоогийн домэйны инстанц. |
| $domains_and_ips | `array` | DNS хайлтаар олдсон домэйнууд болон IP-уудын жагсаалт. |

### Хойш {#since}

- 2.0.4
### Эх сурвалж {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455)-д 455-р мөрөнд тодорхойлсон


## Буцаах утга {#returns}
DNS зөв тохируулагдсан эсэх.
