---
id: wu_sso_loaded
title: Handling - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Handling: wu_sso_loaded {#action-wussoloaded}

Tillad pluginudviklere at tilføje yderligere hooks, hvis det er nødvendigt.

Dette skal udsættes indtil init, da SSO er noget, der kører på sunrise.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $sso | `self` | SSO-klassen. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Defineret i [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) på linje 285
