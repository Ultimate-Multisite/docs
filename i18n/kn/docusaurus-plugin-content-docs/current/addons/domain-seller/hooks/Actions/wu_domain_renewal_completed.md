---
id: wu_domain_renewal_completed
title: Action - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

ಡೊಮೇನ್ ಯಶಸ್ವಿಯಾಗಿ ನವೀಕರಿಸಿದ ನಂತರ ಈ action ಕಾರ್ಯಗತವಾಗುತ್ತದೆ.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ನವೀಕರಣಕ್ಕೆ ಕಾರಣವಾದ ಪಾವತಿ (payment). |
| $renewal_data | `array&lt;string,mixed&gt;` | ನವೀಕರಣ ಮೆಟಾಡೇಟಾ (domain_name, years, customer_id, ಇತ್ಯಾದಿ). |
| $result | `array&lt;string,mixed&gt;` | ಹೊಸ expiry_date ಸೇರಿದಂತೆ ರಿಜಿಸ್ಟ್ರಾರ್‌ನಿಂದ ಮರಳಿ ಬಂದ ಕಚ್ಚಾ ಫಲಿತಾಂಶದ ಅರೇ. |

### Since

- 2.0.0
### Source

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) ಫೈಲ್‌ನ 594ನೇ ಸಾಲಿನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ.
