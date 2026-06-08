---
id: wu_stripe_existing_plan_id
title: Bộ lọc - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# Filter: wu_stripe_existing_plan_id

Bộ lọc này dùng để kiểm tra ID của một gói (plan) cụ thể. Nếu ID này tồn tại, gói đăng ký mới sẽ sử dụng gói đó.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $plan_id | `string` | ID của gói Stripe cần kiểm tra. |
| $membership_level | `object` | Đối tượng cấp độ thành viên. |

### Source

Được định nghĩa tại [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653) ở dòng 2653
