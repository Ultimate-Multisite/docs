---
id: wu_sso_loaded
title: Action - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Action: wu_sso_loaded {#action-wussoloaded}

Lar utviklere av plugins legge til ekstra hooks, om nødvendig.

Dette må utsettes til `init`, siden SSO er noe som kjører ved *sunrise*.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $sso | `self` | SSO-klassen. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Definert i [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) på linje 285
