---
id: wu_sso_loaded
title: Acción - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Action: wu_sso_loaded

Permitir a los desarrolladores de plugins agregar ganchos adicionales, si es necesario.

Esto debe retrasarse hasta la inicialización, ya que SSO es algo que se ejecuta al amanecer.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $sso | `self` | La clase SSO. |

### Desde

- 2.0.0
### Fuente

Defined in [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) at line 285
