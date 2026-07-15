---
id: wu_ses_verification_integration
title: Filter - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration

Filter: SES ഇന്റഗ്രേഷൻ ഒബ്ജക്റ്റ് നൽകാൻ മറ്റ് കോഡുകളെ അനുവദിക്കുന്നു.

തിരിച്ചറിയുന്ന ഒബ്ജക്റ്റ് താഴെ പറയുന്ന രീതികൾ നടപ്പിലാക്കിയിരിക്കണം:
- `verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error`
- `check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error`
- `delete_identity(string $domain): true\|WP_Error`

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $integration | `object\|null` | SES ഇന്റഗ്രേഷൻ ഒബ്ജക്റ്റ്, അല്ലെങ്കിൽ null. |

### Since {#since}

- 2.2.0
### Source {#source}

[`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) എന്ന ഫയലിലെ 731-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.
