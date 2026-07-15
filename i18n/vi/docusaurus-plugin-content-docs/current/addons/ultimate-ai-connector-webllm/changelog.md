---
title: Nhật ký thay đổi của Ultimate AI Connector cho WebLLM
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Nhật ký thay đổi Ultimate AI Connector cho WebLLM

## Phiên bản 1.1.0 — Phát hành ngày 2026-04-09 {#version-110--released-on-2026-04-09}

* **Mới:** Widget chat nổi với chỉ báo trạng thái trên thanh quản trị — Bất kỳ người dùng nào đăng nhập cũng có thể gửi lệnh (prompt) trực tiếp đến LLM chạy phía trình duyệt từ giao diện người dùng.
* **Mới:** Môi trường chạy SharedWorker — Giờ đây, engine MLC chạy trong SharedWorker, cho phép nhiều tab chia sẻ một phiên làm việc GPU thay vì phải tranh giành tài nguyên.
* **Mới:** Bộ chặn (interceptor) middleware apiFetch — Các yêu cầu REST của WordPress khớp với mẫu của AI Client SDK sẽ được định tuyến minh bạch đến bộ điều phối WebLLM cục bộ, không cần vòng lặp HTTP khứ hồi.
* **Mới:** Giao diện người dùng cài đặt widget trong bảng điều khiển Connector, cho phép bật/tắt widget chat và cấu hình hành vi tự động gợi ý (auto-prompt).
* **Sửa lỗi:** Buộc sử dụng backend bộ nhớ cache IndexedDB để đảm bảo việc tải trọng số mô hình không bị gián đoạn bởi các chuyển hướng CDN HuggingFace xet, vốn làm hỏng đường dẫn Cache API mặc định.
* **Sửa lỗi:** Bỏ qua việc ghi đè KV-cache context_window cho các mô hình nhúng (embedding models) (vì chúng không có bộ giải mã và việc ghi đè này đã gây ra lỗi thời gian chạy).
* **Sửa lỗi:** Quảng bá mô hình ứng viên khởi động lạnh (cold-start candidate model) tại `/webllm/v1/models` ngay cả trước khi tab worker tải xong, giúp người dùng SDK thấy mô hình ngay lập tức.
* **Sửa lỗi:** Kết nối WebLLM vào bộ lọc `wpai_preferred_text_models` để tính năng Thử nghiệm AI (AI Experiments) được định tuyến đến engine trình duyệt khi mô hình được cấu hình.
* **Cải tiến:** Các bản sửa lỗi liên quan đến cache-busting, chuẩn hóa nội dung và tham chiếu phần cứng đã được phát hiện trong quá trình kiểm thử đầu cuối (end-to-end testing).

## Phiên bản 1.0.0 — Phát hành ban đầu {#version-100--initial-release}
