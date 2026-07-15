---
id: wu_bypass_unset_current_user
title: Saringan - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Saringan: wu_bypass_unset_current_user

Ngidinan pamekar pikeun ngaliwatan kode mupus setélan pamaké ayeuna.

Mulangkeun naon waé salian ti null bakal ngaliwatan mupus setélan pamaké ayeuna anu keur asup. Ieu tiasa mangpaat dina sababaraha skénario, contona, nalika ngurus sub-situs anu dipaké salaku panel admin.

## Parameter {#parameters}

| Ngaran | Jinis | Pedaran |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null pikeun neruskeun, naon waé anu séjén pikeun ngaliwatanana. |
| $current_user | `false\|\WP_User` | Objék pamaké ayeuna. |

### Ti saprak {#since}

- 2.0.11
### Sumber {#source}

Ditetepkeun dina [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) dina garis 221


## Mulangkeun {#returns}
