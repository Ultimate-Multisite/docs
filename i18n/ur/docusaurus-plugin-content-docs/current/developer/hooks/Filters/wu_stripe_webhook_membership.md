---
id: wu_stripe_webhook_membership
title: فلٹر - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

یہ فلٹر اس ویب ہک سے منسلک ممبرشپ ریکارڈ کو فلٹر کرتا ہے۔

یہ فلٹر اس لیے شامل کیا گیا تھا کہ جب ایک ہی Stripe customer کو مختلف سائٹس پر استعمال کیا جائے تو ممکنہ طور پر پیدا ہونے والے ٹکراؤ (conflicts) کو حل کیا جا سکے۔

## پیرامیٹرز (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | ممبرشپ آبجیکٹ۔ |
| $event | `\Stripe\Event` | موصول ہونے والا ایونٹ۔ |

### ماخذ (Source) {#source}

یہ [inc/gateways/class-base-stripe-gateway.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) میں لائن 2035 پر ڈیفائن کیا گیا ہے۔
