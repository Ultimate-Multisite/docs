---
id: wu_domain_renewal_completed
title: Action - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed {#action-wudomainrenewalcompleted}

Hook này được kích hoạt sau khi quá trình gia hạn tên miền thành công.

## Tham số {#parameters}

| Name | Type | Mô tả |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Khoản thanh toán đã kích hoạt việc gia hạn. |
| $renewal_data | `array<string,mixed>` | Siêu dữ liệu (metadata) về việc gia hạn (như tên miền, số năm, ID khách hàng, v.v.). |
| $result | `array<string,mixed>` | Mảng kết quả thô được trả về bởi nhà đăng ký (registrar), bao gồm cả `expiry_date` mới. |

### Từ phiên bản {#since}

- 2.0.0
### Nguồn {#source}

Được định nghĩa trong [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) tại dòng 594
