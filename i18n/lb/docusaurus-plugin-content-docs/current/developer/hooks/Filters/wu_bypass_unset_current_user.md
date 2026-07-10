---
id: wu_bypass_unset_current_user
title: Filter - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user {#filter-wubypassunsetcurrentuser}

Erlaabt Entwéckler, de Code fir den aktuelle Benotzer zeréckzesetzen ze ëmgoen.

Wann eppes anescht wéi null zeréckginn gëtt, gëtt d'Zerécksetze vum aktuell ageloggte Benotzer ëmgaangen. Dat kann a verschiddene Szenarie nëtzlech sinn, zum Beispill wann ee mat Ënner-Sites schafft, déi als Admin-Panele benotzt ginn.

## Parameteren {#parameters}

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null fir weiderzefueren, alles anescht fir et ze ëmgoen. |
| $current_user | `false\|\WP_User` | Den aktuelle Benotzerobjet. |

### Zanter {#since}

- 2.0.11
### Quell {#source}

Definéiert an [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) op Linn 221


## Retourwäerter {#returns}
