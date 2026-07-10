---
id: wu_sso_loaded
title: Acción - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Acción: wu_sso_loaded {#action-wussoloaded}

Permite aos desenvolvedores de complementos engadir hooks adicionais, se é necesario.

Isto debe atrasarse ata o init, xa que SSO é algo que se executa en sunrise.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $sso | `self` | A clase SSO. |

### Desde {#since}

- 2.0.0
### Fonte {#source}

Definido en [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) na liña 285
