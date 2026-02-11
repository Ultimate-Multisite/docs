---
id: wu_stripe_webhook_membership
title: We need to output nothing.Filter - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership

멤버십 기록을 이 웹훅과 연결합니다.

이 필터는 동일한 Stripe 고객이 다른 사이트에서 사용될 때 발생할 수 있는 충돌을 방지하기 위해 도입되었습니다.

## Parameters

| 이름 | 유형 | 설명 |
|------|------|------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | 멤버십 객체입니다. |
| $event | `\Stripe\Event` | 이벤트가 수신되었습니다. |

### Source

정의됨 in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) 라인 2035에서
