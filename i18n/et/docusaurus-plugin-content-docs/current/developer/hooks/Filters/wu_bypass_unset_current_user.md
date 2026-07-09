---
id: wu_bypass_unset_current_user
title: Filter - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user {#filter-wubypassunsetcurrentuser}

Võimalda arendajatel tühistatud praeguse kasutaja koodist mööda minna.

Millegi muu kui null tagastamine läheb mööda praegu sisse logitud kasutaja tühistamisest. See võib olla kasulik mõnes olukorras, näiteks kui tegeletakse alamsaitidega, mida kasutatakse admin-paneelidena.

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null, et jätkata; mis tahes muu väärtus, et sellest mööda minna. |
| $current_user | `false\|\WP_User` | Praeguse kasutaja objekt. |

### Alates {#since}

- 2.0.11
### Allikas {#source}

Määratletud failis [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) real 221


## Tagastab {#returns}
