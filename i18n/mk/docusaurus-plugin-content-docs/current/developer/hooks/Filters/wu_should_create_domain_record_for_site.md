---
id: wu_should_create_domain_record_for_site
title: Филтер - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Филтер: wu_should_create_domain_record_for_site {#filter-wushouldcreatedomainrecordforsite}

Филтрира дали Ultimate Multisite треба да создаде запис за домен за новосоздадена страница.

Користете го овој филтер за да го спречите или одложите автоматското создавање запис за домен за страници што користат основен домен на споделен формулар за наплата, внатрешен хост или домен што друга интеграција ќе го управува одделно.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $create | `bool` | Дали записот за домен треба да се создаде. |
| $site | `WP_Site` | Новосоздадениот објект на страницата. |

### Од верзија {#since}

- 2.13.0

### Извор {#source}

Дефинирано во `inc/functions/domain.php`.


## Враќа {#returns}

Булова вредност што означува дали да се создаде записот за домен.
