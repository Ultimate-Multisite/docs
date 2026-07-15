---
id: wu_bypass_unset_current_user
title: Lim - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Lim: wu_bypass_unset_current_user

Tso cai rau cov developers hla tau code uas unset current user.

Yog rov qab ib yam dab tsi uas tsis yog null ces yuav hla qhov unset ntawm current user uas tau nkag rau hauv lawm. Qhov no siv tau zoo hauv qee qhov xwm txheej, piv txwv li, thaum ua haujlwm nrog cov sub-sites uas raug siv ua cov nplooj tswj hwm.

## Cov Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null kom mus ntxiv, lwm yam dab tsi los xij yuav hla nws. |
| $current_user | `false\|\WP_User` | Qhov current user object. |

### Txij thaum {#since}

- 2.0.11
### Qhov chaw los {#source}

Tau txhais hauv [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) ntawm kab 221


## Rov qab tuaj {#returns}
