---
id: wu_sso_loaded
title: Akcia - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Akcia: wu_sso_loaded

Umožňuje vývojárom doplnkov pridať ďalšie hooky, ak je to potrebné.

Toto musí byť odložené až do init, pretože SSO je niečo, čo beží na sunrise.

## Parametre

| Názov | Typ | Opis |
|------|------|-------------|
| $sso | `self` | Trieda SSO. |

### Od verzie

- 2.0.0
### Zdroj

Definované v [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) na riadku 285
