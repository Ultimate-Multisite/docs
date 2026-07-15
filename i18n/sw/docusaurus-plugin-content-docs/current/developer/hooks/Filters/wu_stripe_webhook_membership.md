---
id: wu_stripe_webhook_membership
title: Kichujio - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

Hii inaweka kichujio (filter) kwenye rekodi ya ushiri (membership) inayohusishwa na webhook hii.

Kichujio hiki kimeanzishwa kutokana na migogoro ambayo inaweza kutokea wakati mteja mmoja wa Stripe anatumika kwenye tovuti tofauti.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Kichombo cha ushiri (membership object). |
| $event | `\Stripe\Event` | Tukio (event) lililopokelewa. |

### Source {#source}

Kimefafanuliwa katika [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) kwenye mstari wa 2035
