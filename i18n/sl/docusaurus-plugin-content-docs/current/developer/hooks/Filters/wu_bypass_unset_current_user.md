---
id: wu_bypass_unset_current_user
title: Filter - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

Razvijalcem omogoči, da zaobidejo kodo za odstranitev trenutnega uporabnika.

Vrnitev česar koli drugega kot null bo zaobšla odstranitev trenutno prijavljenega uporabnika. To je lahko uporabno v nekaterih scenarijih, na primer pri delu s podmesti, ki se uporabljajo kot skrbniške plošče.

## Parametri

| Ime | Vrsta | Opis |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null za nadaljevanje, kar koli drugega za zaobid. |
| $current_user | `false\|\WP_User` | Objekt trenutnega uporabnika. |

### Od različice

- 2.0.11
### Vir

Določeno v [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) v vrstici 221


## Vrne
