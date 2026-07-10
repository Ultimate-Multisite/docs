---
id: wu_sso_loaded
title: Дзея - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Action: wu_sso_loaded {#action-wussoloaded}

Дазваляе раробнікам плагінаў дадаць адпаведныя хукі, калі гэта неабходна.

Гэ павінна адбыцца пасля `init`, бо SSO — гэта функцыя, якая праходзіць на `sunrise`.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sso | `self` | Клас SSO. |

### Since {#since}

- 2.0.0
### Source {#source}

Вызначана ў [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) на 285-й кропцы.
