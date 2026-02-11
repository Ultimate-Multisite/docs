---
id: wu_handle_user_meta_fields
title: 액션 - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

필요한 경우 플러그인 개발자가 사용자 메타 데이터를 다양한 방식으로 저장할 수 있도록 허용합니다.

## Parameters

| 이름 | 타입 | 설명 |
|------|------|------|
| $meta_repository | `array` | 메타 필드 목록, key => value 구조. |
| $user | `\WP_User` | WordPress 사용자 객체. |
| $customer | `\Customer` | Ultimate Multisite 고객 객체. |
| $checkout | `\Checkout` | 체크아웃 클래스. |

### 버전

- 2.0.4

### 소스

다음에서 정의됨: [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) (라인 1244)
