---
id: wu_bypass_unset_current_user
title: Filtras - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filtras: wu_bypass_unset_current_user

Leidžia kūrėjams apeiti dabartinio vartotojo unset kodą.

Grąžinus bet ką, išskyrus null, bus apeitas šiuo metu prisijungusio dabartinio vartotojo unset. Tai gali būti naudinga kai kuriais scenarijais, pavyzdžiui, dirbant su sub-site, kurios naudojamos kaip administravimo skydeliai.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null, kad būtų tęsiama, bet kas kita – kad tai būtų apeita. |
| $current_user | `false\|\WP_User` | Dabartinio vartotojo objektas. |

### Nuo {#since}

- 2.0.11
### Šaltinis {#source}

Apibrėžta [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) 221 eilutėje


## Grąžina {#returns}
