---
id: wu_stripe_webhook_membership
title: Bộ lọc - wu_stripe_webhook_membership
sidebar_label: wu_stripe_webhook_membership
_i18n_hash: b39da1f6b46f6ac7af6a5674c8b5d261
---
# Filter: wu_stripe_webhook_membership {#filter-wustripewebhookmembership}

Bộ lọc này dùng để lọc bản ghi thành viên (membership record) liên quan đến webhook này.

Bộ lọc này được thêm vào để giải quyết các xung đột có thể xảy ra khi cùng một khách hàng Stripe được sử dụng trên nhiều trang web khác nhau.

## Tham số {#parameters}

| Name | Type | Mô tả |
|------|------|-------------|
| $membership | `\WP_Ultimo\Models\Membership\|false` | Đối tượng thành viên (membership object). |
| $event | `\Stripe\Event` | Sự kiện (event) được nhận. |

### Nguồn {#source}

Được định nghĩa tại [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2035) ở dòng 2035
