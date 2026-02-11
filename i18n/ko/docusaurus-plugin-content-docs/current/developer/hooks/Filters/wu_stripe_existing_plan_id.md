---
id: wu_stripe_existing_plan_id
title: 필터 - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# 필터: wu_stripe_existing_plan_id

검사할 플랜의 ID를 필터링합니다. 이 ID가 존재하면 새 구독이 이 플랜을 사용합니다.

## Parameters

| 이름 | 타입 | 설명 |
|------|------|-------------|
| $plan_id | `string` | Stripe 플랜을 검사할 ID. |
| $membership_level | `object` | 멤버십 레벨 객체. |

### Source

다음에서 정의됨 [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) 2653번째 줄에서
