---
id: wu_stripe_webhook_membership
title: Filter - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

या वेबहुकशी (webhook) संबंधित मेंबरशिप रेकॉर्ड फिल्टर करतो.

जेव्हा एकाच Stripe ग्राहक (customer) चा वापर वेगवेगळ्या साईट्सवर केला जाऊ शकतो, तेव्हा संघर्ष (conflicts) होऊ शकतात. या समस्येमुळे हा फिल्टर जोडण्यात आला आहे.

## पॅरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | मेंबरशिप ऑब्जेक्ट. |
| $event | `\Stripe\Event` | प्राप्त झालेले इव्हेंट. |

### स्रोत {#source}

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) या फाईलमध्ये लाइन 2035 वर परिभाषित केले आहे.
