---
id: wu_bypass_unset_current_user
title: Pansala - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

Payagan ang mga developer na i-bypass ang code na nag-u-unset sa kasalukuyang user.

Ang pagbabalik ng anumang bagay maliban sa null ay magba-bypass sa pag-unset ng kasalukuyang user na naka-log in. Maaari itong maging kapaki-pakinabang sa ilang sitwasyon, halimbawa, kapag humaharap sa mga sub-site na ginagamit bilang mga admin panel.

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null para magpatuloy, anumang iba pa para i-bypass ito. |
| $current_user | `false\|\WP_User` | Ang object ng kasalukuyang user. |

### Mula noong {#since}

- 2.0.11
### Pinagmulan {#source}

Tinukoy sa [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) sa linya 221


## Mga Ibinabalik {#returns}
