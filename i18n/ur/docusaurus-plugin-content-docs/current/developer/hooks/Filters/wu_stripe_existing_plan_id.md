---
id: wu_stripe_existing_plan_id
title: فلٹر - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id

اس فلٹر سے اس پلان کی ID کو فلٹر کیا جاتا ہے جسے چیک کیا جانا ہے۔ اگر یہ ID موجود ہے، تو نیا سبسکرپشن اسی پلان کا استعمال کرے گا۔

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $plan_id | `string` | اس Stripe پلان کی ID جو چیک کی جا رہی ہے۔ |
| $membership_level | `object` | ممبرشپ لیول کا آبجیکٹ۔ |

### Source {#source}

Defined in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) at line 2653
