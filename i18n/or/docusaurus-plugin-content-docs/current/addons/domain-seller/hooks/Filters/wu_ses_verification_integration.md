---
id: wu_ses_verification_integration
title: ଫିଲ୍ଟର - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration {#filter-wusesverificationintegration}

Filter: SES ସମାକଳନ ଅବଜେକ୍ଟ ଦେବାକୁ ଅନ୍ୟ code କୁ ଅନୁମତି ଦିଅନ୍ତୁ।

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## ପାରାମିଟରଗୁଡ଼ିକ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $integration | `object\|null` | SES ସମାକଳନ ଅବଜେକ୍ଟ, କିମ୍ବା null। |

### ଆରମ୍ଭରୁ {#since}

- 2.2.0
### ଉତ୍ସ {#source}

[`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) ରେ 731 ନମ୍ବର ଧାଡ଼ିରେ ପରିଭାଷିତ।
