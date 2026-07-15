---
id: wu_woocommerce_line_item_params
title: Bộ lọc - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

Lọc các tham số được sử dụng để tạo các mục dòng (line items) trên giỏ hàng WooCommerce, trước khi chuyển hướng khách hàng đến trang thanh toán (checkout) của WooCommerce.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $line_item_params | `array` | Các tham số mục dòng giỏ hàng. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Đối tượng mục dòng Ultimate Multisite. |
| $wc_product | `\WC_Product` | Sản phẩm WooCommerce. |

### Since {#since}

- 2.0.0
### Source {#source}

Được định nghĩa trong [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) tại dòng 662.


## Returns {#returns}
Các tham số mục dòng đã được chỉnh sửa.
