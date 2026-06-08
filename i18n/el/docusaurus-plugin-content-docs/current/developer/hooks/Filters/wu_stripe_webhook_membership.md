---
id: wu_stripe_webhook_membership
title: Φίλτρο - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

Φιλτράρει το καταχριστικό αρχείο μέλους που σχετίζεται με αυτό το webhook.

Αυτό το φίλτρο εισήχθη λόγω συγκρούσεων που μπορεί να προκύψουν όταν ο ίδιος πελάτης του Stripe χρησιμοποιείται σε διαφορετικά sites.

## Παράμετροι

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Το αντικείμενο του μέλους. |
| $event | `\Stripe\Event` | Το ontvangen γεγονός (event). |

### Πηγή

Ορίζεται στο [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) στην γραμμή 2035
