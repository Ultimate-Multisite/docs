---
id: wu_magic_link_login
title: Действие - wu_magic_link_login
sidebar_label: wu_magic_link_login
_i18n_hash: 4682ae341c1806000c2d4ca3f0af0b2e
---
# Действие: wu_magic_link_login

Вызывается после того, как пользователь вошёл в систему через магическую ссылку.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $user_id | `int` | Идентификатор пользователя. |
| $site_id | `int` | Идентификатор сайта. |

### С версии

- 2.0.0

### Источник

Определено в [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L240) на строке 240
