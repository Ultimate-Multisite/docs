---
id: wu_ses_verification_integration
title: "Filter - wu_ses_verification_integration"
sidebar_label: "wu_ses_verification_integration"
---

# Filter: wu_ses_verification_integration

Filter: allow other code to provide the SES integration object.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $integration | `object\|null` | The SES integration object, or null. |

### Since

- 2.2.0
### Source

Defined in [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) at line 731

