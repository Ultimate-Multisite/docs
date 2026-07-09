---
id: wu_bypass_unset_current_user
title: Filtar - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user {#filter-wubypassunsetcurrentuser}

Omogućuje developerima da zaobiđu kod za poništavanje trenutačnog korisnika.

Vraćanje bilo čega osim null zaobići će poništavanje trenutačno prijavljenog korisnika. To može biti korisno u nekim scenarijima, na primjer, pri radu s pod-siteovima koji se koriste kao administratorske ploče.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null za nastavak, bilo što drugo za zaobilaženje. |
| $current_user | `false\|\WP_User` | Objekt trenutačnog korisnika. |

### Od verzije {#since}

- 2.0.11
### Izvor {#source}

Definirano u [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) u retku 221


## Vraća {#returns}
