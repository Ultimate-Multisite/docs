---
id: wu_bypass_unset_current_user
title: Filter - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

Erlaubt Entwicklern, den Code zur Aufhebung des aktuellen Benutzers zu umgehen.

Wenn etwas anderes als null zurückgegeben wird, wird die Aufhebung des aktuell angemeldeten Benutzers umgangen. Das kann in einigen Szenarien nützlich sein, zum Beispiel bei der Arbeit mit Unterseiten, die als Admin‑Panels verwendet werden.

## Parameters

| Name | Typ | Beschreibung |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null, um fortzufahren, alles andere, um es zu umgehen. |
| $current_user | `false\|\WP_User` | Das aktuelle Benutzerobjekt. |

### Since

- 2.0.11

### Source

Definiert in [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) bei Zeile 221


## Returns
