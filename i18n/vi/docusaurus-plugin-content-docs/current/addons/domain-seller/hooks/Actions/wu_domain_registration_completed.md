---
id: wu_domain_registration_completed
title: Action - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

Hành động này được kích hoạt sau khi tên miền đã được đăng ký thành công.

## Tham số

| Name | Type | Mô tả |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Khoản thanh toán đã kích hoạt việc đăng ký. |
| $registration_data | `array&lt;string,mixed&gt;` | Siêu dữ liệu đăng ký (chứa các thông tin như domain_name, provider_id, years, expiry_date, v.v.). |
| $result | `array&lt;string,mixed&gt;` | Mảng kết quả thô được trả về bởi nhà đăng ký (registrar). |

### Từ phiên bản

- 2.0.0
### Nguồn

Được định nghĩa trong [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) tại dòng 1204
