---
id: wu_ses_verification_integration
title: Bộ lọc - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration {#filter-wusesverificationintegration}

Bộ lọc này cho phép các đoạn mã khác cung cấp đối tượng tích hợp SES.

Đối tượng trả về phải triển khai các phương thức sau:
- `verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error`
- `check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error`
- `delete_identity(string $domain): true\|WP_Error`

## Tham số {#parameters}

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| $integration | `object\|null` | Đối tượng tích hợp SES, hoặc `null`. |

### Từ phiên bản {#since}

- 2.2.0
### Nguồn {#source}

Được định nghĩa trong [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) tại dòng 731
