---
id: wu_sso_loaded
title: Akcja - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Akcja: wu_sso_loaded

Pozwala deweloperom pluginów na dodanie dodatkowych hooków, jeśli zajdzie taka potrzeba.

To musi zostać opóźnione do momentu `init`, ponieważ SSO to coś, co działa na etapie `sunrise`.

## Parametry

| Nazwa | Typ | Opis |
|------|------|-------------|
| $sso | `self` | Klasa SSO. |

### Od

- 2.0.0
### Źródło

Zdefiniowane w [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) w linii 285
