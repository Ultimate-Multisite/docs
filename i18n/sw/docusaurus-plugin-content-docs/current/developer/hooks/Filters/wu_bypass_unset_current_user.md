---
id: wu_bypass_unset_current_user
title: Filter - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

Inaruhusu watengenezaji kupuuza (bypass) sehemu ya kuifuta (unset) mtumiaji wa sasa.

Kurudisha kitu chochote tofauti na `null` kutapuuza kufuta mtumiaji anayelogged in sasa. Hii inaweza kuwa na manufaa katika baadhi ya hali, kwa mfano, tunaposhughulika na sub-sites ambazo zinatumika kama paneli za kiutawala.

## Viparametrika

| Jina | Aina | Maelezo |
|------|------|-------------|
| $null_or_bypass | `mixed` | `null` ikiwa unataka kuendelea, na chochote kingine kutapuuza. |
| $current_user | `false\|\WP_User` | Kituo cha mtumiaji wa sasa. |

### Tangu

- 2.0.11
### Chanzo

Imefafanuliwa katika [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) kwenye mstari wa 221

## Inarudisha
