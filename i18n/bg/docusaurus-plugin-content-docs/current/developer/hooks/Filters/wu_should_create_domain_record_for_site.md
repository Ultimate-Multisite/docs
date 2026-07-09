---
id: wu_should_create_domain_record_for_site
title: Филтър - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Филтър: wu_should_create_domain_record_for_site

Филтрира дали Ultimate Multisite трябва да създаде запис за домейн за новосъздаден сайт.

Използвайте този филтър, за да потиснете или отложите автоматичното създаване на запис за домейн за сайтове, които използват споделен базов домейн на формуляр за checkout, вътрешен хост или домейн, който друга интеграция ще управлява отделно.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $create | `bool` | Дали записът за домейн трябва да бъде създаден. |
| $site | `WP_Site` | Новосъздаденият обект на сайт. |

### От версия

- 2.13.0

### Източник

Дефинирано в `inc/functions/domain.php`.


## Връща

Булева стойност, указваща дали да се създаде записът за домейн.
