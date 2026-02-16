---
title: Tích hợp RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Tích hợp RunCloud

## Tổng quan
RunCloud là nền tảng quản lý máy chủ dựa trên đám mây, giúp bạn dễ dàng triển khai và quản lý các ứng dụng web trên máy chủ cloud của riêng mình. Tính năng tích hợp này cho phép đồng bộ tên miền tự động và quản lý chứng chỉ SSL giữa Ultimate Multisite và RunCloud.

## Tính năng
- Đồng bộ tên miền tự động
- Quản lý chứng chỉ SSL
- Xóa tên miền khi các liên kết tên miền bị xóa

## Yêu cầu
Các hằng số sau cần được khai báo trong file `wp-config.php` của bạn:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Hướng dẫn cài đặt

### 1. Lấy thông tin xác thực API của RunCloud

1. Đăng nhập vào bảng điều khiển RunCloud của bạn
2. Vào "User Profile" (nhấp vào ảnh đại diện ở góc trên bên phải)
3. Chọn "API" từ menu
4. Nhấp "Generate API Key" nếu bạn chưa có
5. Sao chép API Key và API Secret của bạn

### 2. Lấy Server ID và App ID

1. Trong bảng điều khiển RunCloud, vào "Servers"
2. Chọn máy chủ đang lưu trữ WordPress multisite của bạn
3. Server ID hiển thị trong URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Vào "Web Applications" và chọn ứng dụng WordPress của bạn
5. App ID hiển thị trong URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Thêm các hằng số vào wp-config.php

Thêm các hằng số sau vào file `wp-config.php` của bạn:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Kích hoạt tích hợp

1. Trong trang quản trị WordPress, vào Ultimate Multisite > Settings
2. Chuyển đến tab "Domain Mapping"
3. Cuộn xuống phần "Host Integrations"
4. Bật tích hợp RunCloud
5. Nhấp "Save Changes"

## Cách hoạt động

Khi một tên miền được liên kết trong Ultimate Multisite:

1. Tích hợp sẽ gửi yêu cầu đến API của RunCloud để thêm tên miền vào ứng dụng của bạn
2. Nếu tên miền được thêm thành công, tích hợp cũng sẽ triển khai lại chứng chỉ SSL
3. Khi liên kết tên miền bị xóa, tích hợp sẽ xóa tên miền khỏi RunCloud

Đối với cài đặt subdomain, tích hợp sẽ tự động xử lý việc tạo subdomain trong RunCloud khi các trang web mới được thêm vào mạng lưới của bạn.

## Xử lý sự cố

### Vấn đề kết nối API
- Kiểm tra lại thông tin xác thực API của bạn
- Đảm bảo server ID và app ID chính xác
- Xác nhận tài khoản RunCloud của bạn có đủ quyền cần thiết

### Vấn đề chứng chỉ SSL
- RunCloud có thể cần một khoảng thời gian để cấp chứng chỉ SSL
- Kiểm tra các tên miền của bạn đã trỏ đúng đến địa chỉ IP của máy chủ chưa
- Kiểm tra cài đặt SSL trong RunCloud cho ứng dụng của bạn

### Tên miền không được thêm
- Kiểm tra nhật ký của Ultimate Multisite để xem thông báo lỗi
- Xác nhận tên miền chưa được thêm vào RunCloud trước đó
- Đảm bảo gói RunCloud của bạn hỗ trợ nhiều tên miền
