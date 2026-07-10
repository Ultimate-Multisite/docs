---
id: wu_membership_post_renew
title: Azione - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew {#action-wumembershippostrenew}

Si attiva dopo il rinnovo della membership.

## Parametri {#parameters}

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $expiration | `string` | New expiration date to be set. |
| $membership_id | `int` | The ID of the membership. |
| $membership | `\Membership` | Membership object. |

### Dalla versione {#since}

- 2.0
### Sorgente {#source}

Definito in [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) alla riga 2235
