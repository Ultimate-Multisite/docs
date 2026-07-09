---
id: wu_ses_verification_integration
title: فلٽر - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# فلٽر: wu_ses_verification_integration {#filter-wusesverificationintegration}

فلٽر: ٻئي ڪوڊ کي SES انٽيگريشن شئي فراهم ڪرڻ جي اجازت ڏيو.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $integration | `object\|null` | SES انٽيگريشن شئي، يا null. |

### کان وٺي {#since}

- 2.2.0
### ذريعو {#source}

[`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) ۾ سٽ 731 تي بيان ٿيل.
