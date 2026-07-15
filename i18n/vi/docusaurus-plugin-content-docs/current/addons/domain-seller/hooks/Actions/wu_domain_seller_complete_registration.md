---
id: wu_domain_seller_complete_registration
title: Action - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

Được kích hoạt khi một khoản thanh toán chuyển sang trạng thái yêu cầu kích hoạt đăng ký tên miền.

## Tham số {#parameters}

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Đối tượng thanh toán. |
| $old_status | `string` | Trạng thái thanh toán trước khi chuyển đổi. |

### Từ phiên bản {#since}

- 2.0.0
### Nguồn {#source}

Được định nghĩa tại [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) ở dòng 266
