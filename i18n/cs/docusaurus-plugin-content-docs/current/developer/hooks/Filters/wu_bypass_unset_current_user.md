---
id: wu_bypass_unset_current_user
title: Filter - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user {#filter-wubypassunsetcurrentuser}

Umožňuje vývojářům obcházet kód pro zrušení aktuálního uživatele.

Vracení jakéhokoli zhodnocení kromě `null` zruší (nebo obchází) zrušení aktuálního přihlášeného uživatele. To může být užitečné v některých scénářích, například při práci s poddoménami, které jsou používány jako administrátorská panel.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $null_or_bypass | `mixed` | `null` pro pokračování, vše ostatní pro obcházení. |
| $current_user | `false\|\WP_User` | Objekt aktuálního uživatele. |

### Od {#since}

- 2.0.11
### Zdroj {#source}

Definováno v [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) na řádku 221

## Vrací {#returns}
