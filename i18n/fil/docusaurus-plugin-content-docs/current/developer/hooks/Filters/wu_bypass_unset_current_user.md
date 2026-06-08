---
id: wu_bypass_unset_current_user
title: Filter - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

Pinapayagan nito ang mga developer na i-bypass ang code na nag-a-unset ng current user.

Kapag nagbalik (return) ng anumang bagay maliban sa `null`, maii-bypass nito ang pag-unset ng kasalukuyang user na naka-log in. Makakatulong ito sa ilang sitwasyon, halimbawa, kapag nagtatrabaho ka sa mga sub-site na ginagamit bilang admin panels.

## Mga Parameter

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | Kung `null`, magpapatuloy lang; kung iba pa, maii-bypass ang pag-unset. |
| $current_user | `false\|\WP_User` | Ang object ng kasalukuyang user. |

### Simula

- 2.0.11
### Pinagmulan

Defined in [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) at line 221


## Mga Ibinabalik
