---
id: wu_stripe_webhook_membership
title: Shaandho - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Shaandheeye: wu_stripe_webhook_membership

Wuxuu shaandheeyaa diiwaanka xubinnimada ee la xidhiidha webhook-kan.

Shaandheeyahan waxaa loo soo bandhigay sababo la xidhiidha is-khilaafyo iman kara marka isla Stripe customer-ka lagu isticmaalo goobo kala duwan.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Shayga xubinnimada. |
| $event | `\Stripe\Event` | Dhacdada la helay. |

### Isha {#source}

Waxaa lagu qeexay [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) safka 2035
