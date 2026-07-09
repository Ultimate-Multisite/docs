---
id: wu_membership_post_cancel
title: Acció - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Aquesta acció: wu_membership_post_cancel {#action-wumembershippostcancel}

Es activa després que s canceli la membresía.

Aquesta activació dispara l'email de cancel·lació.

## Paràmetres {#parameters}

| Nom | Tip | Descripció |
|------|------|-------------|
| $membership_id | `int` | L'ID de la membresía. |
| $membership | `\WP_Ultimo\Models\Membership` | Object de membresía. |

### Des de {#since}

- 2.0
### Font {#source}

Definida en [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) a la línia 2290
