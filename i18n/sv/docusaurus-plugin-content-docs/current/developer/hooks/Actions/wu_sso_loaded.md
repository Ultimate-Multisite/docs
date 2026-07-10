---
id: wu_sso_loaded
title: Action - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Action: wu_sso_loaded {#action-wussoloaded}

Låter plugin-utvecklare lägga till ytterligare hooks, vid behov.

Detta måste fördröjas till `init`, eftersom SSO är något som körs vid uppstart (`sunrise`).

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $sso | `self` | SSO-klassen. |

### Sedan {#since}

- 2.0.0
### Källa {#source}

Definieras i [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) på rad 285
