---
id: wu_bypass_unset_current_user
title: Filter - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

Developerlərə cari istifadəçini silmədən (unset) keçməyə imkan verir.

`null` dışında istənilən dəyər qaytarmaq, daxil olunan cari istifadəçinin silinməsini (unset) əngəlləyəcək. Bu, məsələn, admin panelları kimi istifadə olunan alt saytlərlə işləyərkən faydalı ola bilər.

## Parametrlər {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | Davam etmək üçün `null`, əks halda isə keçməyə (bypass) imkan verir. |
| $current_user | `false\|\WP_User` | Cari istifadəçi obyekti. |

### Since {#since}

- 2.0.11
### Source {#source}

Defined in [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) at line 221


## Returns {#returns}
