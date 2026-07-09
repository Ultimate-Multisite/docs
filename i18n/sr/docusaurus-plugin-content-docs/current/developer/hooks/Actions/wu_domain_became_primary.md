---
id: wu_domain_became_primary
title: Радња - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary {#action-wudomainbecameprimary}

Покреће се када домен постане примарни домен за сајт.

Ова акција се активира када се `primary_domain` ознака домена постави на `true`, било при креирању новог примарног домена или при ажурирању постојећег домена да постане примарни.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Домен који је постао примарни. |
| $blog_id | `int` | ID блога погођеног сајта. |
| $was_new | `bool` | Да ли је ово новокреирани домен. |

### Од верзије {#since}

- 2.0.0
### Извор {#source}

Дефинисано у [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) на линији 560
