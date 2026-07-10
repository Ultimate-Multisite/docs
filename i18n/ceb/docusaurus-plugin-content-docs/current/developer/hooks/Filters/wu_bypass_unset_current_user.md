---
id: wu_bypass_unset_current_user
title: Salain - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Pagsala: wu_bypass_unset_current_user {#filter-wubypassunsetcurrentuser}

Tugoti ang mga developer nga molaktaw sa code nga nag-unset sa current user.

Ang pagbalik og bisan unsa gawas sa null molaktaw sa pag-unset sa current user nga naka-login. Mahimong mapuslanon kini sa pipila ka sitwasyon, pananglitan, kung nag-atubang sa mga ubos nga sityo nga gigamit isip mga panel sa tigdumala.

## Mga Parameter {#parameters}

| Ngalan | Matang | Deskripsyon |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null aron mopadayon, bisan unsa pa aron molaktaw niini. |
| $current_user | `false\|\WP_User` | Ang kasamtangang user object. |

### Sukad {#since}

- 2.0.11
### Tinubdan {#source}

Gidepina sa [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) sa linya 221


## Mga Gibalik {#returns}
