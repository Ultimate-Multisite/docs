---
id: wu_domain_became_primary
title: Әрекет - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Әрекет: wu_domain_became_primary

Домен сайт үшін негізгі домен болғанда іске қосылады.

Бұл әрекет доменнің primary_domain жалаушасы true мәніне орнатылғанда іске қосылады: жаңа негізгі домен жасалғанда немесе бар домен негізгі болуы үшін жаңартылғанда.

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Негізгі болған домен. |
| $blog_id | `int` | Әсер еткен сайттың blog ID-і. |
| $was_new | `bool` | Бұл жаңадан жасалған домен бе. |

### Бастап {#since}

- 2.0.0
### Дереккөзі {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) файлында 560-жолда анықталған.
