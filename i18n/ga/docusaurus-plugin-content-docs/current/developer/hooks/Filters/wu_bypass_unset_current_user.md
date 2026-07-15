---
id: wu_bypass_unset_current_user
title: Scagaire - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Scagaire: wu_bypass_unset_current_user

Lig d’fhorbróirí an cód chun an t-úsáideoir reatha a dhíshocrú a sheachaint.

Má fhilleann aon rud seachas null, seachnófar díshocrú an úsáideora reatha atá logáilte isteach. D’fhéadfadh sé seo a bheith úsáideach i gcásanna áirithe, mar shampla, agus fo-láithreáin á láimhseáil atá á n-úsáid mar phainéil riaracháin.

## Paraiméadair {#parameters}

| Ainm | Cineál | Cur síos |
|------|------|-------------|
| $null_or_bypass | `mixed` | Null chun leanúint ar aghaidh, aon rud eile chun é a sheachaint. |
| $current_user | `false\|\WP_User` | Oibiacht an úsáideora reatha. |

### Ó shin {#since}

- 2.0.11
### Foinse {#source}

Sainithe in [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) ag líne 221


## Filleann {#returns}
