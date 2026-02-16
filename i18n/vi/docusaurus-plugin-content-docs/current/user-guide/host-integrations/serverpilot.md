---
title: Tích hợp ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Tích hợp ServerPilot

## Tổng quan
ServerPilot là dịch vụ đám mây để lưu trữ WordPress và các website PHP khác trên máy chủ tại DigitalOcean, Amazon, Google, hoặc bất kỳ nhà cung cấp máy chủ nào khác. Tích hợp này cho phép đồng bộ tên miền tự động và quản lý chứng chỉ SSL giữa Ultimate Multisite và ServerPilot.

## Tính năng
- Đồng bộ tên miền tự động
- Quản lý chứng chỉ SSL với Let's Encrypt
- Tự động gia hạn SSL

## Yêu cầu
Các hằng số sau phải được định nghĩa trong file `wp-config.php` của bạn:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Hướng dẫn cài đặt

### 1. Lấy thông tin đăng nhập API ServerPilot

1. Đăng nhập vào bảng điều khiển ServerPilot của bạn
2. Vào "Account" > "API"
3. Tạo API key mới nếu bạn chưa có
4. Sao chép Client ID và API Key của bạn

### 2. Lấy App ID

1. Trong bảng điều khiển ServerPilot, vào "Apps"
2. Chọn app nơi WordPress multisite của bạn được lưu trữ
3. App ID hiển thị trong URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Thêm hằng số vào wp-config.php

Thêm các hằng số sau vào file `wp-config.php` của bạn:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Kích hoạt tích hợp

1. Trong trang quản trị WordPress, vào Ultimate Multisite > Settings
2. Chuyển đến tab "Domain Mapping"
3. Kéo xuống phần "Host Integrations"
4. Bật tích hợp ServerPilot
5. Nhấn "Save Changes"

## Cách hoạt động

### Đồng bộ tên miền

Khi một tên miền được ánh xạ trong Ultimate Multisite:

1. Tích hợp sẽ lấy danh sách tên miền hiện tại từ ServerPilot
2. Thêm tên miền mới vào danh sách (cùng với phiên bản www nếu có)
3. Gửi danh sách đã cập nhật đến ServerPilot qua API
4. ServerPilot cập nhật danh sách tên miền cho ứng dụng của bạn

### Quản lý chứng chỉ SSL

Sau khi tên miền được đồng bộ:

1. Tích hợp tự động kích hoạt AutoSSL cho ứng dụng của bạn
2. ServerPilot xử lý việc cấp phát và cài đặt chứng chỉ SSL bằng Let's Encrypt
3. ServerPilot cũng xử lý việc gia hạn chứng chỉ SSL tự động

## Xác minh chứng chỉ SSL

Tích hợp được cấu hình để tăng số lần thử xác minh chứng chỉ SSL cho ServerPilot, vì có thể mất một khoảng thời gian để ServerPilot cấp phát và cài đặt chứng chỉ SSL. Mặc định, hệ thống sẽ thử tối đa 5 lần, nhưng bạn có thể điều chỉnh bằng filter.

## Xử lý sự cố

### Vấn đề kết nối API
- Kiểm tra xem Client ID và API Key của bạn có đúng không
- Kiểm tra App ID có chính xác không
- Đảm bảo tài khoản ServerPilot của bạn có đủ quyền cần thiết

### Vấn đề chứng chỉ SSL
- ServerPilot yêu cầu tên miền phải có bản ghi DNS hợp lệ trỏ đến máy chủ của bạn trước khi cấp chứng chỉ SSL
- Nếu chứng chỉ SSL không được cấp, hãy kiểm tra xem tên miền của bạn đã trỏ đúng đến địa chỉ IP của máy chủ chưa
- Có thể mất một khoảng thời gian để ServerPilot cấp và cài đặt chứng chỉ SSL (thường từ 5-15 phút)

### Tên miền không được thêm
- Kiểm tra nhật ký Ultimate Multisite để xem có thông báo lỗi nào không
- Xác nhận tên miền chưa được thêm vào ServerPilot trước đó
- Đảm bảo gói ServerPilot của bạn hỗ trợ số lượng tên miền bạn đang thêm

### Xóa tên miền
- Hiện tại, API ServerPilot không cung cấp cách xóa từng tên miền riêng lẻ
- Khi một ánh xạ tên miền bị xóa trong Ultimate Multisite, tích hợp sẽ cập nhật danh sách tên miền trong ServerPilot để loại bỏ tên miền đã xóa
