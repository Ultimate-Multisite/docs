---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Bộ lọc - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Cho phép các nhà phát triển lọc các trường địa chỉ thanh toán mặc định của WooCommerce.

Vì Ultimate Multisite có các trường địa chỉ thanh toán riêng, nên có thể cần loại bỏ các trường mặc định mà WooCommerce hiển thị trên trang thanh toán. Theo mặc định, danh sách này không nhận giá trị nào, vì vậy tất cả các trường đã được cấu hình trên WooCommerce để hiển thị sẽ được giữ lại.

### Since {#since}

- 2.0.0
### Source {#source}

Được định nghĩa trong [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) tại dòng 277


## Returns {#returns}
Danh sách các trường cần loại bỏ. Các giá trị có sẵn bao gồm `billing_first_name`, `billing_last_name`, `billing_company`, `billing_country`, `billing_address_1`, `billing_address_2`, `billing_city`, `billing_state`, `billing_postcode`, `billing_email`, và `billing_phone`.
