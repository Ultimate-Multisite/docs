---
id: wu_sso_loaded
title: Действие - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Действие: wu_sso_loaded {#action-wussoloaded}

Позволява на разработчиците на плагини да добавят допълнителни хукове, ако е необходимо.

Това трябва да бъде отложено до `init`, тъй като SSO е нещо, което се изпълнява при `sunrise`.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sso | `self` | Класът SSO. |

### От версия {#since}

- 2.0.0
### Източник {#source}

Дефиниран в [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) на линия 285
