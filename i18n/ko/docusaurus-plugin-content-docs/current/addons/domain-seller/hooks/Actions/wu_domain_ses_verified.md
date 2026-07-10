---
id: wu_domain_ses_verified
title: 액션 - wu_domain_ses_verified
sidebar_label: wu_domain_ses_verified
_i18n_hash: 5ef424a1d1a4d3569ebfa9caf2d1a3d7
---
# Action: wu_domain_ses_verified {#action-wudomainsesverified}

SES가 도메인이 DKIM 인증을 완료했다고 확인할 때 실행됩니다.

## 매개변수 {#parameters}

| 이름 | 타입 | 설명 |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | 도메인 객체입니다. |

### 지원 시작 버전 {#since}

- 2.2.0
### 출처 {#source}

[`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L480)의 480번째 줄에 정의되어 있습니다.
