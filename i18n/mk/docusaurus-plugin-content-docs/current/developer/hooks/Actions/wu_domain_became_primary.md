---
id: wu_domain_became_primary
title: Акција - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Акција: wu_domain_became_primary

Се активира кога домен станува примарен домен за веб-локација.

Оваа акција се активира кога ознаката primary_domain на домен е поставена на true, или при креирање нов примарен домен или при ажурирање постоечки домен за да стане примарен.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Доменот што стана примарен. |
| $blog_id | `int` | ID на блогот на засегнатата веб-локација. |
| $was_new | `bool` | Дали ова е новокреиран домен. |

### Од верзија {#since}

- 2.0.0
### Извор {#source}

Дефинирано во [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) на линија 560
