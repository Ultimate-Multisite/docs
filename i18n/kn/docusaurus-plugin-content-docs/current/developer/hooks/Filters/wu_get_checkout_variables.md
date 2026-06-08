---
id: wu_get_checkout_variables
title: Filter - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables

ಪ್ಲಗ್ಇನ್ developers-ಗಳು ಚೆಕ್‌ಔಟ್ ಪುಟದ ಪೂರ್ವ-ಸೇಟ್‌ಗಳನ್ನು (pre-sets) ಫಿಲ್ಟರ್ ಮಾಡಲು ಈ ಫಂಕ್ಷನ್ ಅನುಮತಿಸುತ್ತದೆ.

ಎಚ್ಚರ ವಹಿಸಿ, ಇಲ್ಲಿ ಕೀಗಳು (keys) ತಪ್ಪಿದರೆ, ಫ್ರಂಟ್-ಎಂಡ್‌ನಲ್ಲಿ ಚೆಕ್‌ಔಟ್ ಸಂಪೂರ್ಣವಾಗಿ ಕೆಡಬಹುದು.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | ಸ್ಥಳೀಕರಿಸಿದ ವೇರಿಯೇಬಲ್‌ಗಳು (Localized variables). |
| $checkout | `\Checkout` | ಚೆಕ್‌ಔಟ್ ಕ್ಲಾಸ್ (The checkout class). |

### Since

- 2.0.0
### Source

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) at line 1970


## Returns
ಹೊಸ ವೇರಿಯೇಬಲ್‌ಗಳ ಅರೇ (array).
