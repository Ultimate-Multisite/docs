---
id: wu_handle_user_meta_fields
title: ಕ್ರಿಯೆ - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

ಪ್ಲಗ್ಇನ್ ಅಭಿವರ್ಧಕರು ತಮ್ಮ ಅಗತ್ಯವಿದ್ದರೆ ಬಳಕೆದಾರರ ಮೆಟಾ ಡೇಟಾವನ್ನು (user meta data) ವಿಭಿನ್ನ ರೀತಿಯಲ್ಲಿ ಉಳಿಸಲು ಇದು ಅನುಮತಿಸುತ್ತದೆ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | ಕೀ => ಮೌಲ್ಯದ ರಚನೆಯಲ್ಲಿರುವ ಮೆಟಾ ಫೀಲ್ಡ್‌ಗಳ ಪಟ್ಟಿ (list of meta fields, key => value structured). |
| $user | `\WP_User` | ವರ್ಡ್ಪ್ರೆಸ್ ಬಳಕೆದಾರರ ಆಬ್ಜೆಕ್ಟ್ (WordPress user object). |
| $customer | `\Customer` | ಅಲ್ಟಿಮೇಟ್ ಮಲ್ಟಿಸಿಟ್ ಕಸ್ಟಮರ್ ಆಬ್ಜೆಕ್ಟ್ (Ultimate Multisite customer object). |
| $checkout | `\Checkout` | ಚೆಕ್‌ಔಟ್ ಕ್ಲಾಸ್ (checkout class). |

### Since {#since}

- 2.0.4
### Source {#source}

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) at line 1244
