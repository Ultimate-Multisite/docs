---
id: wu_membership_pre_renew
title: Azione - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Azione: wu_membership_pre_renew

Scatta prima del rinnovo dell'abbonamento.

## Parametri

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $expiration | `string` | Nuova data di scadenza da impostare. |
| $membership_id | `int` | L'ID dell'abbonamento. |
| $membership | `\Membership` | Oggetto Membership. |

### Dal

- 2.0
### Fonte

Definito in [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) at line 2204
