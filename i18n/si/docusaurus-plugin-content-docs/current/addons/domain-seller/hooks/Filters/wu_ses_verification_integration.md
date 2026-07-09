---
id: wu_ses_verification_integration
title: පෙරහන් - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# පෙරහන: wu_ses_verification_integration {#filter-wusesverificationintegration}

පෙරහන: SES ඒකාබද්ධකරණ වස්තුව සැපයීමට වෙනත් කේතයට ඉඩ දෙයි.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## පරාමිතීන් {#parameters}

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $integration | `object\|null` | SES ඒකාබද්ධකරණ වස්තුව, හෝ null. |

### සිට {#since}

- 2.2.0
### මූලාශ්‍රය {#source}

[`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) තුළ 731 වන පේළියේ නිර්වචනය කර ඇත.
