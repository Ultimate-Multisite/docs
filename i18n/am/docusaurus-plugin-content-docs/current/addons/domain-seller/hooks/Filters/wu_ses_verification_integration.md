---
id: wu_ses_verification_integration
title: ማጣሪያ - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration

ማጣሪያው (Filter): ሌሎች ኮዶች የSES ውህደት ነገር (object) እንዲሰጡ ያስችላል።

የሚመለሰው ነገር (object) የሚከተሉትን መተግበር አለበት (must implement):
- `verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error`
- `check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error`
- `delete_identity(string $domain): true\|WP_Error`

## መለኪያዎች (Parameters) {#parameters}

| ስም (Name) | ዓይነት (Type) | መግለጫ (Description) |
|------|------|-------------|
| $integration | `object\|null` | የSES ውህደት ነገር (object)፣ ወይም ባዶ (null)። |

### ከ (Since) {#since}

- 2.2.0
### ምንጭ (Source) {#source}

በ[`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) በ731ኛው መስመር ተገልጿል።
