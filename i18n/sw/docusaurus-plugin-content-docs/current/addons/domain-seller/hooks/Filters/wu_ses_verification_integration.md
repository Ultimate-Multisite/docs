---
id: wu_ses_verification_integration
title: Filter - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration

Filter: inaruhusu msimbo mwingine kutoa kitu cha SES integration.

Kitu kinachorejeshwa lazima kimalize (implement): - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $integration | `object\|null` | Kitu cha SES integration, au null. |

### Since

- 2.2.0
### Source

Kimefafanishwa katika [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) kwenye mstari wa 731
