---
id: wu_domain_seller_process_purchase
title: Action - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase {#action-wudomainsellerprocesspurchase}

ಚೆಕ್‌ಔಟ್ ಪೂರ್ಣಗೊಂಡ ನಂತರ ಡೊಮೇನ್ ಖರೀದಿ ಪ್ರಕ್ರಿಯೆಗೊಳಿಸುವಾಗ ಇದು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ಪಾವತಿ ಆಬ್ಜೆಕ್ಟ್ (payment object). |
| $checkout_data | `array<string,mixed>` | ಸೈನ್-ಅಪ್ ಫಾರ್ಮ್‌ನಿಂದ ಬಂದ ಸಂಪೂರ್ಣ ಚೆಕ್‌ಔಟ್ ಡೇಟಾ. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) ನಲ್ಲಿ 246ನೇ ಸಾಲಿನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ.
