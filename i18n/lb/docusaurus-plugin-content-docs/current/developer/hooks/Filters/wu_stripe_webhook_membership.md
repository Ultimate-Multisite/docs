---
id: wu_stripe_webhook_membership
title: Filter - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

Filtert de Memberschaftsdatensatz, dee mat dësem Webhook verbonnen ass.

Dëse Filter gouf agefouert wéinst Konflikter, déi entstoe kënnen, wann dee selwechte Stripe-Client op verschiddene Websäite benotzt gëtt.

## Parameteren

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | D'Memberschaftsobjet. |
| $event | `\Stripe\Event` | Dat empfaangent Evenement. |

### Quell

Definéiert an [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) op der Linn 2035
