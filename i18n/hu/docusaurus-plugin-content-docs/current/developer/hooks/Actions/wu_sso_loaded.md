---
id: wu_sso_loaded
title: Akció - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Action: wu_sso_loaded

Megengedi a plugin fejlesztőknek, hogy szükség esetén további hook-okat adjanak hozzá.

Ez késleltetettnek kell lennie az `init` szakaszig, mivel az SSO (Single Sign-On) egy olyan funkció, amely a `sunrise` alatt fut.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $sso | `self` | Az SSO osztálya. |

### Desde {#since}

- 2.0.0
### Forrás {#source}

Definíciója található [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) fájlban, 285-sorban.
