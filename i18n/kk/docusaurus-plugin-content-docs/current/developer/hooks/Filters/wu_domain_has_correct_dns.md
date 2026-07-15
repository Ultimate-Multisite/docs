---
id: wu_domain_has_correct_dns
title: Сүзгі - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Сүзгі: wu_domain_has_correct_dns

Плагин әзірлеушілеріне нәтижелерді анықтау үшін жаңа тексерулер қосуға мүмкіндік береді.

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $result | `bool` | ағымдағы нәтиже. |
| $domain | `self` | Ағымдағы домен данасы. |
| $domains_and_ips | `array` | DNS іздеуінде табылған домендер мен IP мекенжайларының тізімі. |

### Бастап {#since}

- 2.0.4
### Дереккөз {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) файлында, 455-жолда анықталған


## Қайтарымдар {#returns}
DNS дұрыс бапталғанын немесе бапталмағанын қайтарады.
