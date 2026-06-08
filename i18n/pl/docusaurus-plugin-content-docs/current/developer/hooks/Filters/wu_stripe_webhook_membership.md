---
id: wu_stripe_webhook_membership
title: Filtry - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filtr: wu_stripe_webhook_membership

Filtruje rekord członkostwa powiązany z tym webhookiem.

Ten filtr został wprowadzony z powodu potencjalnych konfliktów, które mogą wystąpić, gdy ten sam klient Stripe jest używany na różnych stronach.

## Parametry

| Nazwa | Typ | Opis |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Obiekt członkostwa. |
| $event | `\Stripe\Event` | Otrzymane zdarzenie. |

### Źródło

Zdefiniowany w [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) w linii 2035
