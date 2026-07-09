---
id: wu_sso_loaded
title: Acțiune - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Action: wu_sso_loaded {#action-wussoloaded}

Permite dezvoltatorilor de plugin să adauge hook-uri suplimentare, dacă este necesar.

Acest lucru trebuie amânat până la `init`, deoarece SSO este ceva ce rulează la `sunrise`.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $sso | `self` | Clasa SSO. |

### De la {#since}

- 2.0.0
### Sursă {#source}

Definit în [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) la linia 285
