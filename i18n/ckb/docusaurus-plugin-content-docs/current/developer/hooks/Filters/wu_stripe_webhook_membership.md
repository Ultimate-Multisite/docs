---
id: wu_stripe_webhook_membership
title: فلتەر - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

ئەو تۆماری ئەندامێتییە پاڵێو دەکات کە پەیوەندیدارە بەم webhook ـەوە.

ئەم filter ـە ناسێنرا بۆ ناکۆکییەکان کە لەوانەیە ڕووبدەن کاتێک هەمان کڕیاری Stripe لەسەر ماڵپەڕە جیاوازەکان بەکاربهێنرێت.

## پارامێتەرەکان

| ناو | جۆر | وەسف |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | ئۆبجێکتی ئەندامێتی. |
| $event | `\Stripe\Event` | ئەو ڕووداوەی وەرگیراوە. |

### سەرچاوە

پێناسەکراوە لە [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) لە هێڵی 2035
