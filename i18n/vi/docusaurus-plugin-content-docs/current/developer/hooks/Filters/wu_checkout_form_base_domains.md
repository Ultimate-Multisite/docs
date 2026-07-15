---
id: wu_checkout_form_base_domains
title: Bộ lọc - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Bộ lọc: wu_checkout_form_base_domains

Lọc các miền cơ sở biểu mẫu thanh toán dùng chung không nên trở thành bản ghi miền được ánh xạ.

Sử dụng bộ lọc này khi một tích hợp cung cấp các miền cơ sở bổ sung cho các trường **URL trang** của biểu mẫu thanh toán. Các miền được bộ lọc này trả về được xem là máy chủ đăng ký dùng chung thay vì miền tùy chỉnh theo từng trang.

## Tham số {#parameters}

| Tên | Loại | Mô tả |
|------|------|-------------|
| $domains | `array` | Các miền cơ sở dùng chung được thu thập từ cấu hình biểu mẫu thanh toán. |

### Kể từ {#since}

- 2.13.0

### Nguồn {#source}

Được định nghĩa trong `inc/functions/domain.php`.


## Trả về {#returns}

Mảng các miền cơ sở biểu mẫu thanh toán đã được chuẩn hóa.
