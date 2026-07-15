---
id: wu_stripe_webhook_membership
title: Fîltre - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

Tomara endamtiyê ya girêdayî vê webhookê difiltre dike.

Ev filter ji ber nakokiyên ku dikarin derkevin hate destnîşankirin, dema ku heman muşteriyê Stripe dikare li ser malperên cuda were bikaranîn.

## Parametre {#parameters}

| Nav | Cure | Rave |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Objeya endamtiyê. |
| $event | `\Stripe\Event` | Bûyera ku hatiye wergirtin. |

### Çavkanî {#source}

Di [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) de li rêza 2035 hatiye pênasekirin.
