---
id: wu_apply_signup_fee
title: Bộ lọc - wu_apply_signup_fee
sidebar_label: wu_apply_signup_fee
_i18n_hash: b6a5ac9b0ef2d459003fa02766ad6f81
---
# Filter: wu_apply_signup_fee

Bộ lọc này xác định xem phí đăng ký có nên được áp dụng hay không.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $add_signup_fee | `bool` | Có nên thêm phí đăng ký hay không. |
| $product | `object` | Đối tượng cấp độ thành viên. |
| $this | `\WP_Ultimo\Checkout\Cart` | Đối tượng đăng ký. |

### Since {#since}

- 3.1
### Source {#source}

Được định nghĩa trong [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1769) tại dòng 1769
