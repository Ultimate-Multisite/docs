---
id: wu_ses_verification_integration
title: ตัวกรอง - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration {#filter-wusesverificationintegration}

Filter: ให้โค้ดอื่นสามารถส่งอ็อบเจกต์ SES integration เข้ามาได้

อ็อบเจกต์ที่ส่งกลับมาจะต้องมีเมธอดเหล่านี้:
- `verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error`
- `check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error`
- `delete_identity(string $domain): true\|WP_Error`

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $integration | `object\|null` | อ็อบเจกต์ SES integration หรือค่า null |

### Since {#since}

- 2.2.0
### Source {#source}

กำหนดไว้ใน [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) บรรทัดที่ 731
