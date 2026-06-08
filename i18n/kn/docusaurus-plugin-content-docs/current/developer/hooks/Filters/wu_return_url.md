---
id: wu_return_url
title: Filter - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

ಚೆಕ್‌ಔಟ್ ಪ್ರಕ್ರಿಯೆಗಳು ಮುಗಿದ ನಂತರ ಬಳಸುವ ಗೇಟ್‌ವೇ ರಿಟರ್ನ್ URL ಅನ್ನು ಬದಲಾಯಿಸಲು ಇದು developers‌ಗಳಿಗೆ ಅನುಮತಿಸುತ್ತದೆ.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | ಪ್ರಕ್ರಿಯೆಯ ನಂತರ ಮರುನಿರ್ದೇಶನ (redirect) ಆಗಬೇಕಾದ URL. |
| $gateway | `self` | ಗೇಟ್‌ವೇದ ಉದಾಹರಣೆ (instance). |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite ಪಾವತಿ ಉದಾಹರಣೆ (instance). |
| $cart | `\WP_Ultimo\Checkout\Cart` | ಪ್ರಸ್ತುತ Ultimate Multisite cart ಆರ್ಡರ್. |

### Since

- 2.0.20
### Source

Defined in [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) at line 683


## Returns
