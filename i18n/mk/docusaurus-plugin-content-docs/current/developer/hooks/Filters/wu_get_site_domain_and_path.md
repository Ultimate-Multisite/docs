---
id: wu_get_site_domain_and_path
title: Филтер - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Филтер: wu_get_site_domain_and_path {#filter-wugetsitedomainandpath}

Им овозможува на програмерите да ги менуваат паровите домен/патека.

Ова може да биде корисно за повеќе работи, како што се имплементирање некаков вид staging решение, различни сервери итн.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $d | `object` | Тековниот објект што содржи клучеви за домен и патека. |
| $path_or_subdomain | `string` | Оригиналната патека/поддомен предадена на функцијата. |

### Од верзија {#since}

- 2.0.0
### Извор {#source}

Дефинирано во [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) на линија 235


## Враќа {#returns}
Објект што содржи клучеви за домен и патека.
