---
title: Nhật ký thay đổi Đa mạng
sidebar_position: 99
_i18n_hash: 277edeab455a1d2e70dbbb4617f115a0
---
# Nhật ký thay đổi Multi-Network

### 1.3.0
* Mới: Trình xem trước mẫu mạng (Network template previewer) — cho phép duyệt và xem trước các mẫu mạng bằng bảng điều khiển trực tiếp trước khi mua.
* Mới: Bộ chọn mẫu mạng tại trang thanh toán (checkout) — khách hàng có thể chọn mẫu mạng trong quá trình đăng ký và thanh toán.
* Mới: Đăng nhập SSO liên mạng bằng liên kết ma thuật (Cross-network magic link SSO) — khách hàng có thể truy cập các mạng con một cách liền mạch thông qua xác thực bằng liên kết ma thuật.
* Mới: Nhân bản media mạng — media của trang web được sao chép chính xác khi nhân bản các mạng từ một mẫu.
* Sửa: Nhân bản mạng hiện hoạt động mà không cần addon đa người thuê (multi-tenancy addon); quyền siêu quản trị sẽ được cấp lại sau khi nhân bản.
* Sửa: Việc tạo mạng hiện tương thích với WooCommerce và tất cả các cổng thanh toán.
* Sửa: Số cổng (Port number) hiện được bao gồm trong quá trình tạo tên miền dự phòng.
* Sửa: CSS của bộ chọn mẫu (Template picker) đã được chuyển sang stylesheet được xếp hàng (enqueued stylesheet) để hiển thị chính xác trên tất cả các theme.
* Sửa: Bảo vệ chống lại khóa `network_id` không xác định trong phạm vi truy vấn trang web (site query scope).
* Sửa: Kiểm tra quyền mạng trước khi chuyển ngữ cảnh (context switching) ngăn ngừa lỗi thuộc tính bảng `wpdb`.

### 1.0.4
* Sửa: Tạo mạng mới.
* Sửa: Hiển thị Menu.

### 1.0.3
* Cập nhật lên Plugin Update Checker v5
* Thêm tiêu đề plugin WordPress hiện đại
* Cải thiện khả năng tương thích với các phiên bản WordPress mới nhất

### 1.0.2
* Sửa lỗi và cải thiện hiệu suất
* Tăng cường khả năng cô lập mạng

### 1.0.0
* Bản phát hành ban đầu
* Chức năng đa mạng cốt lõi
* Tích hợp với Multisite Ultimate
