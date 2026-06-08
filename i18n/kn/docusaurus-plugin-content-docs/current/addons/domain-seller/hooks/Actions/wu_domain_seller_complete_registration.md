---
id: wu_domain_seller_complete_registration
title: ಕ್ರಿಯೆ - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

ಪಾವತಿಯ ಸ್ಥಿತಿ ಬದಲಾದಾಗ, ಮತ್ತು ಆ ಸ್ಥಿತಿಯು ಡೊಮೇನ್ ನೋಂದಣಿಯನ್ನು ಪ್ರಾರಂಭಿಸಲು ಕಾರಣವಾಗಬೇಕಾದಾಗ ಈ ಆಕ್ಷನ್ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.

## ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ಪಾವತಿ ಆಬ್ಜೆಕ್ಟ್. |
| $old_status | `string` | ಬದಲಾವಣೆಗೆ ಮೊದಲು ಇದ್ದ ಹಿಂದಿನ ಪಾವತಿ ಸ್ಥಿತಿ. |

### ಯಾವಾಗ ಲಭ್ಯ

- 2.0.0
### ಮೂಲ

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) ನಲ್ಲಿ 266ನೇ ಸಾಲಿನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ.
