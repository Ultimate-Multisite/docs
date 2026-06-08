---
id: wu_bypass_unset_current_user
title: Filter - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

Låter utvecklare kringgå koden som tar bort den nuvarande användaren.

Att returnera något annat än null kommer att kringgå borttagandet av den inloggade nuvarande användaren. Detta kan vara användbart i vissa scenarier, till exempel när man hanterar underwebbplatser som används som administrationspaneler.

## Parametrar

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null för att fortsätta, något annat för att kringgå det. |
| $current_user | `false\|\WP_User` | Objektet för den nuvarande användaren. |

### Sedan

- 2.0.11
### Källa

Definieras i [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) på rad 221


## Returnerar
