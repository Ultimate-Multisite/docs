---
id: wu_sso_loaded
title: Дія - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Action: wu_sso_loaded

Дозволяє розробникам плагінів додавати додаткові гачки, якщо це необхідно.

Це потрібно відкласти до `init`, оскільки SSO — це те, що запускається на `sunrise`.

## Параметри

| Name | Type | Опис |
|------|------|-------------|
| $sso | `self` | Клас SSO. |

### Починаючи з

- 2.0.0
### Джерело

Визначено в [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) на рядку 285
