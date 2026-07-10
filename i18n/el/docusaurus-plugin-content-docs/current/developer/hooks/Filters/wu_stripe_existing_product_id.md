---
id: wu_stripe_existing_product_id
title: Φίλτρο - wu_stripe_existing_product_id
sidebar_label: wu_stripe_existing_product_id
_i18n_hash: 92eb984fe341b1ce2d56ea2eccff8100
---
# Filter: wu_stripe_existing_product_id {#filter-wustripeexistingproductid}

Φιλτράρει το ID του προϊόντος που πρέπει να ελεγχθεί. Εάν αυτό υπάρχει, η νέα συνδρομή θα χρησιμοποιήσει αυτό το προϊόν.

## Παράμετροι {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $product_id | `string` | Το ID του προϊόντος Stripe που πρέπει να ελεγχθεί. |
| $name | `string` | Το όνομα του προϊόντος. |

### Πηγή {#source}

Ορίζεται στο [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2741) στην γραμμή 2741
