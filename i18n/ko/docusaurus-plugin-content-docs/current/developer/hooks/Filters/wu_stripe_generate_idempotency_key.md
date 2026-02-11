---
id: wu_stripe_generate_idempotency_key
title: 필터 - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# 필터: wu_stripe_generate_idempotency_key

Stripe 결제 옵션과 함께 전송되는 idempotency_key 값을 필터링합니다.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $idempotency_key | `string` | idempotency key의 값. |
| $args | `array` | 키 생성을 돕는 인수. |
| $context | `string` | idempotency key가 생성되는 컨텍스트. |

### 버전

- 3.5.0

### 소스

정의된 위치: [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) 라인 54
