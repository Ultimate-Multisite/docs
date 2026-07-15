---
id: wu_domain_has_correct_dns
title: Филтр - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Филтр: wu_domain_has_correct_dns

Ба таҳиягарони plugin иҷозат медиҳад, ки барои муайян кардани натиҷаҳо санҷишҳои нав илова кунанд.

## Параметрҳо {#parameters}

| Ном | Навъ | Тавсиф |
|------|------|-------------|
| $result | `bool` | натиҷаи ҷорӣ. |
| $domain | `self` | Намунаи ҷории домен. |
| $domains_and_ips | `array` | Рӯйхати доменҳо ва IP-ҳое, ки дар ҷустуҷӯи DNS ёфт шудаанд. |

### Аз версияи {#since}

- 2.0.4
### Манбаъ {#source}

Дар [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) дар сатри 455 муайян шудааст


## Бармегардонад {#returns}
Оё DNS дуруст танзим шудааст ё не.
