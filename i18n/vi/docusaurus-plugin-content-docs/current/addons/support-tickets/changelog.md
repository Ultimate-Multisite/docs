---
title: Nhật ký thay đổi của Yêu cầu Hỗ trợ
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Nhật ký thay đổi Support Tickets

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Cải tiến: Loại bỏ thư mục `vendor/` khỏi việc theo dõi của Git (vì đã được bao gồm trong `.gitignore`), giúp giảm kích thước kho lưu trữ.
* Cải tiến: Đã kiểm thử tương thích với WordPress 7.0.

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Sửa lỗi: Cho phép chấp nhận các giá trị null trong các bộ thiết lập (setters) của mô hình ticket có thể null.
* Sửa lỗi: Lưu trữ tất cả các ticket trong các bảng toàn cục cấp mạng (network-wide) để hỗ trợ Multisite đúng cách.
* Sửa lỗi: Ẩn các trường dành cho nhân viên và khắc phục lỗi chuyển hướng trang trống trên form tạo ticket mới của khách hàng.
* Sửa lỗi: Thay thế các lời gọi `add_meta()` chưa xác định bằng `update_meta()` chính xác để lưu trữ siêu dữ liệu.
* Sửa lỗi: Thay thế kiểm tra capability chưa đăng ký bằng `wu_view_all_support_tickets` chính xác.
* Sửa lỗi: Thêm các bộ xử lý AJAX bị thiếu cho các hành động trạng thái ticket, gán ticket và chỉnh sửa nhanh.
* Sửa lỗi: Sửa tên phương thức phát hiện phản hồi của nhân viên trong các trang xem ticket.
* Sửa lỗi: Hợp nhất các bộ xử lý phản hồi trùng lặp và căn chỉnh tên hành động nonce.
* Sửa lỗi: Thêm giao diện frontend bị thiếu cho shortcode `[wu_submit_ticket]`.
* Sửa lỗi: Thêm cột `user_id` bị thiếu và sửa phương thức `Support_Ticket::get_user_id()`.
* Sửa lỗi: Loại bỏ dấu ngoặc kép kép thừa trong thẻ tùy chọn bộ lọc ưu tiên.
* Sửa lỗi: Thêm bảng quản lý ticket dành cho quản trị viên mạng (network admin) cho siêu quản trị viên.
* Cải tiến: Hợp nhất CSS quản trị vào một tệp stylesheet bên ngoài duy nhất.
* Cải tiến: Loại bỏ mục con Settings khỏi menu quản trị của trang con (subsite).
* Cải tiến: Chỉ tải các tài nguyên frontend có điều kiện trên các trang ticket hỗ trợ.
* Cải tiến: Bỏ qua autoloader của plugin khi autoloader gốc của Bedrock đã tải các dependency.

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Bổ sung: Chức năng xem ticket đầy đủ cho cả khu vực quản trị (admin) và giao diện người dùng (frontend).
* Bổ sung: Bộ xử lý AJAX cho việc gửi phản hồi ticket.
* Bổ sung: Hỗ trợ chức năng phản hồi ticket với việc xử lý form phù hợp.
* Bổ sung: Hiển thị thông báo thích hợp cho việc gửi và phản hồi ticket trong admin.
* Bổ sung: Tự động liên kết ticket với người dùng hiện tại khi khách hàng tự gửi.
* Bổ sung: Tăng cường bảo mật để ngăn khách hàng ghi đè quyền sở hữu ticket.
* Bổ sung: Các hàm trợ giúp bị thiếu (như `wu_format_date`, `wu_user_can_view_ticket`, v.v.).
* Bổ sung: Tải xuống và xử lý tệp đính kèm phù hợp.
* Bổ sung: Hệ thống thông báo qua email cho các phản hồi và thay đổi trạng thái ticket.
* Sửa lỗi: Form phản hồi ticket hiện đã bao gồm ID ticket cần thiết.
* Sửa lỗi: Vấn đề hiển thị thông báo trong các trang xem ticket của admin.
* Sửa lỗi: Lỗi cú pháp trong các hàm support ticket.
* Cải tiến: Cấu trúc cơ sở dữ liệu với các lớp truy vấn và schema phù hợp cho phản hồi và tệp đính kèm.
* Cải tiến: Chuyển đổi sang các thuộc tính (properties) thực tế thay vì các thuộc tính (attributes) cho các mô hình ticket.

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Cập nhật: Đổi tiền tố (prefix) thành `ultimate-multisite` để đảm bảo tính nhất quán.
* Cập nhật: Chuẩn hóa tên miền văn bản (text domain).
* Sửa lỗi: Các sửa lỗi và cải tiến nhỏ.

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Phát hành ban đầu
* Hệ thống quản lý ticket hoàn chỉnh
* Kiểm soát truy cập đa cấp
* Hệ thống hội thoại theo chủ đề
* Hỗ trợ tệp đính kèm
* Hệ thống thông báo qua email
* Giao diện quản trị và khách hàng
* Thống kê và báo cáo
