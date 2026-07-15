---
id: wu_domain_renewal_failed
title: Action - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

ಡೊಮೇನ್ ನವೀಕರಣದ ಪ್ರಯತ್ನ ವಿಫಲವಾದ ನಂತರ ಈ ಆಕ್ಷನ್ ಕಾರ್ಯಗತವಾಗುತ್ತದೆ.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ನವೀಕರಣವನ್ನು ಪ್ರಚೋದಿಸಿದ ಪಾವತಿ (payment). |
| $renewal_data | `array&lt;string,mixed&gt;` | ನವೀಕರಣದ ಮೆಟಾಡೇಟಾ (ಡೊಮೇನ್_ಹೆಸರು, ವರ್ಷಗಳು, ಇತ್ಯಾದಿ). |
| $error_message | `string` | ರಿಜಿಸ್ಟ್ರಾರ್‌ನಿಂದ ಬಂದ ಮನುಷ್ಯನಿಗೆ ಓದಲು ಸಾಧ್ಯವಾದ ದೋಷ ಸಂದೇಶ. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) ಫೈಲ್‌ನ 630ನೇ ಸಾಲಿನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ.
