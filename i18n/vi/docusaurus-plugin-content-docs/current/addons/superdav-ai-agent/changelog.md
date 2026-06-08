---
title: Nhật ký thay đổi
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# Nhật ký thay đổi

## 1.16.0 — Phát hành ngày 2026-05-20

### Tính năng mới

- **Khả năng tạo Logo SVG** — Theme Builder giờ đây có thể tạo và nhúng các SVG logo tùy chỉnh với khả năng khử trùng an toàn theo namespace.
- **Tải ảnh trong phỏng vấn khám phá** — Theme Builder discovery interview hiện bao gồm bước tải ảnh để có bối cảnh thiết kế phong phú hơn.
- **Kiểm tra độ tương phản bảng màu** — Kiểm tra các cặp màu để đảm bảo tuân thủ WCAG trước khi áp dụng vào theme.
- **Menu khách sạn** — Theme Builder giờ đây có thể tạo các trang menu đồ ăn và thức uống có cấu trúc cho các doanh nghiệp ngành khách sạn.
- **Hiển thị bản xem trước trên máy tính và di động** — Xem bản thiết kế của bạn trên các thiết bị máy tính và di động trong quá trình chọn hướng thiết kế.
- **Tham số nhãn điều hướng** — Tính năng Create Menu hiện hỗ trợ `navigation_label` riêng biệt, tách khỏi tiêu đề trang.
- **Tính khả dụng của công cụ Tier 1** — sd-ai-agent/site-scrape hiện là công cụ Tier 1 và được cung cấp mặc định trong Theme Builder.

### Đã sửa lỗi

- **Bộ nhớ cache của Client AI** — Giờ được hỗ trợ bằng transients để duy trì dữ liệu giữa các yêu cầu, ngăn ngừa mất dữ liệu trong các tác vụ agent chạy dài.
- **Liên kết hành động hàng plugin** — Đã sửa và đổi tên để rõ ràng hơn.

## 1.10.0 — Phát hành ngày 2026-05-05

### Tính năng mới

- **Tìm kiếm internet Tavily** — Thêm Tavily làm nhà cung cấp tìm kiếm để có kết quả tìm kiếm internet phong phú hơn, bên cạnh Brave Search.
- **Các kỹ năng tích hợp theo theme** — Block Themes, Classic Themes, Kadence Blocks và Kadence Theme skill guides hiện được tích hợp sẵn với plugin.
- **Khả năng form liên hệ của site builder** — Thêm form liên hệ vào bất kỳ trang nào trực tiếp từ giao diện chat.

### Cải tiến

- **Tích hợp WooCommerce được tái cấu trúc** — Giờ sử dụng các API WooCommerce gốc để độ tin cậy và khả năng tương thích tốt hơn.
- **Danh sách nhà cung cấp tự động làm mới** — Khi bất kỳ plugin nào được kích hoạt hoặc vô hiệu hóa.

### Đã sửa lỗi

- **Khả năng navigate-to** — Đã sửa vòng lặp tải lại vô hạn trên một số trang quản trị.
- **Khả năng list-posts** — Giờ xử lý chính xác tên danh mục và thẻ thành slug.
- **Lệnh WP-CLI** — Khôi phục các bí danh namespace bị thiếu sau lần tái cấu trúc trước đó.
- **Tự động hóa sự kiện** — Xử lý mượt mà các trang web mà bảng tự động hóa chưa được tạo.
- **Khả năng memory-save** — Giờ sử dụng tiền tố namespace chính xác trong trình xây dựng hướng dẫn hệ thống.
- **Kết quả công cụ Scalar** — Giờ được bọc đúng cách trước khi trả về cho AI.
- **Số liệu thống kê sử dụng** — Giờ xử lý chính xác định dạng khóa ability cũ khi nâng cấp từ các phiên bản cũ hơn.
