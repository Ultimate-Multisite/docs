---
id: wu_maybe_create_customer
title: 액션 - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# 액션: wu_maybe_create_customer

플러그인 개발자가 고객이 추가될 때 추가 작업을 수행할 수 있도록 허용합니다.

여기서는 예를 들어 customer->user를 메인 사이트에 추가하는 훅을 추가합니다.

## 매개변수

| 이름 | 타입 | 설명 |
|------|------|-------------|
| $customer | `\Customer` | 아마도 생성된 고객. |
| $checkout | `\Checkout` | 현재 체크아웃 클래스. |

### 버전

- 2.0.0

### 소스

정의됨 [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) 1156번째 줄에서
