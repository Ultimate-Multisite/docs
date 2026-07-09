---
id: wu_ses_verification_integration
title: 필터 - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# 필터: wu_ses_verification_integration {#filter-wusesverificationintegration}

필터: 다른 코드가 SES 통합 객체를 제공할 수 있도록 허용합니다.

반환되는 객체는 다음을 구현해야 합니다:
- `verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error`
- `check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error`
- `delete_identity(string $domain): true\|WP_Error`

## 매개변수 {#parameters}

| 이름 | 타입 | 설명 |
|------|------|-------------|
| $integration | `object\|null` | SES 통합 객체 또는 null입니다. |

### 사용 가능 버전 {#since}

- 2.2.0
### 출처 {#source}

[`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731)의 731번째 줄에서 정의되었습니다.
