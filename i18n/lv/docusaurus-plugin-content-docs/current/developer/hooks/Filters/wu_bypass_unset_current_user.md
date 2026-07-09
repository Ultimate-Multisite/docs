---
id: wu_bypass_unset_current_user
title: Filtrs - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filtrs: wu_bypass_unset_current_user

Ļauj izstrādātājiem apiet pašreizējā lietotāja atiestatīšanas kodu.

Atgriežot jebko citu, izņemot null, tiks apieta pašreizējā pieslēgtā lietotāja atiestatīšana. Tas var būt noderīgi dažos scenārijos, piemēram, strādājot ar apakšvietnēm, kas tiek izmantotas kā administratora paneļi.

## Parametri

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null, lai turpinātu; jebkas cits, lai to apietu. |
| $current_user | `false\|\WP_User` | Pašreizējā lietotāja objekts. |

### Kopš

- 2.0.11
### Avots

Definēts [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) 221. rindā


## Atgriež
