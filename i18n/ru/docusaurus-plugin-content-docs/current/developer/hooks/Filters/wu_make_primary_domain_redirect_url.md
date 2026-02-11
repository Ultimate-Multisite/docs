---
id: wu_make_primary_domain_redirect_url
title: Фильтр - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Фильтр: wu_make_primary_domain_redirect_url

Фильтрует URL перенаправления после того, как домен сделан основным.

Позволяет разработчикам настроить, куда перенаправляются пользователи после успешного назначения домена основным. По умолчанию перенаправление идёт на текущий URL на основном сайте или на URL админки изменяемого сайта.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $redirect_url | `string` | URL перенаправления по умолчанию. Это текущий URL (если основной сайт) или URL админки текущего сайта. |
| $current_site | `int` | ID сайта, чей домен становится основным. |
| $domain | `\Domain` | Объект домена, который стал основным. |
| $old_primary_domains | `array` | Массив ID доменов, которые ранее были основными. |

### С версии

- 2.0.0

### Источник

Определено в [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) на строке 639

## Возвращает

Фильтрованный URL перенаправления.
