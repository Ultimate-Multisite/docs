---
id: wu_stripe_webhook_membership
title: फिल्टर - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

यस webhook सँग सम्बन्धित सदस्यता अभिलेखलाई फिल्टर गर्छ।

यो filter एउटै Stripe ग्राहक फरक साइटहरूमा प्रयोग हुँदा उत्पन्न हुन सक्ने द्वन्द्वहरूका कारण प्रस्तुत गरिएको थियो।

## प्यारामिटरहरू {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | सदस्यता object। |
| $event | `\Stripe\Event` | प्राप्त गरिएको event। |

### स्रोत {#source}

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) मा line 2035 मा परिभाषित गरिएको
