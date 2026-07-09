---
id: wu_membership_post_cancel
title: Aktion - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Aktion: wu_membership_post_cancel {#action-wumembershippostcancel}

Ausgelöst, nachdem die Mitgliedschaft gekündigt wurde.

Dies löst die Kündigungs-E-Mail aus.

## Parameter {#parameters}

| Name | Typ | Beschreibung |
|------|------|--------------|
| $membership_id | `int` | Die ID der Mitgliedschaft. |
| $membership | `\WP_Ultimo\Models\Membership` | Mitgliedschaftsobjekt. |

### Seit {#since}

- 2.0

### Quelle {#source}

Definiert in [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) in Zeile 2290
