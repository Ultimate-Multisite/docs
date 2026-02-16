---
title: Tích hợp Cloudways
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Tích hợp Cloudways

## Tổng quan
Cloudways là nền tảng hosting đám mây được quản lý, cho phép bạn triển khai các trang WordPress trên nhiều nhà cung cấp đám mây khác nhau như DigitalOcean, AWS, Google Cloud và nhiều hơn nữa. Tích hợp này cho phép tự động đồng bộ tên miền và quản lý chứng chỉ SSL giữa Ultimate Multisite và Cloudways.

## Tính năng
- Tự động đồng bộ tên miền
- Quản lý chứng chỉ SSL
- Hỗ trợ tên miền bổ sung
- Xác thực DNS cho chứng chỉ SSL

## Yêu cầu
Các hằng số sau cần được định nghĩa trong file `wp-config.php` của bạn:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Tùy chọn, bạn cũng có thể định nghĩa:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Hướng dẫn cài đặt

### 1. Lấy thông tin API Cloudways

1. Đăng nhập vào dashboard Cloudways của bạn
2. Vào "Account" > "API Keys"
3. Tạo API key nếu bạn chưa có
4. Sao chép email và API key của bạn

### 2. Lấy Server ID và Application ID

1. Trong dashboard Cloudways, vào "Servers"
2. Chọn server đang chứa WordPress multisite của bạn
3. Server ID hiển thị trong URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Vào "Applications" và chọn ứng dụng WordPress của bạn
5. App ID hiển thị trong URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Thêm các hằng số vào wp-config.php

Thêm các hằng số sau vào file `wp-config.php` của bạn:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Nếu bạn có các tên miền bổ sung cần luôn được bao gồm:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. Kích hoạt tích hợp

1. Trong trang quản trị WordPress, vào Ultimate Multisite > Settings
2. Chuyển đến tab "Domain Mapping"
3. Cuộn xuống "Host Integrations"
4. Bật tích hợp Cloudways
5. Nhấn "Save Changes"

## Cách hoạt động

### Đồng bộ tên miền

Khi một tên miền được ánh xạ trong Ultimate Multisite:

1. Tích hợp sẽ lấy tất cả các tên miền hiện đang được ánh xạ
2. Thêm tên miền mới vào danh sách (cùng với phiên bản www nếu có)
3. Gửi danh sách đầy đủ đến Cloudways thông qua API
4. Cloudways cập nhật các domain alias cho ứng dụng của bạn

Lưu ý: API của Cloudways yêu cầu gửi danh sách đầy đủ các tên miền mỗi lần, không phải chỉ thêm hoặc xóa từng tên miền riêng lẻ.

### Quản lý chứng chỉ SSL

Sau khi các tên miền được đồng bộ:

1. Tích hợp kiểm tra các tên miền có bản ghi DNS hợp lệ trỏ đến server của bạn
2. Gửi yêu cầu đến Cloudways để cài đặt chứng chỉ SSL Let's Encrypt cho các tên miền đó
3. Cloudways xử lý việc cấp và cài đặt chứng chỉ SSL

## Tên miền bổ sung

Hằng số `WU_CLOUDWAYS_EXTRA_DOMAINS` cho phép bạn chỉ định các tên miền bổ sung cần luôn được bao gồm khi đồng bộ với Cloudways. Điều này hữu ích cho:

- Các tên miền không được quản lý bởi Ultimate Multisite
- Tên miền wildcard (ví dụ: `*.example.com`)
- Tên miền phát triển hoặc staging

## Xử lý sự cố

### Vấn đề kết nối API
- Xác minh email và API key của bạn chính xác
- Kiểm tra server ID và application ID chính xác
- Đảm bảo tài khoản Cloudways của bạn có các quyền cần thiết

### Vấn đề chứng chỉ SSL
- Cloudways yêu cầu các tên miền phải có bản ghi DNS hợp lệ trỏ đến server của bạn trước khi cấp chứng chỉ SSL
- Tích hợp sẽ xác thực bản ghi DNS trước khi yêu cầu chứng chỉ SSL
- Nếu chứng chỉ SSL không được cấp, hãy kiểm tra xem các tên miền của bạn đã trỏ đúng đến địa chỉ IP của server chưa

### Tên miền không được thêm
- Kiểm tra nhật ký Ultimate Multisite để xem các thông báo lỗi
- Xác minh tên miền chưa được thêm vào Cloudways
- Đảm bảo gói Cloudways của bạn hỗ trợ số lượng tên miền bạn đang thêm
