---
id: wu_get_checkout_variables
title: 필터 - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# 필터: wu_get_checkout_variables

플러그인 개발자가 결제 페이지의 사전 설정을 필터링할 수 있도록 허용합니다.

주의하세요, 누락된 키는 프론트엔드에서 결제 과정을 완전히 끊을 수 있습니다.

## 매개변수

| 이름 | 타입 | 설명 |
|------|------|------|
| $variables | `array` | 로컬라이즈된 변수. |
| $checkout | `\Checkout` | 결제 클래스. |

### 버전

- 2.0.0

### 소스

정의된 위치: [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) 1970번째 줄

## 반환값

새로운 변수 배열.
