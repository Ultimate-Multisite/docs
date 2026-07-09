---
id: wu_membership_post_cancel
title: Handling - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Action: wu_membership_post_cancel

Udløses efter medlemskabet er annulleret.

Dette udløser annullerings-e-mailen.

## Parametre

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $membership_id | `int` | ID'et for medlemskabet. |
| $membership | `\WP_Ultimo\Models\Membership` | Medlemskabsobjekt. |

### Siden

- 2.0
### Kilde

Defineret i [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) på linje 2290
