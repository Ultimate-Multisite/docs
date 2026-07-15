---
id: wu_bypass_unset_current_user
title: Filter - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

Omogućava programerima da zaobiđu kod koji uklanja trenutno korisnika.

Povratak bilo čega osim `null` će zaobići uklanjanje trenutno prijavljenog korisnika. Ovo može biti korisno u nekim scenarijima, na primjer, kada radite sa pod-sajtovima koji se koriste kao administrativni paneli.

## Parametri {#parameters}

| Ime | Tip | Opis |
|------|------|-------------|
| $null_or_bypass | `mixed` | `null` za nastavak, bilo što drugo za zaobilazak. |
| $current_user | `false\|\WP_User` | Objekt trenutnog korisnika. |

### Od {#since}

- 2.0.11
### Izvor {#source}

Definisano u [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) na liniji 221


## Vraća {#returns}
