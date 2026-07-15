---
id: wu_bypass_unset_current_user
title: Filtru - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

Permite dezvoltatorilor să ocolească codul care dezactivează utilizatorul curent.

Returnarea oricărui lucru care nu este `null` va ocoli dezactivarea utilizatorului curent conectat. Acest lucru poate fi util în anumite scenarii, de exemplu, atunci când lucrați cu sub-site-uri care sunt folosite ca panouri de administrare.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | `null` pentru a continua, orice altceva pentru a ocoli. |
| $current_user | `false\|\WP_User` | Obiectul utilizatorului curent. |

### Since {#since}

- 2.0.11
### Source {#source}

Definit în [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) la linia 221


## Returns {#returns}
