---
id: wu_bypass_unset_current_user
title: Filter - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

Laat ontwikkelaars die kode wat die huidige gebruiker onstel, omseil.

Om enigiets anders as null terug te gee, sal die onstelling van die aangemelde huidige gebruiker omseil. Dit kan nuttig wees in sekere scenario's, byvoorbeeld wanneer jy met sub-sites te doen het wat as bestuurpanele gebruik word.

## Parameters

| Name | Type | Beskrywing |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null om voort te gaan, en enigiets anders om dit te omseil. |
| $current_user | `false\|\WP_User` | Die huidige gebruiker-objek. |

### Since

- 2.0.11
### Source

Bepaald in [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) by lyn 221


## Returns
