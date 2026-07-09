---
id: wu_ses_verification_integration
title: ফিল্টার - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration {#filter-wusesverificationintegration}

Filter: অন্য কোডকে SES ইন্টিগ্রেশন অবজেক্ট সরবরাহ করার অনুমতি দেয়।

ফেরত আসা অবজেক্টটিকে অবশ্যই নিম্নলিখিত ফাংশনগুলো ইমপ্লিমেন্ট করতে হবে: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## প্যারামিটারসমূহ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $integration | `object\|null` | SES ইন্টিগ্রেশন অবজেক্ট, অথবা null। |

### Since {#since}

- 2.2.0
### Source {#source}

[`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731)-এ লাইন ৭৩১-এ সংজ্ঞায়িত।
