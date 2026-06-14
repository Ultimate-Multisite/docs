---
title: Nkwado cPanel
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# Tích hợp cPanel

## Tổng quan
cPanel là một trong những bảng điều khiển lưu trữ web phổ biến nhất được nhiều nhà cung cấp dịch vụ lưu trữ chia sẻ và riêng sử dụng dùng. Việc tích hợp này cho phép đồng bộ hóa tên miền tự động giữa Ultimate Multisite và cPanel, giúp bạn tự động thêm các bí danh tên miền (domain aliases) và tên miền phụ (subdomains) vào tài khoản cPanel của mình.

## Tính năng
- Tạo addon domain tự động trong cPanel
- Tạo subdomain tự động trong cPanel (cho các cài đặt subdomain multisite)
- Xóa tên miền khi các ánh xạ (mappings) bị xóa

## Yêu cầu
Các hằng số sau phải được định nghĩa trong tệp `wp-config.php` của bạn:

```php
define('WU_CPANEL_USERNAME', 'tên_người_dùng_cpanel_của_bạn');
define('WU_CPANEL_PASSWORD', 'mật_khẩu_cpanel_của_bạn');
define('WU_CPANEL_HOST', 'host_cpanel_của_bạn');
```

Tùy chọn, bạn cũng có thể định nghĩa:

```php
define('WU_CPANEL_PORT', 2083); // Mặc định là 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Mặc định là /public_html
```

## Hướng dẫn thiết lập

### 1. Lấy thông tin đăng nhập cPanel của bạn

1. Lấy tên người dùng và mật khẩu cPanel của bạn từ nhà cung cấp dịch vụ lưu trữ của bạn
2. Xác định host cPanel của bạn (thường là `cpanel.yourdomain.com` hoặc `yourdomain.com:2083`)

### 2. Thêm các hằng số vào wp-config.php

Thêm các hằng số sau vào tệp `wp-config.php` của bạn:

```php
define('WU_CPANEL_USERNAME', 'tên_người_dùng_cpanel_của_bạn');
define('WU_CPANEL_PASSWORD', 'mật_khẩu_cpanel_của_bạn');
define('WU_CPANEL_HOST', 'host_cpanel_của_bạn');
```

Tùy chọn, bạn có thể tùy chỉnh cổng (port) và thư mục gốc (root directory):

```php
define('WU_CPANEL_PORT', 2083); // Thay đổi nếu cPanel của bạn sử dụng cổng khác
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Thay đổi nếu thư mục gốc tài liệu của bạn khác
```

### 3. Bật tính năng tích hợp

1. Na admin WordPress của bạn, đi đến Ultimate Multisite > Settings
2. Đi đến tab "Domain Mapping" (Ánh xạ Tên miền)
3. Cuộn xuống phần "Host Integrations" (Tích hợp Máy chủ)
4. Bật tích hợp cPanel
5. Nhấn "Save Changes" (Lưu Thay đổi)

## Cách Nó Hoạt Động

### Addon Domains (Miền Phụ)

Khi một tên miền được ánh xạ trong Ultimate Multisite:

1. Tích hợp sẽ gửi yêu cầu đến API của cPanel để thêm tên miền đó làm addon domain
2. Tên miền được cấu hình để trỏ về thư mục gốc của bạn
3. Khi việc ánh xạ tên miền bị xóa, tích hợp sẽ gỡ bỏ addon domain khỏi cPanel

### Subdomains (Miền Phụ)

Đối với cài đặt đa trang con (subdomain multisite), khi một trang mới được tạo:

1. Tích hợp sẽ lấy phần subdomain từ tên miền đầy đủ
2. Nó gửi yêu cầu đến API của cPanel để thêm subdomain đó
3. Subdomain được cấu hình để trỏ về thư mục gốc của bạn

## Lưu Ý Quan Trọng

- Tích hợp này sử dụng API2 của cPanel để giao tiếp với tài khoản cPanel của bạn
- Tài khoản cPanel của bạn phải có quyền thêm addon domains và subdomains
- Một số nhà cung cấp dịch vụ lưu trữ có thể giới hạn số lượng addon domains hoặc subdomains mà bạn có thể tạo
- Tích hợp này không xử lý cấu hình DNS; bạn vẫn cần trỏ tên miền của mình đến địa chỉ IP của máy chủ

## Khắc Phục Sự Cố (Troubleshooting)

### Vấn đề Kết nối API
- Kiểm tra xem tên người dùng và mật khẩu cPanel của bạn đã đúng chưa
- Kiểm tra xem host cPanel của bạn có đúng và có thể truy cập được không
- Đảm bảo rằng tài khoản cPanel của bạn có đủ quyền cần thiết
- Hãy thử sử dụng URL đầy đủ cho host (ví dụ: `https://cpanel.yourdomain.com`)

### Tên miền Không Được Thêm
- Kiểm tra nhật ký Ultimate Multisite để xem có bất kỳ thông báo lỗi nào không
- Xác minh rằng tên miền chưa được thêm vào cPanel
- Đảm bảo rằng tài khoản cPanel của bạn chưa đạt đến giới hạn về addon domains hoặc subdomains

### Issues với Sertifikat SSL
- Integration na-handle (na-gbe) issuance na-certificate SSL.
- Ka ọ bụ ihe ị ga-ere na ị ga-ri na tools SSL/TLS na cPanel ma ọ bụ feature AutoSSL don rii sertifikat SSL maka domain-nwa gị.
- Ma ọ bụ, ị ga-arịrụ na service dị ka Let's Encrypt na AutoSSL na cPanel.
