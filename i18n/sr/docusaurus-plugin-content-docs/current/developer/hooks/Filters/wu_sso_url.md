---
id: wu_sso_url
title: Филтер - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Филтер: wu_sso_url {#filter-wussourl}

Филтрира генерисане SSO URL-ове пре него што се врате за корисничке радње између домена.

Користите овај филтер када интеграција треба да дода поуздан контекст у SSO линк сувереног закупца или да замени URL брокера уз очување валидације токена Ultimate Multisite.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $sso_url | `string` | Генерисани SSO URL. |
| $user | `WP_User` | Корисник који ће бити аутентификован SSO посетом. |
| $site_id | `int` | ID циљног сајта за посету. |
| $redirect_to | `string` | Одредишни URL након успешне SSO валидације. |

### Од верзије {#since}

- 2.13.0

### Извор {#source}

Дефинисано у `inc/sso/class-sso.php`.


## Враћа {#returns}

Филтрирани SSO URL.
