---
id: wu_membership_post_renew
title: Azione - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew

Si attiva dopo il rinnovo dell'abbonamento.

## Parameters

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $expiration | `string` | Nuova data di scadenza da impostare. |
| $membership_id | `int` | L'ID dell'abbonamento. |
| $membership | `\Membership` | Oggetto Membership. |

### Da

- 2.0
### Fonte

Defined in [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) at line 2235
