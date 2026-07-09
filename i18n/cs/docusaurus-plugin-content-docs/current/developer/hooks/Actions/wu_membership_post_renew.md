---
id: wu_membership_post_renew
title: Akce - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew {#action-wumembershippostrenew}

Spouští se po obnovení členství.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $expiration | `string` | Nový datum vypršení, které má být nastaveno. |
| $membership_id | `int` | ID členství. |
| $membership | `\Membership` | Objekt členství. |

### Od {#since}

- 2.0
### Zdroj {#source}

Definováno v [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) na řádku 2235
