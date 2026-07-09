---
id: wu_sso_loaded
title: Ação - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Ação: wu_sso_loaded

Permite que os desenvolvedores de plugin adicionem hooks adicionais, se necessário.

Isto precisa ser adiado até ao init, pois SSO é algo que é executado no sunrise.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $sso | `self` | A classe SSO. |

### Desde

- 2.0.0
### Fonte

Definido em [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) na linha 285
