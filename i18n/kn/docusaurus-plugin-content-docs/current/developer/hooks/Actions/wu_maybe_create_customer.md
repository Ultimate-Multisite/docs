---
id: wu_maybe_create_customer
title: Action - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer

ಗ್ರಾಹಕನನ್ನು (customer) ಸೇರಿಸಿದಾಗ ಪ್ಲಗ್ಇನ್ ಅಭಿವರ್ಧಕರು ಹೆಚ್ಚುವರಿ ಕಾರ್ಯಗಳನ್ನು (additional stuff) ಮಾಡಲು ಅನುಮತಿಸುತ್ತದೆ.

ಉದಾಹರಣೆಗೆ, ಗ್ರಾಹಕನನ್ನು-ಬಳಕೆದಾರನಾಗಿ (user) ಮುಖ್ಯ ಸೈಟ್‌ಗೆ ಸೇರಿಸಲು ನಾವು ಇಲ್ಲಿ ಹುಕ್ಸ್ (hooks) ಅನ್ನು ಸೇರಿಸುತ್ತೇವೆ.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $customer | `\Customer` | ಬಹುಶಃ ರಚಿಸಲಾದ ಗ್ರಾಹಕ. |
| $checkout | `\Checkout` | ಪ್ರಸ್ತುತ ಚೆಕ್‌ಔಟ್ ಕ್ಲಾಸ್. |

### Since

- 2.0.0
### Source

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) ನಲ್ಲಿ 1156ನೇ ಸಾಲಿನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ
