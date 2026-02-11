---
id: wu_checkout_order_created
title: 액션 - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# 액션: wu_checkout_order_created

체크아웃 주문이 완전히 조립된 후에 발생합니다.

애드온은 이를 사용하여 독립적인 청구 주기를 가진 제품에 대한 보조 멤버십을 생성할 수 있습니다.

## 매개변수

| 이름 | 타입 | 설명 |
|------|------|------|
| $order | `\WP_Ultimo\Checkout\Cart` | 카트/주문 객체. |
| $customer | `\WP_Ultimo\Models\Customer` | 고객. |
| $membership | `\WP_Ultimo\Models\Membership` | 주요 멤버십. |
| $payment | `\WP_Ultimo\Models\Payment` | 결제. |

### 버전

- 2.5.0

### 출처

정의된 위치: [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) 891번째 줄
