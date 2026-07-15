---
id: wu_stripe_webhook_membership
title: ফিল্টার - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

এই webhook সৈতে জড়িত মেম্বৰশ্বিপ ৰেকৰ্ড ফিল্টাৰ কৰে।

এই ফিল্টাৰটো যোগ কৰা হৈছিল কাৰণ বিভিন্ন সাইটত একেটা Stripe কাস্টমৰ ব্যৱহাৰ কৰাৰ সময়ত সংঘাত (conflicts) হ'ব পাৰে।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | মেম্বৰশ্বিপ অবজেক্টটো। |
| $event | `\Stripe\Event` | পোৱা ইভেন্টটো। |

### Source {#source}

Defined in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) at line 2035
