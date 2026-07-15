---
id: wu_make_primary_domain_redirect_url
title: Филтер - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Филтер: wu_make_primary_domain_redirect_url

Го филтрира URL-то за пренасочување по поставување домен како примарен.

Им овозможува на програмерите да приспособат каде ќе бидат пренасочени корисниците по успешно поставување домен како примарен. Стандардно, пренасочува кон тековното URL на главниот сајт, или кон администраторското URL на сајтот што се изменува.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $redirect_url | `string` | Стандардното URL за пренасочување. Или тековното URL (ако е главен сајт) или администраторското URL на тековниот сајт. |
| $current_site | `int` | ID на сајтот чиј домен се поставува како примарен. |
| $domain | `\Domain` | Објектот на доменот што беше поставен како примарен. |
| $old_primary_domains | `array` | Низа од ID-а на домени што претходно биле примарни. |

### Од верзија {#since}

- 2.0.0
### Извор {#source}

Дефинирано во [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) на линија 639


## Враќа {#returns}
Филтрираното URL за пренасочување.
