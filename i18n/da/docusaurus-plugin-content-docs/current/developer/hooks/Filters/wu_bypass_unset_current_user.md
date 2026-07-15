---
id: wu_bypass_unset_current_user
title: Filter - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

Tillad udviklere at omgå koden, der fjerner den aktuelle bruger.

Hvis der returneres noget andet end null, omgås fjernelsen af den aktuelt indloggede bruger. Dette kan være nyttigt i nogle scenarier, for eksempel når man håndterer undersider, der bruges som adminpaneler.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null for at fortsætte, alt andet for at omgå det. |
| $current_user | `false\|\WP_User` | Det aktuelle brugerobjekt. |

### Siden {#since}

- 2.0.11
### Kilde {#source}

Defineret i [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) på linje 221


## Returnerer {#returns}
