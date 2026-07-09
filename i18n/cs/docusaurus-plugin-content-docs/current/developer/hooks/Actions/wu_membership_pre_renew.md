---
id: wu_membership_pre_renew
title: Akce - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Akce: wu_membership_pre_renew {#action-wumembershipprerenew}

Spouští se před obnovou členství.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $expiration | `string` | Nový datum vypršení, které má být nastaveno. |
| $membership_id | `int` | ID členství. |
| $membership | `\Membership` | Objekt členství. |

### Od {#since}

- 2.0
### Zdroj {#source}

Definováno v [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) na řádku 2204
