---
id: wu_bypass_unset_current_user
title: Filtru - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filtru: wu_bypass_unset_current_user {#filter-wubypassunsetcurrentuser}

Jippermetti lill-iżviluppaturi jevitaw il-kodiċi li jneħħi l-utent attwali.

Jekk tirritorna xi ħaġa oħra għajr null, dan jevita t-tneħħija tal-utent attwali li jkun illoggjat. Dan jista’ jkun utli f’xi xenarji, pereżempju, meta tkun qed tittratta ma’ sub-siti li qed jintużaw bħala pannelli tal-amministrazzjoni.

## Parametri {#parameters}

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null biex tkompli, xi ħaġa oħra biex tevitah. |
| $current_user | `false\|\WP_User` | L-oġġett tal-utent attwali. |

### Minn {#since}

- 2.0.11
### Sors {#source}

Iddefinit f’[`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) fil-linja 221


## Jirritorna {#returns}
