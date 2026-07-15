---
id: wu_membership_post_renew
title: Aktion - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Aktion: wu_membership_post_renew

Wird nach der Verlängerung der Mitgliedschaft ausgelöst.

## Parameter {#parameters}

| Name | Typ | Beschreibung |
|------|------|-------------|
| $expiration | `string` | New expiration date to be set. |
| $membership_id | `int` | The ID of the membership. |
| $membership | `\Membership` | Membership object. |

### Seit {#since}

- 2.0
### Quelle {#source}

Definiert in [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) in Zeile 2235
