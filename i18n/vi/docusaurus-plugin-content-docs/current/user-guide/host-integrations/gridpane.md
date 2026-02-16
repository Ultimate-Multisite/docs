---
title: Tích hợp GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Tích hợp GridPane

## Tổng quan
GridPane là bảng điều khiển hosting WordPress chuyên biệt được xây dựng dành cho các chuyên gia WordPress. Tích hợp này cho phép đồng bộ tên miền tự động và quản lý chứng chỉ SSL giữa Ultimate Multisite và GridPane.

## Tính năng
- Đồng bộ tên miền tự động
- Quản lý chứng chỉ SSL
- Tự động cấu hình hằng số SUNRISE

## Yêu cầu
Các hằng số sau phải được khai báo trong file `wp-config.php` của bạn:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Hướng dẫn thiết lập

### 1. Lấy thông tin API GridPane

1. Đăng nhập vào dashboard GridPane của bạn
2. Vào "Settings" > "API"
3. Tạo API key nếu bạn chưa có
4. Sao chép API key của bạn

### 2. Lấy Server ID và Site ID

1. Trong dashboard GridPane, vào mục "Servers"
2. Chọn server đang chạy WordPress multisite của bạn
3. Ghi lại Server ID (hiển thị trên URL hoặc trang chi tiết server)
4. Vào mục "Sites" và chọn trang WordPress của bạn
5. Ghi lại Site ID (hiển thị trên URL hoặc trang chi tiết site)

### 3. Thêm hằng số vào wp-config.php

Thêm các hằng số sau vào file `wp-config.php` của bạn:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Kích hoạt tích hợp

1. Trong trang quản trị WordPress, vào Ultimate Multisite > Settings
2. Chuyển đến tab "Domain Mapping"
3. Kéo xuống phần "Host Integrations"
4. Bật tích hợp GridPane
5. Nhấn "Save Changes"

## Cách hoạt động

Khi một tên miền được ánh xạ trong Ultimate Multisite:

1. Tích hợp sẽ gửi yêu cầu đến API của GridPane để thêm tên miền vào site của bạn
2. GridPane tự động xử lý việc cấp phát chứng chỉ SSL
3. Khi ánh xạ tên miền bị xóa, tích hợp sẽ xóa tên miền khỏi GridPane

Tích hợp cũng tự động xử lý hằng số SUNRISE trong file wp-config.php, đây là yêu cầu bắt buộc để ánh xạ tên miền hoạt động đúng cách.

## Quản lý hằng số SUNRISE

Một tính năng đặc biệt của tích hợp GridPane là nó tự động hoàn nguyên hằng số SUNRISE trong wp-config.php để tránh xung đột với hệ thống ánh xạ tên miền riêng của GridPane. Điều này đảm bảo cả hai hệ thống có thể hoạt động cùng nhau mà không gặp vấn đề.

## Xử lý sự cố

### Lỗi kết nối API
- Kiểm tra lại API key có chính xác không
- Xác nhận server ID và site ID đúng
- Đảm bảo tài khoản GridPane của bạn có đủ quyền cần thiết

### Lỗi chứng chỉ SSL
- GridPane có thể cần một khoảng thời gian để cấp chứng chỉ SSL
- Xác nhận tên miền của bạn đã trỏ đúng đến địa chỉ IP của server
- Kiểm tra cài đặt SSL trong GridPane cho site của bạn

### Tên miền không được thêm
- Kiểm tra nhật ký Ultimate Multisite để xem thông báo lỗi
- Xác nhận tên miền chưa được thêm vào GridPane trước đó
- Đảm bảo bản ghi DNS của tên miền đã được cấu hình đúng
