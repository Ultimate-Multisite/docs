---
id: wu_stripe_checkout_subscription_data
title: Bộ lọc - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Bộ lọc: wu_stripe_checkout_subscription_data

Bộ lọc này dùng để xử lý dữ liệu đăng ký (subscription) của Stripe. Bạn có thể ghi đè (override) các giá trị `success_url` hoặc `cancel_url`.

## Tham số

| Tên | Kiểu dữ liệu | Mô tả |
|------|------|-------------|
| $subscription_data | `array` | Một mảng các tham số cần truyền cho Stripe. |
| $gateway | `\Base_Gateway` | Đối tượng Stripe Gateway hiện tại. |

### Từ phiên bản

- 2.4.2
### Nguồn

Được định nghĩa tại [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) ở dòng 298
