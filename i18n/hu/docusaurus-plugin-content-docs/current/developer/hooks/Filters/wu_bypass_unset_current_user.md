---
id: wu_bypass_unset_current_user
title: Szűrő - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Szűrő: wu_bypass_unset_current_user {#filter-wubypassunsetcurrentuser}

Ez a szűrő lehetővé teszi a fejlesztők számára, hogy elkerüljék az aktuális felhasználó megsemmisítését.

Ha valami más, mint null-t ad vissza, akkor elkerüli az aktuálisan belépett felhasználó megsemmisítését. Ez hasznos lehet bizonyos forgatókönyvekben, például akkor, amikor aloldalakkal dolgozunk, amelyeket admin felületeként használnak.

## Paraméterek {#parameters}

| Neve | Típusa | Leírás |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null, ha tovább kell haladni, bármi más érték esetén elkerüli a megsemmisítést. |
| $current_user | `false\|\WP_User` | Az aktuális felhasználó objektuma. |

### Since {#since}

- 2.0.11
### Source {#source}

Definíciója található [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) fájlban a 221-sorban.


## Returns {#returns}
