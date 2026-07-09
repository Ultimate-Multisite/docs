---
id: wu_domain_has_correct_dns
title: Фильтр - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Фильтр: wu_domain_has_correct_dns {#filter-wudomainhascorrectdns}

Плагин эшләүчеләргә нәтиҗәләрне билгеләү өчен яңа тикшерүләр өстәргә рөхсәт итә.

## Параметрлар {#parameters}

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $result | `bool` | хәзерге нәтиҗә. |
| $domain | `self` | Хәзерге домен данәсе. |
| $domains_and_ips | `array` | DNS эзләүдә табылган доменнар һәм IP-лар исемлеге. |

### Кайчаннан бирле {#since}

- 2.0.4
### Чыганак {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) эчендә 455 нче юлда билгеләнгән


## Кайтара {#returns}
DNS дөрес көйләнгәнме, юкмы.
