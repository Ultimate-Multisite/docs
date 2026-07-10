---
id: wu_should_create_domain_record_for_site
title: Фильтр - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Фильтр: wu_should_create_domain_record_for_site {#filter-wushouldcreatedomainrecordforsite}

Фильтрует, должен ли Ultimate Multisite создавать запись домена для недавно созданного сайта.

Используйте этот фильтр, чтобы подавить или отложить автоматическое создание записи домена для сайтов, которые используют общий базовый домен checkout-формы, внутренний хост или домен, которым другая интеграция будет управлять отдельно.

## Параметры {#parameters}

| Имя | Тип | Описание |
|------|------|-------------|
| $create | `bool` | Должна ли быть создана запись домена. |
| $site | `WP_Site` | Объект недавно созданного сайта. |

### Начиная с версии {#since}

- 2.13.0

### Источник {#source}

Определено в `inc/functions/domain.php`.


## Возвращает {#returns}

Логическое значение, указывающее, создавать ли запись домена.
