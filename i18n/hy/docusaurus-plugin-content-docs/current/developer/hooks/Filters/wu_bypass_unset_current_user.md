---
id: wu_bypass_unset_current_user
title: Զտիչ - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Զտիչ: wu_bypass_unset_current_user

Թույլ է տալիս մշակողներին շրջանցել ընթացիկ օգտատիրոջ unset կոդը։

null-ից տարբեր որևէ բան վերադարձնելը կշրջանցի մուտք գործած ընթացիկ օգտատիրոջ unset գործողությունը։ Սա կարող է օգտակար լինել որոշ սցենարներում, օրինակ՝ երբ գործ ունեք ենթակայքերի հետ, որոնք օգտագործվում են որպես ադմինիստրատիվ վահանակներ։

## Պարամետրեր

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null՝ շարունակելու համար, ցանկացած այլ բան՝ դա շրջանցելու համար։ |
| $current_user | `false\|\WP_User` | Ընթացիկ օգտատիրոջ օբյեկտը։ |

### Սկսած

- 2.0.11
### Աղբյուր

Սահմանված է [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221)-ում՝ 221-րդ տողում


## Վերադարձնում է
