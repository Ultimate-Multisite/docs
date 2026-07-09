---
id: wu_stripe_webhook_membership
title: سۈزگۈچ - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# سۈزگۈچ: wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

بۇ webhook بىلەن باغلانغان ئەزالىق خاتىرىسىنى سۈزۈپ بېرىدۇ.

بۇ سۈزگۈچ ئوخشاش Stripe خېرىدارى ئوخشىمىغان تور بېكەتلەردە ئىشلىتىلگەندە يۈز بېرىشى مۇمكىن بولغان توقۇنۇشلار سەۋەبىدىن كىرگۈزۈلگەن.

## پارامېتىرلار {#parameters}

| نامى | تۈرى | چۈشەندۈرۈش |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | ئەزالىق ئوبيېكتى. |
| $event | `\Stripe\Event` | قوبۇل قىلىنغان ھادىسە. |

### مەنبە {#source}

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) ئىچىدە 2035-قۇردا بەلگىلەنگەن.
