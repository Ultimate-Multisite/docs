---
id: wu_sso_loaded
title: Действие - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Action: wu_sso_loaded

Разрешить разработчикам плагинов добавлять дополнительные хуки, при необходимости.

Это необходимо отложить до инициализации, поскольку SSO запускается при старте.

## Parameters

| Имя | Тип | Описание |
|------|------|-------------|
| $sso | `self` | Класс SSO. |

### С версии

- 2.0.0

### Источник

Определено в [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) на строке 285
