---
id: wu_handle_customer_meta_fields
title: Hành động - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields

Cho phép các nhà phát triển plugin lưu trữ dữ liệu meta theo nhiều cách khác nhau nếu họ cần.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | Danh sách các trường meta, được cấu trúc theo cặp khóa => giá trị. |
| $customer | `\Customer` | Đối tượng khách hàng Ultimate Multisite. |
| $checkout | `\Checkout` | Lớp checkout. |

### Since

- 2.0.0
### Source

Được định nghĩa trong [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) tại dòng 1211
