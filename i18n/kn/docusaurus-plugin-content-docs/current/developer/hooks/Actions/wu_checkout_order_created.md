---
id: wu_checkout_order_created
title: Action - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

ಚೆಕ್‌ಔಟ್ ಆರ್ಡರ್ ಸಂಪೂರ್ಣವಾಗಿ ಜೋಡಿಸಿದ ನಂತರ ಇದು ಕಾರ್ಯಗತವಾಗುತ್ತದೆ.

ಸ್ವತಂತ್ರ ಬಿಲ್ಲಿಂಗ್ ಚಕ್ರಗಳನ್ನು ಹೊಂದಿರುವ ಉತ್ಪನ್ನಗಳಿಗೆ ثೇಕಂದ್ರೀಯ ಸದಸ್ಯತ್ವಗಳನ್ನು (secondary memberships) ರಚಿಸಲು ಆಡ್-ಆನ್‌ಗಳು ಇದನ್ನು ಬಳಸಬಹುದು.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | ಕಾರ್ಟ್/ಆರ್ಡರ್ ಆಬ್ಜೆಕ್ಟ್. |
| $customer | `\WP_Ultimo\Models\Customer` | ಗ್ರಾಹಕ. |
| $membership | `\WP_Ultimo\Models\Membership` | ಪ್ರಾಥಮಿಕ ಸದಸ್ಯತ್ವ. |
| $payment | `\WP_Ultimo\Models\Payment` | ಪಾವತಿ. |

### Since

- 2.5.0
### Source

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) ನಲ್ಲಿ 891ನೇ ಸಾಲಿನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ.
