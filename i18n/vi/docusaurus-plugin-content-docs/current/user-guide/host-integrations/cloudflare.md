---
title: Tích hợp Cloudflare
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Tích hợp Cloudflare

## Tổng quan
Cloudflare là một trong những nhà cung cấp mạng phân phối nội dung (CDN) và bảo mật hàng đầu, giúp bảo vệ và tăng tốc website. Tính năng tích hợp này cho phép quản lý tên miền tự động giữa Ultimate Multisite và Cloudflare, đặc biệt hữu ích cho các cài đặt multisite sử dụng subdomain.

## Tính năng
- Tự động tạo subdomain trong Cloudflare
- Hỗ trợ subdomain qua proxy
- Quản lý bản ghi DNS
- Hiển thị bản ghi DNS nâng cao trong trang quản trị Ultimate Multisite

## Yêu cầu
Bạn cần khai báo các hằng số sau trong file `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Hướng dẫn cài đặt

### 1. Lấy API Key của Cloudflare

1. Đăng nhập vào dashboard Cloudflare của bạn
2. Vào "My Profile" (nhấp vào email của bạn ở góc trên bên phải)
3. Chọn "API Tokens" từ menu
4. Tạo API token mới với các quyền sau:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Sao chép API token của bạn

### 2. Lấy Zone ID

1. Trong dashboard Cloudflare, chọn tên miền bạn muốn sử dụng
2. Zone ID hiển thị trong tab "Overview", ở thanh bên phải dưới mục "API"
3. Sao chép Zone ID

### 3. Thêm hằng số vào wp-config.php

Thêm các hằng số sau vào file `wp-config.php` của bạn:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Kích hoạt tích hợp

1. Trong trang quản trị WordPress, vào Ultimate Multisite > Settings
2. Chuyển đến tab "Domain Mapping"
3. Cuộn xuống phần "Host Integrations"
4. Bật tích hợp Cloudflare
5. Nhấp "Save Changes"

## Cách hoạt động

### Quản lý Subdomain

Khi một site mới được tạo trong cài đặt multisite dạng subdomain:

1. Tính năng tích hợp gửi yêu cầu đến API của Cloudflare để thêm bản ghi CNAME cho subdomain
2. Subdomain được cấu hình mặc định chạy qua proxy của Cloudflare (có thể thay đổi bằng filter)
3. Khi một site bị xóa, tính năng tích hợp sẽ xóa subdomain khỏi Cloudflare

### Hiển thị bản ghi DNS

Tính năng tích hợp nâng cao việc hiển thị bản ghi DNS trong trang quản trị Ultimate Multisite bằng cách:

1. Lấy bản ghi DNS trực tiếp từ Cloudflare
2. Hiển thị trạng thái proxy của các bản ghi
3. Hiển thị thêm thông tin chi tiết về các bản ghi DNS

## Lưu ý quan trọng

Theo các cập nhật gần đây của Cloudflare, tính năng proxy wildcard hiện đã có sẵn cho tất cả khách hàng. Điều này có nghĩa là tích hợp Cloudflare không còn quan trọng như trước đối với các cài đặt multisite dạng subdomain, vì bạn có thể đơn giản thiết lập bản ghi DNS wildcard trong Cloudflare.

## Xử lý sự cố

### Lỗi kết nối API
- Kiểm tra xem API token của bạn có chính xác và có đủ quyền cần thiết không
- Kiểm tra Zone ID có đúng không
- Đảm bảo tài khoản Cloudflare của bạn có các quyền cần thiết

### Subdomain không được thêm
- Kiểm tra log của Ultimate Multisite để xem thông báo lỗi
- Xác nhận subdomain chưa được thêm vào Cloudflare trước đó
- Đảm bảo gói Cloudflare của bạn hỗ trợ số lượng bản ghi DNS bạn đang tạo

### Vấn đề về proxy
- Nếu bạn không muốn subdomain chạy qua proxy, có thể sử dụng filter `wu_cloudflare_should_proxy`
- Một số tính năng có thể không hoạt động đúng khi chạy qua proxy (ví dụ: một số chức năng quản trị WordPress)
- Cân nhắc sử dụng Page Rules của Cloudflare để bỏ qua cache cho các trang quản trị
