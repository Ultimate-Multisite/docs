---
id: wu_sso_loaded
title: Dejanje - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Dejanje: wu_sso_loaded

Omogoča razvijalcem vtičnikov, da po potrebi dodajo dodatne kljuke.

To je treba odložiti do init, saj je SSO nekaj, kar se izvaja ob sunrise.

## Parametri

| Ime | Vrsta | Opis |
|------|------|-------------|
| $sso | `self` | Razred SSO. |

### Od

- 2.0.0
### Vir

Določeno v [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) v vrstici 285
