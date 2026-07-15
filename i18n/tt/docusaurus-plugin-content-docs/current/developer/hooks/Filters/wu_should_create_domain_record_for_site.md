---
id: wu_should_create_domain_record_for_site
title: Фильтр - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Фильтр: wu_should_create_domain_record_for_site

Яңа төзелгән сайт өчен Ultimate Multisite домен язмасын төзергә тиешме икәнен фильтрлый.

Бу фильтрны уртак түләү формасы төп доменын, эчке хостны яки башка интеграция аерым идарә итәчәк доменны кулланган сайтлар өчен автоматик домен язмасы төзүне бастыру яки кичектерү өчен кулланыгыз.

## Параметрлар {#parameters}

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $create | `bool` | Домен язмасы төзелергә тиешме. |
| $site | `WP_Site` | Яңа төзелгән сайт объекты. |

### Чыгарылыш {#since}

- 2.13.0

### Чыганак {#source}

`inc/functions/domain.php` эчендә билгеләнгән.


## Кайтара {#returns}

Домен язмасын төзергәме-юкмы икәнен күрсәтүче Boolean.
