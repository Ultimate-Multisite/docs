---
id: wu_membership_post_cancel
title: Action - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Action: wu_membership_post_cancel

Utløses etter at medlemskapet er kansellert.

Dette utløser kansellerings-e-posten.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $membership_id | `int` | ID-en til medlemskapet. |
| $membership | `\WP_Ultimo\Models\Membership` | Medlemskaps-objektet. |

### Siden {#since}

- 2.0
### Kilde {#source}

Definert i [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) på linje 2290
