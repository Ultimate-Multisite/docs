---
id: wu_domain_registration_completed
title: ಕ್ರಿಯೆ - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed {#action-wudomainregistrationcompleted}

ಡೊಮೇನ್ ಯಶಸ್ವಿಯಾಗಿ ನೋಂದಾಯಿಸಿದ ನಂತರ ಈ ಆಕ್ಷನ್ (Action) déclares ಆಗುತ್ತದೆ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ನೋಂದಣಿಗೆ ಕಾರಣವಾದ ಪಾವತಿ (payment) ವಿವರ. |
| $registration_data | `array&lt;string,mixed&gt;` | ನೋಂದಣಿ ಮೆಟಾಡೇಟಾ (domain_name, provider_id, years, expiry_date ಇತ್ಯಾದಿ). |
| $result | `array&lt;string,mixed&gt;` | ರಿಜಿಸ್ಟ್ರಾರ್‌ನಿಂದ ಮರಳಿ ಬಂದ ಕಚ್ಚಾ ಫಲಿತಾಂಶದ ಅರೇ (raw result array). |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) ನಲ್ಲಿ 1204ನೇ ಸಾಲಿನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ.
