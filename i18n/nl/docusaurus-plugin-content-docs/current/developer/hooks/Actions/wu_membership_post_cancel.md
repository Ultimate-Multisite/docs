---
id: wu_membership_post_cancel
title: Actie - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Action: wu_membership_post_cancel {#action-wumembershippostcancel}

Triggers after the membership is cancelled.

This triggers the cancellation email.

## Parameters {#parameters}

| Naam | Type | Beschrijving |
|------|------|-------------|
| $membership_id | `int` | De ID van het lidmaatschap. |
| $membership | `\WP_Ultimo\Models\Membership` | Membership object. |

### Sinds {#since}

- 2.0

### Bron {#source}

Gedefinieerd in [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) op regel 2290
