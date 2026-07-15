---
id: wu_stripe_webhook_membership
title: Muyunguruzo - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Akayunguruzo: wu_stripe_webhook_membership

Kayungurura inyandiko ya membership ijyanye n’iyi webhook.

Aka kayunguruzo kinjijwe kubera amakimbirane ashobora kuvuka igihe umukiriya umwe wa Stripe ashobora gukoreshwa ku mbuga zitandukanye.

## Ibigenderwaho {#parameters}

| Izina | Ubwoko | Ibisobanuro |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Ikintu cya membership. |
| $event | `\Stripe\Event` | Icyabaye cyakiriwe. |

### Inkomoko {#source}

Byasobanuwe muri [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) ku murongo wa 2035
