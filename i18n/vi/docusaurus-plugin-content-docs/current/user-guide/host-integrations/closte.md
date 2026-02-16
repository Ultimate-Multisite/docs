---
title: Tích hợp Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Tích hợp Closte

## Tổng quan
Closte là nền tảng hosting WordPress được quản lý, xây dựng trên hạ tầng Google Cloud. Tích hợp này cho phép tự động đồng bộ tên miền và quản lý chứng chỉ SSL giữa Ultimate Multisite và Closte.

## Tính năng
- Tự động đồng bộ tên miền
- Quản lý chứng chỉ SSL
- Hỗ trợ tên miền wildcard
- Không cần cấu hình nếu đang chạy trên Closte

## Yêu cầu
Bạn cần khai báo hằng số sau trong file `wp-config.php` nếu đang sử dụng Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Hằng số này thường đã được khai báo sẵn nếu bạn đang hosting trên Closte.

## Hướng dẫn cài đặt

### 1. Kiểm tra API Key của Closte

Nếu bạn đang hosting trên Closte, hằng số `CLOSTE_CLIENT_API_KEY` thường đã được khai báo sẵn trong file `wp-config.php`. Bạn có thể kiểm tra bằng cách mở file `wp-config.php`.

### 2. Bật tích hợp

1. Trong trang quản trị WordPress, vào Ultimate Multisite > Settings
2. Chuyển đến tab "Domain Mapping"
3. Kéo xuống phần "Host Integrations"
4. Bật tích hợp Closte
5. Nhấn "Save Changes"

## Cách hoạt động

Khi một tên miền được ánh xạ trong Ultimate Multisite:

1. Tích hợp sẽ gửi yêu cầu đến API của Closte để thêm tên miền vào ứng dụng của bạn
2. Closte tự động xử lý việc cấp phát chứng chỉ SSL
3. Khi ánh xạ tên miền bị xóa, tích hợp sẽ xóa tên miền khỏi Closte

Tích hợp này cũng hoạt động với cài đặt khoảng thời gian kiểm tra DNS trong Ultimate Multisite, cho phép bạn cấu hình tần suất hệ thống kiểm tra việc phân giải DNS và cấp phát chứng chỉ SSL.

## Tạo bản ghi tên miền

Tích hợp này đảm bảo rằng khi một site được tạo hoặc sao chép, bản ghi tên miền sẽ tự động được tạo. Điều này đặc biệt quan trọng với tích hợp Closte, vì việc tạo bản ghi tên miền sẽ kích hoạt API của Closte để tạo tên miền và chứng chỉ SSL.

## Xử lý sự cố

### Lỗi kết nối API
- Kiểm tra xem API key của Closte có đúng không
- Đảm bảo tài khoản Closte của bạn có đủ quyền cần thiết

### Lỗi chứng chỉ SSL
- Closte có thể mất một khoảng thời gian để cấp chứng chỉ SSL (thường từ 5-10 phút)
- Kiểm tra xem tên miền của bạn đã trỏ đúng đến địa chỉ IP máy chủ Closte chưa
- Kiểm tra bản ghi DNS của tên miền để đảm bảo cấu hình đúng

### Tên miền không được thêm
- Kiểm tra nhật ký của Ultimate Multisite để xem có thông báo lỗi nào không
- Xác nhận tên miền chưa được thêm vào Closte trước đó
- Đảm bảo bản ghi DNS của tên miền đã được cấu hình đúng

### Khoảng thời gian kiểm tra DNS
- Nếu chứng chỉ SSL mất quá lâu để cấp phát, bạn có thể điều chỉnh khoảng thời gian kiểm tra DNS trong cài đặt Domain Mapping
- Khoảng thời gian mặc định là 300 giây (5 phút), nhưng bạn có thể đặt thấp nhất là 10 giây để kiểm tra nhanh hơn khi test
