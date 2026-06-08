---
id: wu_stripe_webhook_membership
title: Filter - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

इस वेबहुक से जुड़ा सदस्यता रिकॉर्ड (membership record) फ़िल्टर करता है।

यह फ़िल्टर इसलिए जोड़ा गया था क्योंकि जब एक ही Stripe ग्राहक का उपयोग अलग-अलग साइटों पर किया जा सकता है, तो टकराव (conflicts) उत्पन्न हो सकते हैं।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | सदस्यता ऑब्जेक्ट। |
| $event | `\Stripe\Event` | प्राप्त इवेंट। |

### Source

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) में लाइन 2035 पर परिभाषित।
