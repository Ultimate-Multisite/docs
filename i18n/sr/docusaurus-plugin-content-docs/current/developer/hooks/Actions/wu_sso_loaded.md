---
id: wu_sso_loaded
title: Радња - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Радња: wu_sso_loaded {#action-wussoloaded}

Омогућава програмерима plugin-а да додају додатне hooks, ако је потребно.

Ово мора да се одложи до init, јер је SSO нешто што се покреће на sunrise.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $sso | `self` | SSO класа. |

### Од верзије {#since}

- 2.0.0
### Извор {#source}

Дефинисано у [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) у линији 285
