---
id: wu_ses_verification_integration
title: ಫಿಲ್ಟರ್ - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration

Filter: ಇತರೆ ಕೋಡ್‌ಗಳು SES ಇಂಟಿಗ್ರೇಷನ್ ಆಬ್ಜೆಕ್ಟ್ ಅನ್ನು ಒದಗಿಸಲು ಅನುಮತಿಸುತ್ತದೆ.

ರಿಟರ್ನ್ ಆಗುವ ಆಬ್ಜೆಕ್ಟ್ ಈ ಕೆಳಗಿನ ವಿಧಾನಗಳನ್ನು (methods) ಹೊಂದಿರಬೇಕು:
- verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error
- check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error
- delete_identity(string $domain): true\|WP_Error

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $integration | `object\|null` | SES ಇಂಟಿಗ್ರೇಷನ್ ಆಬ್ಜೆಕ್ಟ್, ಅಥವಾ null. |

### ಯಾವಾಗ ಲಭ್ಯವಾಯಿತು {#since}

- 2.2.0
### ಮೂಲ {#source}

Defined in [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) at line 731
