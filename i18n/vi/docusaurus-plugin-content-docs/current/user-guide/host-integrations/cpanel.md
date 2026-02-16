---
title: Tích hợp cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Tích hợp cPanel

## Tổng quan
cPanel là một trong những bảng điều khiển hosting phổ biến nhất, được nhiều nhà cung cấp shared hosting và dedicated hosting sử dụng. Tính năng tích hợp này cho phép đồng bộ tên miền tự động giữa Ultimate Multisite và cPanel, giúp bạn tự động thêm domain alias và subdomain vào tài khoản cPanel của mình.

## Tính năng
- Tự động tạo addon domain trong cPanel
- Tự động tạo subdomain trong cPanel (dành cho cài đặt multisite dạng subdomain)
- Xóa tên miền khi mapping bị gỡ bỏ

## Yêu cầu
Các hằng số sau cần được khai báo trong file `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Ngoài ra, bạn có thể khai báo thêm:

```php
define('WU_CPANEL_PORT', 2083); // Mặc định là 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Mặc định là /public_html
```

## Hướng dẫn cài đặt

### 1. Lấy thông tin đăng nhập cPanel

1. Xin thông tin username và password cPanel từ nhà cung cấp hosting của bạn
2. Xác định host cPanel (thường là `cpanel.yourdomain.com` hoặc `yourdomain.com:2083`)

### 2. Thêm hằng số vào wp-config.php

Thêm các hằng số sau vào file `wp-config.php`:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

Tùy chọn, bạn có thể tùy chỉnh port và thư mục gốc:

```php
define('WU_CPANEL_PORT', 2083); // Thay đổi nếu cPanel của bạn sử dụng port khác
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Thay đổi nếu thư mục gốc của bạn khác
```

### 3. Kích hoạt tích hợp

1. Trong trang quản trị WordPress, vào Ultimate Multisite > Settings
2. Chuyển đến tab "Domain Mapping"
3. Kéo xuống phần "Host Integrations"
4. Bật tích hợp cPanel
5. Nhấn "Save Changes"

## Cách hoạt động

### Addon Domain

Khi một tên miền được map trong Ultimate Multisite:

1. Tích hợp gửi yêu cầu đến API của cPanel để thêm tên miền dưới dạng addon domain
2. Tên miền được cấu hình trỏ đến thư mục gốc của bạn
3. Khi domain mapping bị xóa, tích hợp sẽ gỡ addon domain khỏi cPanel

### Subdomain

Đối với cài đặt multisite dạng subdomain, khi một site mới được tạo:

1. Tích hợp tách phần subdomain từ tên miền đầy đủ
2. Gửi yêu cầu đến API của cPanel để thêm subdomain
3. Subdomain được cấu hình trỏ đến thư mục gốc của bạn

## Lưu ý quan trọng

- Tích hợp sử dụng API2 của cPanel để giao tiếp với tài khoản cPanel của bạn
- Tài khoản cPanel của bạn phải có quyền thêm addon domain và subdomain
- Một số nhà cung cấp hosting có thể giới hạn số lượng addon domain hoặc subdomain bạn có thể tạo
- Tích hợp không xử lý cấu hình DNS; bạn vẫn cần trỏ tên miền đến địa chỉ IP của server

## Xử lý sự cố

### Lỗi kết nối API
- Kiểm tra lại username và password cPanel có chính xác không
- Kiểm tra host cPanel có đúng và truy cập được không
- Đảm bảo tài khoản cPanel có đủ quyền cần thiết
- Thử sử dụng URL đầy đủ cho host (ví dụ: `https://cpanel.yourdomain.com`)

### Tên miền không được thêm
- Kiểm tra log của Ultimate Multisite xem có thông báo lỗi nào không
- Xác nhận tên miền chưa được thêm vào cPanel trước đó
- Đảm bảo tài khoản cPanel chưa đạt giới hạn addon domain hoặc subdomain

### Lỗi chứng chỉ SSL
- Tích hợp không xử lý việc cấp chứng chỉ SSL
- Bạn cần sử dụng công cụ SSL/TLS hoặc tính năng AutoSSL trong cPanel để cấp chứng chỉ SSL cho tên miền
- Hoặc bạn có thể sử dụng dịch vụ như Let's Encrypt kết hợp với AutoSSL của cPanel
