---
id: wu_sso_loaded
title: Akcija - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Action: wu_sso_loaded

Omogućava razvojnim programerima plugin-a da dodaju dodatne hook-ove, ako je potrebno.

Ovo mora biti odloženo do `init` akcije, jer se SSO izvršava tokom "sunrise" faze.

## Parametri {#parameters}

| Ime | Tip | Opis |
|------|------|-------------|
| $sso | `self` | SSO klasa. |

### Od {#since}

- 2.0.0
### Izvor {#source}

Definisano u [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) na liniji 285
