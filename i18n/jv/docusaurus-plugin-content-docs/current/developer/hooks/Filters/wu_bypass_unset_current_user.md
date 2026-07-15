---
id: wu_bypass_unset_current_user
title: Saringan - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Saringan: wu_bypass_unset_current_user

Ngidini pangembang kanggo ngliwati kode mbusak pangguna saiki.

Yen mbalekake apa wae saliyane null, bakal ngliwati pambusakan pangguna saiki sing mlebu. Iki bisa migunani ing sawetara kahanan, contone, nalika nangani sub-situs sing digunakake minangka panel admin.

## Parameter {#parameters}

| Jeneng | Jinis | Katrangan |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null kanggo nerusake, apa wae saliyane kuwi kanggo ngliwati. |
| $current_user | `false\|\WP_User` | Objek pangguna saiki. |

### Wiwit {#since}

- 2.0.11
### Sumber {#source}

Ditetepake ing [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) ing baris 221


## Balikan {#returns}
