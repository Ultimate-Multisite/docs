---
id: wu_stripe_webhook_membership
title: පෙරහන - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# පෙරහන: wu_stripe_webhook_membership

මෙම webhook එකට සම්බන්ධ සාමාජිකත්ව වාර්තාව පෙරහන් කරයි.

එකම Stripe පාරිභෝගිකයා විවිධ අඩවිවල භාවිත විය හැකි විට ඇතිවිය හැකි ගැටුම් නිසා මෙම පෙරහන හඳුන්වා දෙන ලදී.

## පරාමිතීන්

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | සාමාජිකත්ව වස්තුව. |
| $event | `\Stripe\Event` | ලැබුණු සිදුවීම. |

### මූලාශ්‍රය

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) තුළ 2035 වන පේළියේ නිර්වචනය කර ඇත.
