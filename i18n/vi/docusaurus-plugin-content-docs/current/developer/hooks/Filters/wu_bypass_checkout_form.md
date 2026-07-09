---
id: wu_bypass_checkout_form
title: Bộ lọc - wu_bypass_checkout_form
sidebar_label: wu_bypass_checkout_form
_i18n_hash: ad57eddbc5463e999d4896a31ed368a3
---
# Filter: wu_bypass_checkout_form {#filter-wubypasscheckoutform}

Cho phép nhà phát triển bỏ qua (bypass) kết quả đầu ra mặc định và thiết lập một kết quả tùy chỉnh thay thế.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $bypass | `string\|bool` | Xác định xem có nên bỏ qua form thanh toán hay không, hoặc cung cấp một chuỗi (string) để trả về thay thế cho form. |
| $atts | `array` | Các tham số của block/shortcode thanh toán. |

### Source {#source}

Được định nghĩa trong [`inc/ui/class-checkout-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-checkout-element.php#L327) tại dòng 327
