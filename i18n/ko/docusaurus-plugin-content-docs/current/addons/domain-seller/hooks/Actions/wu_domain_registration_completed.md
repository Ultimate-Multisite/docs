---
id: wu_domain_registration_completed
title: 액션 - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

도메인 등록이 성공적으로 완료된 후에 실행됩니다.

## 매개변수

| 이름 | 타입 | 설명 |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | 등록을 유발한 결제 정보입니다. |
| $registration_data | `array<string,mixed>` | 등록 메타데이터 (도메인 이름, 제공업체 ID, 기간, 만료일 등). |
| $result | `array<string,mixed>` | 레지스트라에서 반환하는 원본 결과 배열입니다. |

### 사용 가능 버전

- 2.0.0
### 출처

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204)의 1204번째 줄에 정의되어 있습니다.
