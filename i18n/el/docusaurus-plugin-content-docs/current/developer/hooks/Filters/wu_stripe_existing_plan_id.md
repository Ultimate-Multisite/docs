---
id: wu_stripe_existing_plan_id
title: Φίλτρο - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id

Αυτό το φίλτρο ελέγχει το ID του πακέτου που πρέπει να ελεγχθεί. Αν αυτό το ID υπάρχει, η νέα συνδρομή θα χρησιμοποιήσει αυτό το πακέτο.

## Παράμετροι {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $plan_id | `string` | Το ID του πακέτου Stripe που πρέπει να ελεγχθεί. |
| $membership_level | `object` | Αντικείμενο επιπέδου συνδρομητή. |

### Source {#source}

Ορίζεται στο [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) στην γραμμή 2653.
