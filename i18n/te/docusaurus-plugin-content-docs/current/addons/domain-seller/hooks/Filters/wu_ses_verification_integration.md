---
id: wu_ses_verification_integration
title: Filter - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration

ఈ ఫిల్టర్: ఇతర కోడ్ ద్వారా SES ఇంటిగ్రేషన్ ఆబ్జెక్ట్‌ను అందించడానికి అనుమతిస్తుంది.

తిరిగి వచ్చే ఆబ్జెక్ట్ ఈ క్రింది వాటిని అమలు చేయాలి: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## పారామీటర్లు

| పేరు | రకం | వివరణ |
|------|------|-------------|
| $integration | `object\|null` | SES ఇంటిగ్రేషన్ ఆబ్జెక్ట్, లేదా null. |

### ఎప్పటి నుండి

- 2.2.0
### మూలం

[`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) లోని 731వ లైన్‌లో నిర్వచించబడింది
