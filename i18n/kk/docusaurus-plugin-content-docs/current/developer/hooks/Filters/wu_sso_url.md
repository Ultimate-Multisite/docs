---
id: wu_sso_url
title: Сүзгі - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Сүзгі: wu_sso_url {#filter-wussourl}

Доменаралық клиент әрекеттері үшін қайтарылмас бұрын жасалған SSO URL-дарын сүзгіден өткізеді.

Бұл сүзгіні интеграция sovereign-tenant SSO сілтемесіне сенімді контекст қосуы немесе Ultimate Multisite-тың token тексеруін сақтай отырып broker URL-ын ауыстыруы қажет болғанда пайдаланыңыз.

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $sso_url | `string` | Жасалған SSO URL. |
| $user | `WP_User` | SSO кіруі арқылы аутентификацияланатын пайдаланушы. |
| $site_id | `int` | Кіруге арналған мақсатты site ID. |
| $redirect_to | `string` | SSO тексеруі сәтті өткеннен кейінгі мақсатты URL. |

### Нұсқадан бастап {#since}

- 2.13.0

### Дереккөзі {#source}

`inc/sso/class-sso.php` ішінде анықталған.


## Қайтарады {#returns}

Сүзгіден өткізілген SSO URL.
