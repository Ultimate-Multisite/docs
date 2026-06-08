---
id: wu_handle_customer_meta_fields
title: Action - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields

ಪ್ಲಗ್ಇನ್ developers ಗಳಿಗೆ ಅಗತ್ಯವಿದ್ದರೆ, ಅವರು ಮೆಟಾ ಡೇಟಾವನ್ನು ವಿಭಿನ್ನ ವಿಧಾನಗಳಲ್ಲಿ ಉಳಿಸಲು ಇದು ಅವಕಾಶ ನೀಡುತ್ತದೆ.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | ಮೆಟಾ ಫೀಲ್ಡ್‌ಗಳ ಪಟ್ಟಿ, ಇದು key => value ರಚನೆಯಲ್ಲಿರುತ್ತದೆ. |
| $customer | `\Customer` | Ultimate Multisite ಗ್ರಾಹಕ ಆಬ್ಜೆಕ್ಟ್. |
| $checkout | `\Checkout` | ಚೆಕ್‌ಔಟ್ ಕ್ಲಾಸ್. |

### Since

- 2.0.0
### Source

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) at line 1211
