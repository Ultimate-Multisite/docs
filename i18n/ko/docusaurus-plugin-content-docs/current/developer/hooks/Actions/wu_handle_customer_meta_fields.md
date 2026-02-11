---
id: wu_handle_customer_meta_fields
title: 액션 - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# 액션: wu_handle_customer_meta_fields

필요한 경우 플러그인 개발자가 메타 데이터를 다양한 방식으로 저장할 수 있도록 허용합니다.

## 매개변수

| 이름 | 타입 | 설명 |
|------|------|------|
| $meta_repository | `array` | 메타 필드 목록으로, key =&gt; value 구조입니다. |
| $customer | `\Customer` | Ultimate Multisite 고객 객체입니다. |
| $checkout | `\Checkout` | 체크아웃 클래스입니다. |

### 버전

- 2.0.0

### 출처

다음 파일에서 정의됨: [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) (1211번째 줄)
