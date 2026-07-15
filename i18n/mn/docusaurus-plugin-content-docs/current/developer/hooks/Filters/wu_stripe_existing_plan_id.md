---
id: wu_stripe_existing_plan_id
title: Шүүлтүүр - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id

Шалгах plan-ий ID-г шүүнэ. Хэрэв энэ байгаа бол шинэ subscription энэ plan-ийг ашиглана.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $plan_id | `string` | Шалгах Stripe plan-ий ID. |
| $membership_level | `object` | Membership level объект. |

### Эх сурвалж {#source}

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653)-д 2653-р мөрөнд тодорхойлсон
