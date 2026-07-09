---
title: Nhật ký thay đổi
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Nhật ký thay đổi {#changelog}

## 1.18.0 — Phát hành vào 2026-06-29 {#1180--released-on-2026-06-29}

### Mới {#new}

- **Công cụ Google Calendar** — đọc các lịch và sự kiện đã cấu hình cho các tự động hóa có nhận biết lịch trình
- **Ánh xạ liên hệ và trợ giúp người tham dự** — khớp người tham gia lịch với người dùng và liên hệ của trang
- **Cổng phê duyệt của con người và bản ghi nhắc nhở** — tạm dừng tự động hóa để xem xét và tránh thông báo trùng lặp
- **Nhà cung cấp SMS TextBee** — gửi thông báo tin nhắn văn bản đã cấu hình qua TextBee
- **Gói đồng hành nâng cao** — thêm các công cụ hệ thống tệp nhà phát triển đáng tin cậy, cơ sở dữ liệu, WP-CLI, bộ điều phối REST, trình tạo plugin, ảnh chụp nhanh git, quản lý người dùng và benchmark được phân phối riêng với bản dựng WordPress.org

### Cải thiện {#improved}

- **Thiết lập dịch vụ Superdav được quản lý** — thêm các endpoint dịch vụ được lưu trữ và tự động cung cấp kết nối cho các trang được hỗ trợ
- **Đóng gói bản phát hành** — dựng các ZIP lõi và nâng cao riêng biệt, xuất bản cả hai trên GitHub và chỉ gửi gói lõi tới WordPress.org

### Đã sửa {#fixed}

- **Độ tin cậy của yêu cầu AI** — cải thiện lựa chọn mô hình, thời gian chờ yêu cầu, mô hình thiết lập mặc định, xử lý văn bản suy luận và hướng dẫn thử lại cho các lệnh gọi công cụ không hợp lệ
- **Gia cố lịch và nhắc nhở** — tăng cường token Google Calendar và chống trùng lặp nhắc nhở
- **Tiếp nhận ban đầu và tiếp tục sau phê duyệt** — sửa lỗi khởi chạy tiếp nhận ban đầu ở frontend và tiếp tục khả năng đã xác nhận
- **Vấn đề đánh giá đóng gói WordPress.org** — xử lý phản hồi đánh giá đóng gói cho bản phát hành lõi

## 1.16.0 — Phát hành vào 2026-05-20 {#1160--released-on-2026-05-20}

### Mới {#new-1}

- **Khả năng tạo Logo SVG** — Theme Builder hiện có thể tạo và nhúng SVG logo tùy chỉnh với làm sạch an toàn theo namespace
- **Tải ảnh lên trong phỏng vấn khám phá** — phỏng vấn khám phá của Theme Builder hiện bao gồm bước tải ảnh lên để có ngữ cảnh thiết kế phong phú hơn
- **Khả năng xác thực độ tương phản bảng màu** — kiểm tra các cặp màu về mức tuân thủ WCAG trước khi áp dụng cho một theme
- **Thực đơn dịch vụ khách sạn** — Theme Builder hiện có thể tạo các trang thực đơn đồ ăn và đồ uống có cấu trúc cho doanh nghiệp dịch vụ khách sạn
- **Kết xuất xem trước trên máy tính và di động** — xem trước thiết kế của bạn trên thiết bị máy tính và di động trong khi chọn hướng thiết kế
- **Tham số nhãn điều hướng** — khả năng tạo menu hiện hỗ trợ `navigation_label` riêng biệt tách khỏi tiêu đề trang
- **Tính sẵn có của công cụ Bậc 1** — sd-ai-agent/site-scrape hiện là công cụ Bậc 1 có sẵn theo mặc định trong Theme Builder

### Đã sửa {#fixed-1}

- **Bộ nhớ đệm AI Client** — hiện được hỗ trợ bởi transients để duy trì qua nhiều yêu cầu, ngăn mất dữ liệu trên các tác vụ agent chạy lâu
- **Liên kết hành động hàng plugin** — đã sửa và đổi tên để rõ ràng hơn

## 1.10.0 — Phát hành vào 2026-05-05 {#1100--released-on-2026-05-05}

### Mới {#new-2}

- **Tìm kiếm internet Tavily** — thêm Tavily làm nhà cung cấp tìm kiếm để có kết quả tìm kiếm internet phong phú hơn bên cạnh Brave Search
- **Kỹ năng tích hợp nhận biết theme** — hướng dẫn kỹ năng Block Themes, Classic Themes, Kadence Blocks và Kadence Theme hiện được đi kèm với plugin
- **Khả năng biểu mẫu liên hệ của trình dựng trang** — thêm biểu mẫu liên hệ vào bất kỳ trang nào trực tiếp từ giao diện chat

### Cải thiện {#improved-1}

- **Tái cấu trúc tích hợp WooCommerce** — hiện sử dụng các API WooCommerce gốc để có độ tin cậy và khả năng tương thích tốt hơn
- **Danh sách nhà cung cấp tự động làm mới** — khi bất kỳ plugin nào được kích hoạt hoặc vô hiệu hóa

### Đã sửa {#fixed-2}

- **Khả năng navigate-to** — đã sửa vòng lặp tải lại vô hạn trên một số trang admin
- **Khả năng list-posts** — hiện phân giải chính xác tên chuyên mục và thẻ thành slug
- **Lệnh WP-CLI** — khôi phục các bí danh namespace bị thiếu sau lần tái cấu trúc trước đó
- **Tự động hóa sự kiện** — xử lý nhẹ nhàng các trang mà bảng tự động hóa chưa được tạo
- **Khả năng memory-save** — hiện sử dụng đúng tiền tố namespace trong trình tạo chỉ dẫn hệ thống
- **Kết quả công cụ dạng vô hướng** — hiện được bọc đúng cách trước khi trả về cho AI
- **Thống kê sử dụng** — hiện xử lý đúng định dạng khóa khả năng cũ khi nâng cấp từ các phiên bản cũ hơn
