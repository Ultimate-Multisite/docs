---
id: wu_bypass_unset_current_user
title: Sía - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Sía: wu_bypass_unset_current_user {#filter-wubypassunsetcurrentuser}

Leyfir forriturum að fara framhjá kóðanum sem aftengir núverandi notanda.

Ef skilað er einhverju öðru en null verður farið framhjá aftengingu núverandi innskráðs notanda. Þetta getur verið gagnlegt í sumum aðstæðum, til dæmis þegar unnið er með undirvefi sem eru notaðir sem stjórnborð.

## Færibreytur {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null til að halda áfram, hvað sem er annað til að fara framhjá því. |
| $current_user | `false\|\WP_User` | Núverandi notandahlutur. |

### Frá {#since}

- 2.0.11
### Uppruni {#source}

Skilgreint í [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) í línu 221


## Skilar {#returns}
