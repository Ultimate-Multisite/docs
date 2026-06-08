---
id: wu_stripe_webhook_membership
title: Filter - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

ಈ ವೆಬ್‌ಹೂಕ್‌ನೊಂದಿಗೆ ಸಂಬಂಧಿಸಿದ ಸದಸ್ಯತ್ವ ದಾಖಲೆಯನ್ನು (membership record) ಫಿಲ್ಟರ್ ಮಾಡುತ್ತದೆ.

ಒಂದೇ Stripe ಗ್ರಾಹಕನನ್ನು (customer) ಬೇರೆ ಬೇರೆ ಸೈಟ್‌ಗಳಲ್ಲಿ ಬಳಸಿದಾಗ ಸಂಭವಿಸಬಹುದಾದ ಸಂಘರ್ಷಗಳ (conflicts) ಕಾರಣದಿಂದಾಗಿ ಈ ಫಿಲ್ಟರ್ ಅನ್ನು ಸೇರಿಸಲಾಗಿದೆ.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | ಸದಸ್ಯತ್ವ ಆಬ್ಜೆಕ್ಟ್ (membership object). |
| $event | `\Stripe\Event` | ಸ್ವೀಕರಿಸಿದ ಘಟನೆ (event). |

### Source

[inc/gateways/class-base-stripe-gateway.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) ನಲ್ಲಿ 2035ನೇ ಸಾಲಿನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ.
