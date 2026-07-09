---
id: wu_domain_became_primary
title: Дзея - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary {#action-wudomainbecameprimary}

Выклікаецца, калі домен становіцца асноўным для сайта.

Гэты дзейстык выклікаецца, калі флаг `primary_domain` домена уставажаецца ў `true` — як пры створанні новага асноўнага домена, так і пры абнаўленні існуюнага домена, каб ён стаў асноўным.

## Паметнікі {#parameters}

| Назва | Тып | Апісан |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Домен, які стаў асноўным. |
| $blog_id | `int` | ID блога задымакленага сайта. |
| $was_new | `bool` | Ячы гэта новы створаны домен. |

### З версіі {#since}

- 2.0.0
### Выкненне {#source}

Вызначаны ў [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) на 560-й пакульцы.
