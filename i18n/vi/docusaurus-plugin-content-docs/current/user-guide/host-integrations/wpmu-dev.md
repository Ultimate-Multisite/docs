---
title: Tích hợp WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Tích hợp WPMU DEV

## Tổng quan
WPMU DEV là một nền tảng WordPress toàn diện cung cấp hosting, plugin và các dịch vụ cho website WordPress. Tính năng tích hợp này cho phép tự động đồng bộ tên miền và quản lý chứng chỉ SSL giữa Ultimate Multisite và hosting WPMU DEV.

## Tính năng
- Tự động đồng bộ tên miền
- Quản lý chứng chỉ SSL
- Mở rộng số lần xác minh chứng chỉ SSL

## Yêu cầu
Tính năng tích hợp sẽ tự động phát hiện nếu bạn đang sử dụng hosting WPMU DEV và sử dụng API tích hợp sẵn. Không cần cấu hình thêm nếu bạn đang dùng hosting WPMU DEV.

Tính năng tích hợp kiểm tra sự hiện diện của hằng số `WPMUDEV_HOSTING_SITE_ID`, hằng số này được tự động định nghĩa khi sử dụng hosting WPMU DEV.

## Hướng dẫn cài đặt

### 1. Xác minh Hosting WPMU DEV

Nếu bạn đang sử dụng hosting WPMU DEV, các hằng số cần thiết sẽ đã được định nghĩa sẵn. Hãy xác minh rằng:

1. Hằng số `WPMUDEV_HOSTING_SITE_ID` đã được định nghĩa trong môi trường của bạn
2. Bạn có tư cách thành viên WPMU DEV đang hoạt động với quyền truy cập API

### 2. Kích hoạt tính năng tích hợp

1. Trong trang quản trị WordPress, vào Ultimate Multisite > Settings
2. Chuyển đến tab "Domain Mapping"
3. Cuộn xuống phần "Host Integrations"
4. Bật tính năng tích hợp WPMU DEV
5. Nhấn "Save Changes"

## Cách hoạt động

### Đồng bộ tên miền

Khi một tên miền được ánh xạ trong Ultimate Multisite:

1. Tính năng tích hợp sử dụng API của WPMU DEV để thêm tên miền vào tài khoản hosting của bạn
2. Nó cũng tự động thêm phiên bản www của tên miền
3. WPMU DEV xử lý việc cấu hình tên miền và cấp phát chứng chỉ SSL

### Quản lý chứng chỉ SSL

Tính năng tích hợp được cấu hình để tăng số lần xác minh chứng chỉ SSL cho hosting WPMU DEV, vì có thể mất một khoảng thời gian để chứng chỉ SSL được cấp phát và cài đặt. Mặc định, hệ thống sẽ thử tối đa 10 lần để xác minh chứng chỉ SSL, so với 5 lần tiêu chuẩn.

## Lưu ý quan trọng

### Xóa tên miền

Hiện tại, API của WPMU DEV không cung cấp cách để xóa tên miền. Khi một ánh xạ tên miền bị xóa trong Ultimate Multisite, tên miền vẫn sẽ còn trong tài khoản hosting WPMU DEV của bạn. Bạn cần xóa thủ công từ bảng điều khiển hosting WPMU DEV nếu cần thiết.

### Xác thực API

Tính năng tích hợp sử dụng API key của WPMU DEV được lưu trữ trong cơ sở dữ liệu WordPress của bạn dưới dạng tùy chọn `wpmudev_apikey`. Điều này được thiết lập tự động khi bạn kết nối website với WPMU DEV.

## Xử lý sự cố

### Vấn đề kết nối API
- Xác minh rằng website của bạn đã được kết nối đúng cách với WPMU DEV
- Kiểm tra xem tùy chọn `wpmudev_apikey` đã được thiết lập trong cơ sở dữ liệu WordPress chưa
- Đảm bảo rằng tư cách thành viên WPMU DEV của bạn đang hoạt động

### Vấn đề chứng chỉ SSL
- WPMU DEV có thể mất một khoảng thời gian để cấp phát chứng chỉ SSL (thường từ 5-15 phút)
- Tính năng tích hợp được cấu hình để kiểm tra tối đa 10 lần cho chứng chỉ SSL
- Nếu chứng chỉ SSL vẫn không được cấp phát sau nhiều lần thử, hãy liên hệ bộ phận hỗ trợ WPMU DEV

### Tên miền không được thêm
- Kiểm tra nhật ký Ultimate Multisite để xem có thông báo lỗi nào không
- Xác minh rằng tên miền chưa được thêm vào WPMU DEV
- Đảm bảo rằng gói hosting WPMU DEV của bạn hỗ trợ số lượng tên miền bạn đang thêm
