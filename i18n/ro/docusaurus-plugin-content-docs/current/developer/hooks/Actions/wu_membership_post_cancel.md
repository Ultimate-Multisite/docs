---
id: wu_membership_post_cancel
title: Action - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Acțiune: wu_membership_post_cancel

Se declanșează după ce membruștea este anulată.

Acesta declanșează emailul de anulare.

## Parametri

| Nume | Tip | Descriere |
|------|------|-------------|
| $membership_id | `int` | ID-ul membruștei. |
| $membership | `\WP_Ultimo\Models\Membership` | Obiectul membruștei. |

### Disponibil de

- 2.0
### Sursă

Definit în [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) la linia 2290
