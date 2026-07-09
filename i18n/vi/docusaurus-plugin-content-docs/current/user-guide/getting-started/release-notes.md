---
title: Ghi chú phát hành
sidebar_position: 9
_i18n_hash: f43456fb08d6572cbc3ddf432a51d7d5
---
# Ghi chú phát hành

## Phiên bản 2.13.0 — Phát hành vào 2026-06-05

- Mới: Đã thêm hỗ trợ sovereign-tenant cho các luồng tài khoản khách hàng, thanh toán, lập hóa đơn, site, hóa đơn, chuyển đổi mẫu và ánh xạ tên miền để các mạng tenant có thể chuyển khách hàng trở lại site chính cho các hành động được quản lý.
- Mới: Đã thêm kiểm tra thông tin xác thực gia hạn cho các membership định kỳ để gateway có thể tắt tự động gia hạn khi thiếu thỏa thuận thanh toán đã lưu, subscription hoặc vault token.
- Mới: Đã thêm xuất bản loopback được xác minh bằng HMAC cho việc tạo site đang chờ xử lý để giúp việc cấp phát từ thanh toán đến site đáng tin cậy hơn trên các host nơi tác vụ nền bị trì hoãn.
- Mới: Đã thêm các điểm mở rộng dành cho nhà phát triển cho URL SSO, tên miền cơ sở của biểu mẫu thanh toán và tự động tạo bản ghi tên miền.
- Sửa: SSO đáng tin cậy hơn trên các tên miền đã ánh xạ, lượt truy cập broker ẩn danh, đăng xuất và xung đột phụ thuộc giữa các plugin.
- Sửa: Việc tạo site đang chờ xử lý giờ đây phục hồi sau các cờ xuất bản cũ và tránh khiến khách hàng bị kẹt ở màn hình tạo site.
- Sửa: Bản ghi tên miền không còn được tạo cho các tên miền cơ sở biểu mẫu thanh toán dùng chung, và các tác vụ nền của nhà cung cấp host không dùng đến sẽ bị bỏ qua khi không có tích hợp nào đang hoạt động.
- Sửa: Các trường hợp biên của thanh toán, địa chỉ thanh toán, đặt lại mật khẩu, xác minh email, chuyển đổi mẫu, tour và dashboard khách hàng không còn chặn các luồng khách hàng bình thường.
- Sửa: Email broadcast giờ đây giữ riêng tư người nhận đồng thời tránh lỗi nghiêm trọng SMTP/plugin khi danh sách người nhận hoặc phương thức gửi thư thất bại.
- Sửa: Các trường hợp biên về gia hạn membership, hiển thị ngày hết hạn và thu thanh toán giờ đây tránh hết hạn ngay lập tức, sự cố hoặc bỏ lỡ các khoản thanh toán bắt buộc.
- Cải thiện: Khả năng tương thích WordPress được kiểm thử đến 7.0, tài nguyên Vue production được dựng lại từ nguồn npm, và phạm vi kiểm thử end-to-end Cypress giờ đây kiểm tra nhiều luồng thanh toán, thiết lập, SSO và gateway hơn.

## Phiên bản 2.12.0 — Phát hành vào 2026-05-15

- Mới: Đã thêm Hostinger (hPanel) làm nhà cung cấp host được hỗ trợ với tích hợp ánh xạ tên miền
- Mới: Site Exporter giờ đây xử lý các gói nhập mạng để khôi phục site trên toàn mạng một cách tinh gọn
- Sửa: Email broadcast BCC giờ đây dùng header undisclosed-recipients để ngăn lộ địa chỉ người nhận
- Sửa: Ngày hết hạn membership không còn bị hỏng khi lưu với một giá trị không phải ngày
- Sửa: Các cập nhật membership Stripe giờ đây xóa đúng các giảm giá mà không gọi API deleteDiscount đã ngừng dùng
- Sửa: Chuyển hướng SSO trên các site được ánh xạ tên miền giờ đây được giới hạn để ngăn vòng lặp chuyển hướng vô hạn
- Sửa: Lựa chọn trong trình chọn hình ảnh của trình hướng dẫn thiết lập giờ đây cập nhật đúng mô hình dữ liệu bên dưới
- Sửa: Site Exporter CLI giờ đây giữ đúng lựa chọn site mạng mặc định
- Cải thiện: Đã loại bỏ wp-cli đóng gói khỏi gói plugin, giảm kích thước plugin

## Phiên bản 2.11.0 — Phát hành vào 2026-05-11

- Mới: Xuất site giờ đây đóng gói một `index.php` tự khởi động để tệp ZIP có thể được cài đặt trên host mới mà không cần cài đặt plugin riêng.
- Mới: Xuất mạng cho phép quản trị viên xuất tất cả subsite trong một kho lưu trữ duy nhất từ trang quản trị Site Export.
- Mới: Công tắc gói Allow Site Templates giờ đây được thực thi qua chuỗi dự phòng, giới hạn chính xác tính khả dụng của mẫu theo giới hạn gói.
- Mới: Trình chỉnh sửa biểu mẫu thanh toán cảnh báo khi một sản phẩm được thêm mà chưa cấu hình trường bắt buộc.
- Mới: Tab cài đặt Import/Export giờ đây mô tả rõ phạm vi của nó và liên kết trực tiếp đến công cụ Site Export.

## Phiên bản 2.10.0 — Phát hành vào 2026-05-05

- Mới: Trình hướng dẫn thiết lập PayPal có hướng dẫn để nhập thông tin xác thực thủ công với cổng cờ OAuth nhằm cấu hình gateway liền mạch.
- Mới: Bảng khách hàng chuyển đổi mẫu được thiết kế lại với thẻ mẫu hiện tại, lưới bền vững và nút **Reset current template**.
- Sửa: Chuyển đổi mẫu không còn làm treo UI khi AJAX thất bại.
- Sửa: Trạng thái quyền chuyển đổi mẫu được bảo vệ khỏi truy cập trái phép.
- Sửa: Các trường nhập ghi đè site được xác thực trước khi lưu.
- Sửa: Lời nhắc địa chỉ thanh toán giờ đây được hiển thị khi địa chỉ trống.
- Sửa: Đã giải quyết các thông báo ngừng dùng null-to-string trong PHP 8.1.
- Sửa: Currents được tải lười trước init hook để ngăn vấn đề về thời điểm.
- Sửa: Đường dẫn SSO đã lọc được tôn trọng trên tất cả các luồng đăng nhập.
- Sửa: Các tùy chọn định danh site trống được giữ nguyên khi lưu.

## Phiên bản 2.9.0 — Phát hành vào 2026-04-30

- Mới: Đã thêm xuất và nhập single-site trong **Tools > Export & Import**.
- Sửa: Các tệp ZIP xuất giờ đây được phục vụ qua một endpoint tải xuống đã xác thực.
- Sửa: Đã khắc phục rủi ro SQL injection và các vấn đề truy vấn trong truy vấn xuất/nhập đang chờ xử lý.
- Sửa: Site đang chờ xử lý không được xuất bản khi admin xác minh email khách hàng thủ công.
- Sửa: Các bản ghi pending_site mồ côi được dọn dẹp khi thiếu membership.
- Sửa: Đã khắc phục padding điều hướng cài đặt và điều hướng anchor tìm kiếm.
- Sửa: Các site đang chờ xử lý giờ đây được hiển thị đầu tiên trong chế độ xem All Sites.
- Sửa: Đã thêm header User-Agent cho nhà cung cấp ảnh chụp màn hình (mShots) để ngăn lỗi 403.
- Sửa: Đã giải quyết phụ thuộc vòng trong lịch cron nhập.
- Sửa: ID tour được chuẩn hóa thành dấu gạch dưới trong các khóa cài đặt người dùng.
- Cải thiện: ZipArchive giờ đây được dùng thay cho Alchemy/Zippy để tương thích tốt hơn.

## Phiên bản 2.8.0 — Phát hành vào 2026-04-29

- Mới: Đã thêm công tắc Enable Jumper vào UI cài đặt Other Options.
- Mới: Đã thêm cột Status vào bảng danh sách biểu mẫu checkout.
- Mới: Trình tải tệp addon sunrise cho các phần mở rộng sunrise MU-plugin tùy chỉnh.
- Cải tiến: Đã xóa cài đặt opt-in báo cáo lỗi khỏi trang cài đặt.
- Sửa: Thẻ site trên trang cảm ơn — hình ảnh nay được giới hạn kích thước và liên kết được tạo kiểu đúng.
- Sửa: Nhà cung cấp ảnh chụp màn hình đã chuyển từ thum.io sang WordPress.com mShots.
- Sửa: Enable Registration và Default Role nay đặt giá trị mặc định đúng khi cài đặt mới.
- Sửa: `get_site_url()` không còn trả về rỗng khi tên miền bao gồm một cổng.
- Sửa: Các tệp media khi nhân bản nay được sao chép đúng khi cài đặt `copy_media` trống.
- Sửa: Object cache được vô hiệu hóa đúng sau khi ghi sitemeta kích hoạt trên toàn mạng.
- Sửa: Tên miền tùy chỉnh được tự động nâng lên làm chính khi xác minh DNS cho tên miền 3 phần.
- Sửa: Tư cách thành viên đang chờ được hủy khi khoản thanh toán hết hạn được dọn dẹp.
- Sửa: Trình kiểm tra độ mạnh mật khẩu được gắn lại sau khi lời nhắc đăng nhập nội tuyến bị đóng.
- Sửa: Đã dừng tải lại trang vô hạn trên trang cảm ơn khi site đã được tạo.
- Sửa: Tùy chọn đăng ký của lõi WP được đồng bộ khi kích hoạt plugin và lưu cài đặt.
- Sửa: Đã thêm bảo vệ hết hạn null trong `calculate_expiration` để tương thích với PHP 8.4.
- Sửa: Chặn đăng ký trùng lặp khi khách hàng đã có tư cách thành viên đang hoạt động.
- Sửa: Đã thêm kiểm tra null cho `date_expiration` trong checkout.
- Sửa: Tăng cường quy trình cấp phát site — giới hạn, suy luận tư cách thành viên, nâng cấp tên miền.
- Sửa: Nhãn trạng thái kiểm tra trước cài đặt được sửa thành NOT Activated khi kiểm tra thất bại.
- Sửa: Tên miền checkout được dùng cho URL xác minh email.
- Sửa: Tự động đăng nhập sau checkout khi không có trường mật khẩu.
- Sửa: Tư cách thành viên miễn phí không còn hết hạn — được xem là trọn đời.
- Sửa: Cổng xác minh email giữ việc xuất bản site cho đến khi khách hàng xác minh email.
- Sửa: Đã sửa đường dẫn gốc endpoint SES v2 API và tuyến identity.
- Sửa: Hook `wu_inline_login_error` được phát ra trong khối bắt lỗi trước khi gửi.
