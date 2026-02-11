---
id: wu_membership_pre_renew
title: Aktion - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew

Auslöst vor der Verlängerung der Mitgliedschaft.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Neues Ablaufdatum, das gesetzt werden soll. |
| $membership_id | `int` | Die ID der Mitgliedschaft. |
| $membership | `\Membership` | Mitgliedschaftsobjekt. |

### Since

- 2.0
### Source

Definiert in [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) in Zeile 2204
