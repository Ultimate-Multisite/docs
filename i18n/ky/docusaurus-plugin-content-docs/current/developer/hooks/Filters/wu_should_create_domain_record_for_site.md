---
id: wu_should_create_domain_record_for_site
title: Чыпка - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site {#filter-wushouldcreatedomainrecordforsite}

Жаңы түзүлгөн сайт үчүн Ultimate Multisite домен жазуусун түзүшү керекпи же жокпу — ошону чыпкалайт.

Бул чыпканы жалпы төлөм формасынын базалык доменин, ички хостту же башка интеграция өзүнчө башкара турган доменди колдонгон сайттар үчүн автоматтык домен жазуусун түзүүнү басуу же кийинкиге калтыруу үчүн колдонуңуз.

## Параметрлер {#parameters}

| Аты | Түрү | Сүрөттөмө |
|------|------|-------------|
| $create | `bool` | Домен жазуусу түзүлүшү керекпи же жокпу. |
| $site | `WP_Site` | Жаңы түзүлгөн сайт объекти. |

### Версиядан бери {#since}

- 2.13.0

### Булак {#source}

`inc/functions/domain.php` ичинде аныкталган.


## Кайтарымдар {#returns}

Домен жазуусун түзүү керекпи же жокпу көрсөтүүчү Boolean.
