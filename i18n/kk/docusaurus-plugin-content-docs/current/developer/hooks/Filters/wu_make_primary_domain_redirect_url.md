---
id: wu_make_primary_domain_redirect_url
title: Сүзгі - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url {#filter-wumakeprimarydomainredirecturl}

Доменді негізгі еткеннен кейін redirect URL-ді сүзеді.

Әзірлеушілерге домен сәтті түрде негізгі ретінде орнатылғаннан кейін пайдаланушылар қайда қайта бағытталатынын баптауға мүмкіндік береді. Әдепкі бойынша, негізгі сайттағы ағымдағы URL-ге немесе өзгертіліп жатқан сайттың admin URL-іне қайта бағыттайды.

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $redirect_url | `string` | Әдепкі redirect URL. Ағымдағы URL (егер негізгі сайт болса) немесе ағымдағы сайттың admin URL-і. |
| $current_site | `int` | Домені негізгі етіліп жатқан сайттың ID-і. |
| $domain | `\Domain` | Негізгі етілген домен нысаны. |
| $old_primary_domains | `array` | Бұрын негізгі болған домендер ID-лерінің массиві. |

### Бастап {#since}

- 2.0.0
### Дереккөз {#source}

[`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) ішінде, 639-жолда анықталған


## Қайтарады {#returns}
Сүзілген redirect URL.
