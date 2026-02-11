---
id: wu_bypass_unset_current_user
title: Filtro - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filtro: wu_bypass_unset_current_user

Consenti agli sviluppatori di bypassare il codice di rimozione dell'utente corrente.

Restituire qualsiasi valore diverso da null bypasserà la rimozione dell'utente corrente loggato. Questo può essere utile in alcuni scenari, ad esempio, quando si gestiscono sottositi utilizzati come pannelli di amministrazione.

## Parametri

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null per continuare, qualsiasi altro valore per bypassarlo. |
| $current_user | `false\|\WP_User` | L'oggetto utente corrente. |

### Since

- 2.0.11

### Source

Definito in [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) alla riga 221

## Returns
