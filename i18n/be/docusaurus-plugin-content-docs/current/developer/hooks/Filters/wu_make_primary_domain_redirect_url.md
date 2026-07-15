---
id: wu_make_primary_domain_redirect_url
title: Фільтр - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

Фільтруе URL перанаправлення пасля вызначэння домену галоўным.

Дазваляе рэалізавальнікам наладзіць, куды будуць перанаправленне карыстальнікі пасля паспяховага вызначэння домену галоўным. Па ўстаноўкам, гэта перанапраўляе на бягучы URL на галоўным сайце або на адмін-URL сайта, які рэдагуецца.

## Параметры {#parameters}

| Назва | Тып | Апісан |
|------|------|-------------|
| $redirect_url | `string` | Паўгоджаваны URL перанаправлення. Або бягучы URL (калі гэта галоўны сайт), або адмін-URL бягучага сайта. |
| $current_site | `int` | ID сайта, домен які вызначаецца галоўным. |
| $domain | `\Domain` | Об'ект домену, які вызначаецца галоўным. |
| $old_primary_domains | `array` | Массив ID домен, якія раней былі галоўнымі. |

### З {#since}

- 2.0.0
### Вынік {#source}

Вызначаны ў [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) на 639-й паўні.


## Паказвае {#returns}
Фільтраваны URL перанаправлення.
