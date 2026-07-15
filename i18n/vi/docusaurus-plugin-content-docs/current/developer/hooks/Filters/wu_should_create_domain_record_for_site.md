---
id: wu_should_create_domain_record_for_site
title: Bộ lọc - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site

Lọc xem Ultimate Multisite có nên tạo bản ghi tên miền cho một site mới được tạo hay không.

Sử dụng filter này để chặn hoặc trì hoãn việc tự động tạo bản ghi tên miền cho các site sử dụng tên miền cơ sở của biểu mẫu thanh toán dùng chung, host nội bộ, hoặc một tên miền mà một tích hợp khác sẽ quản lý riêng.

## Tham số {#parameters}

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| $create | `bool` | Bản ghi tên miền có nên được tạo hay không. |
| $site | `WP_Site` | Đối tượng site mới được tạo. |

### Kể từ {#since}

- 2.13.0

### Nguồn {#source}

Được định nghĩa trong `inc/functions/domain.php`.


## Giá trị trả về {#returns}

Giá trị Boolean cho biết có tạo bản ghi tên miền hay không.
