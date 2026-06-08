---
title: Ghi chú phát hành
sidebar_position: 9
_i18n_hash: e9f9d20e55608b81945ab7dfcf495fcb
---
# Ghi chú phát hành

## Phiên bản 2.12.0 — Phát hành ngày 2026-05-15

- Tính năng mới: Thêm Hostinger (hPanel) là nhà cung cấp hosting được hỗ trợ với tích hợp ánh xạ tên miền.
- Tính năng mới: Site Exporter hiện xử lý các gói nhập mạng (network import bundles) để khôi phục trang web trên toàn mạng một cách hợp lý.
- Khắc phục lỗi: Email gửi qua BCC hiện sử dụng tiêu đề `undisclosed-recipients` để ngăn lộ địa chỉ người nhận.
- Khắc phục lỗi: Ngày hết hạn thành viên không còn bị hỏng khi lưu bằng giá trị không phải là ngày.
- Khắc phục lỗi: Cập nhật thành viên Stripe hiện xóa chiết khấu chính xác mà không cần gọi API `deleteDiscount` đã lỗi thời.
- Khắc phục lỗi: Chuyển hướng SSO trên các trang web được ánh xạ tên miền hiện được giới hạn để ngăn vòng lặp chuyển hướng vô hạn.
- Khắc phục lỗi: Việc chọn hình ảnh trong trình chọn của Setup wizard hiện cập nhật chính xác mô hình dữ liệu cơ bản.
- Khắc phục lỗi: Site Exporter CLI hiện bảo toàn lựa chọn trang web mạng mặc định chính xác.
- Cải tiến: Đã loại bỏ wp-cli được đóng gói từ gói plugin, giúp giảm kích thước plugin.

## Phiên bản 2.11.0 — Phát hành ngày 2026-05-11

- Tính năng mới: Xuất trang web hiện đóng gói một `index.php` tự khởi động, cho phép ZIP được cài đặt trên host mới mà không cần cài đặt plugin riêng.
- Tính năng mới: Xuất mạng cho phép quản trị viên xuất tất cả các trang con (subsites) trong một kho lưu trữ duy nhất từ trang quản trị Site Export.
- Tính năng mới: Chức năng bật/tắt Site Templates hiện được thực thi thông qua chuỗi dự phòng, giới hạn chính xác tính khả dụng của template theo giới hạn gói dịch vụ.
- Tính năng mới: Trình chỉnh sửa biểu mẫu thanh toán cảnh báo khi sản phẩm được thêm vào mà không cấu hình trường bắt buộc.
- Tính năng mới: Tab cài đặt Import/Export hiện mô tả rõ phạm vi của nó và liên kết trực tiếp đến công cụ Site Export.

## Phiên bản 2.10.0 — Phát hành ngày 2026-05-05

- Tính năng mới: Wizard thiết lập PayPal có hướng dẫn cho việc nhập thông tin xác thực thủ công với cổng xác thực OAuth để cấu hình cổng thanh toán liền mạch.
- Tính năng mới: Bảng điều khiển khách hàng chuyển đổi Template được thiết kế lại với thẻ template hiện tại, lưới cố định và nút **Đặt lại template hiện tại**.
- Khắc phục lỗi: Chuyển đổi template không còn làm treo giao diện người dùng khi AJAX thất bại.
- Khắc phục lỗi: Trạng thái quyền chuyển đổi template được bảo vệ khỏi truy cập trái phép.
- Khắc phục lỗi: Các đầu vào ghi đè trang web (Site override inputs) được xác thực trước khi lưu.
- Khắc phục lỗi: Lời nhắc địa chỉ thanh toán hiện được hiển thị khi địa chỉ trống.
- Khắc phục lỗi: Các thông báo loại bỏ (deprecation notices) về null-to-string của PHP 8.1 đã được giải quyết.
- Khắc phục lỗi: Currents được tải lười (lazy-loaded) trước hook `init` để ngăn các vấn đề về thời gian.
- Khắc phục lỗi: Đường dẫn SSO đã lọc được tôn trọng trên tất cả các luồng đăng nhập.
- Khắc phục lỗi: Các tùy chọn nhận dạng trang web trống được bảo toàn khi lưu.

## Phiên bản 2.9.0 — Phát hành ngày 2026-04-30

- Tính năng mới: Thêm xuất và nhập trang web đơn lẻ dưới **Tools > Export & Import**.
- Khắc phục lỗi: Các tệp ZIP xuất hiện được phục vụ qua một điểm cuối tải xuống đã xác thực.
- Khắc phục lỗi: Đã sửa các rủi ro SQL injection và các vấn đề truy vấn trong các truy vấn xuất/nhập đang chờ xử lý.
- Khắc phục lỗi: Trang web đang chờ xử lý không được xuất bản khi quản trị viên xác minh email khách hàng thủ công.
- Khắc phục lỗi: Các bản ghi `pending_site` bị mồ côi được dọn dẹp khi thiếu thành viên.
- Khắc phục lỗi: Đã sửa padding điều hướng cài đặt và điều hướng neo tìm kiếm.
- Khắc phục lỗi: Các trang web đang chờ xử lý hiện được hiển thị đầu tiên trong chế độ xem All Sites.
- Khắc phục lỗi: Đã thêm tiêu đề User-Agent của nhà cung cấp ảnh chụp màn hình (mShots) để ngăn lỗi 403.
- Khắc phục lỗi: Đã giải quyết sự phụ thuộc vòng tròn của lịch trình cron nhập.
- Khắc phục lỗi: ID Tour được chuẩn hóa thành dấu gạch dưới trong các khóa cài đặt người dùng.
- Cải tiến: Giờ sử dụng ZipArchive thay vì Alchemy/Zippy để tương thích tốt hơn.

## Phiên bản 2.8.0 — Phát hành ngày 2026-04-29

- Tính năng mới: Thêm công tắc Enable Jumper vào giao diện cài đặt Other Options.
- Tính năng mới: Thêm cột Trạng thái vào bảng danh sách biểu mẫu thanh toán.
- Tính năng mới: Bộ tải tệp sunrise addon cho các tiện ích mở rộng MU-plugin sunrise tùy chỉnh.
- Cải tiến: Đã loại bỏ tùy chọn bật báo cáo lỗi khỏi trang cài đặt.
- Khắc phục lỗi: Thẻ trang cảm ơn — hình ảnh hiện được giới hạn và liên kết được định kiểu chính xác.
- Khắc phục lỗi: Nhà cung cấp ảnh chụp màn hình đã chuyển từ thum.io sang WordPress.com mShots.
- Khắc phục lỗi: Enable Registration và Default Role hiện đặt các giá trị mặc định chính xác khi cài đặt mới.
- Khắc phục lỗi: `get_site_url()` không còn trả về giá trị trống khi tên miền bao gồm cổng (port).
- Khắc phục lỗi: Các tệp media được sao chép đúng khi cài đặt `copy_media` trống.
- Khắc phục lỗi: Object cache bị vô hiệu hóa chính xác sau khi ghi sitemeta network-activate.
- Khắc phục lỗi: Tên miền tùy chỉnh tự động được quảng bá thành chính khi xác minh DNS cho các tên miền 3 phần.
- Khắc phục lỗi: Thành viên đang chờ xử lý bị hủy khi thanh toán hết hạn được dọn dẹp.
- Khắc phục lỗi: Bộ kiểm tra độ mạnh mật khẩu được gắn lại sau khi bỏ qua lời nhắc đăng nhập nội tuyến.
- Khắc phục lỗi: Tải lại trang vô hạn đã dừng trên trang cảm ơn khi trang web đã được tạo.
- Khắc phục lỗi: Tùy chọn đăng ký WP core được đồng bộ hóa khi kích hoạt plugin và lưu cài đặt.
- Khắc phục lỗi: Thêm lớp bảo vệ null cho `calculate_expiration` để tương thích với PHP 8.4.
- Khắc phục lỗi: Việc đăng ký trùng lặp bị chặn khi khách hàng đã có thành viên đang hoạt động.
- Khắc phục lỗi: Thêm kiểm tra null cho `date_expiration` trong thanh toán.
- Khắc phục lỗi: Quy trình cấp trang web được tăng cường — giới hạn, suy luận thành viên, quảng bá tên miền.
- Khắc phục lỗi: Nhãn trạng thái kiểm tra cài đặt trước được sửa thành NOT Activated khi kiểm tra thất bại.
- Khắc phục lỗi: Tên miền thanh toán được sử dụng cho các URL xác minh email.
- Khắc phục lỗi: Tự động đăng nhập sau thanh toán khi không có trường mật khẩu.
- Khắc phục lỗi: Thành viên miễn phí không còn hết hạn — được coi là trọn đời.
- Khắc phục lỗi: Cổng xác minh email giữ trạng thái xuất bản trang web cho đến khi khách hàng xác minh email.
- Khắc phục lỗi: Đường dẫn cơ sở và tuyến nhận dạng API SES v2 đã được sửa.
- Khắc phục lỗi: Hook `wu_inline_login_error` được phát ra trong khối bắt pre-submit.
