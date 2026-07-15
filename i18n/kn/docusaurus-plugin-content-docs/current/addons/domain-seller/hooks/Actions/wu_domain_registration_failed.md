---
id: wu_domain_registration_failed
title: Action - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

ಡೊಮೇನ್ ನೋಂದಣಿ ಪ್ರಯತ್ನ ವಿಫಲವಾದ ನಂತರ ಈ ಆಕ್ಷನ್ ಕಾರ್ಯಗತವಾಗುತ್ತದೆ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ನೋಂದಣಿಗೆ ಕಾರಣವಾದ ಪಾವತಿ (payment). |
| $registration_data | `array&lt;string,mixed&gt;` | ಸ್ಥಿತಿ=ವಿಫಲ (status=failed) ಮತ್ತು error_message ಸೇರಿದಂತೆ ನೋಂದಣಿ ಮೆಟಾಡೇಟಾ (registration metadata). |
| $error_message | `string` | ನೋಂದಣಾ ಸಂಸ್ಥೆಯಿಂದ (registrar) ಬಂದ ಮನುಷ್ಯನಿಗೆ ಓದಲು ಸಾಧ್ಯವಾಗುವಷ್ಟು ಸುಲಭವಾದ ত্রুটি ಸಂದೇಶ. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) ನಲ್ಲಿ 1250ನೇ ಸಾಲಿನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ.
