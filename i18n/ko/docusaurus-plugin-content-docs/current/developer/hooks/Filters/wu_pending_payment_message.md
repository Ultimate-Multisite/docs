---
id: wu_pending_payment_message
title: 필터 - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# 필터: wu_pending_payment_message

사용자가 보류 중인 결제에 대한 메시지를 변경할 수 있도록 허용합니다.

## Parameters

| 이름 | 유형 | 설명 |
|------|------|------|
| $message | `string` | 인쇄할 메시지. |
| $customer | `\WP_Ultimo\Models\Customer` | 현재 고객. |
| $pending_payments | `array` | 보류 중인 결제 목록. |

### 버전

- 2.0.19

### 소스

다음 파일에서 정의됨: [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) 244번째 줄에서
