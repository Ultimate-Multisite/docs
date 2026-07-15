---
id: wu_domain_registration_failed
title: 액션 - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

도메인 등록 시도가 실패했을 때 실행됩니다.

## 매개변수 {#parameters}

| 이름 | 타입 | 설명 |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | 등록을 유발한 결제 정보입니다. |
| $registration_data | `array<string,mixed>` | status=failed와 error_message를 포함한 등록 메타데이터입니다. |
| $error_message | `string` | 등록 대행사(registrar)에서 제공하는 사람이 읽을 수 있는 오류 메시지입니다. |

### 도입 버전 {#since}

- 2.0.0
### 출처 {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250)의 1250번째 줄에 정의되어 있습니다.
