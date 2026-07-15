---
id: wu_domain_seller_process_purchase
title: Action - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

Được kích hoạt khi quá trình mua domain đang được xử lý sau khi hoàn tất thanh toán.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Đối tượng thanh toán. |
| $checkout_data | `array&lt;string,mixed&gt;` | Toàn bộ dữ liệu checkout từ form đăng ký. |

### Since {#since}

- 2.0.0
### Source {#source}

Được định nghĩa tại [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) ở dòng 246
