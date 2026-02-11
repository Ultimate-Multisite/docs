---
id: wu_membership_post_renew
title: Aktion - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew

Auslöst nach der Verlängerung der Mitgliedschaft.

## Parameter

| Name | Typ | Beschreibung |
|------|------|-------------|
| $expiration | `string` | Neues Ablaufdatum, das gesetzt werden soll. |
| $membership_id | `int` | Die ID der Mitgliedschaft. |
| $membership | `\Membership` | Mitgliedschaftsobjekt. |

### Seit

- 2.0

### Quelle

Definiert in [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) at line 2235
