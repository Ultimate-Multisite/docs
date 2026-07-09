---
id: wu_stripe_webhook_membership
title: ფილტრი - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# ფილტრი: wu_stripe_webhook_membership

ფილტრავს ამ webhook-თან დაკავშირებულ membership ჩანაწერს.

ეს ფილტრი დაემატა იმ კონფლიქტების გამო, რომლებიც შეიძლება წარმოიშვას, როდესაც ერთი და იგივე Stripe მომხმარებელი სხვადასხვა საიტებზე გამოიყენება.

## პარამეტრები

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | membership ობიექტი. |
| $event | `\Stripe\Event` | მიღებული მოვლენა. |

### წყარო

განსაზღვრულია [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035)-ში, ხაზზე 2035
