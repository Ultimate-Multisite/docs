---
id: wu_should_create_domain_record_for_site
title: Филтер - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site

Филтрира да ли Ultimate Multisite треба да креира запис домена за новокреирани сајт.

Користите овај филтер да потиснете или одложите аутоматско креирање записа домена за сајтове који користе дељени основни домен обрасца за плаћање, интерни хост или домен којим ће друга интеграција управљати засебно.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $create | `bool` | Да ли запис домена треба да буде креиран. |
| $site | `WP_Site` | Новокреирани објекат сајта. |

### Од верзије {#since}

- 2.13.0

### Извор {#source}

Дефинисано у `inc/functions/domain.php`.


## Враћа {#returns}

Булова вредност која означава да ли треба креирати запис домена.
