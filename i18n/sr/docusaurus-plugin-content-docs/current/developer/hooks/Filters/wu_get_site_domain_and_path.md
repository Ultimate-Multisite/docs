---
id: wu_get_site_domain_and_path
title: Филтер - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Филтер: wu_get_site_domain_and_path

Омогућава програмерима да манипулишу паровима домен/путања.

Ово може бити корисно за више ствари, као што су имплементација неке врсте staging решења, различити сервери итд.

## Параметри

| Назив | Тип | Опис |
|------|------|-------------|
| $d | `object` | Тренутни објекат који садржи кључеве домена и путање. |
| $path_or_subdomain | `string` | Оригинална путања/поддомен прослеђен функцији. |

### Од верзије

- 2.0.0
### Извор

Дефинисано у [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) у реду 235


## Враћа
Објекат који садржи кључеве домена и путање.
