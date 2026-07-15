---
title: Ultimate AI Connector for WebLLM Changelog
sidebar_position: 99
_i18n_hash: da117fc30b104eada947892d417a2899
---
# Lịch sử thay đổi của Ultimate AI Connector cho WebLLM

## Phiên bản 1.1.0 — Phát hành ngày 2026-04-09 {#version-110--released-on-2026-04-09}

* **Mới:** Tiện ích chat nổi với chỉ báo trạng thái trên admin-bar — bất kỳ người dùng nào đăng nhập đều có thể yêu cầu LLM phía trình duyệt trực tiếp từ giao diện người dùng.
* **Mới:** SharedWorker runtime — engine MLC giờ đây chạy trong SharedWorker, cho phép nhiều tab chia sẻ một phiên GPU thay vì phải tranh giành nhau.
* **Mới:** apiFetch middleware interceptor — Các yêu cầu REST của WordPress khớp với mẫu AI Client SDK sẽ được định tuyến minh bạch đến WebLLM broker cục bộ, không cần vòng lặp HTTP round-trip.
* **Mới:** Giao diện cài đặt Widget trong bảng điều khiển Connector, giúp bật/tắt tiện ích chat và cấu hình hành vi tự động gợi ý (auto-prompt).
* **Sửa:** Buộc sử dụng backend cache IndexedDB để đảm bảo việc tải trọng lượng mô hình (model weight) vẫn hoạt động ngay cả khi có chuyển hướng CDN của HuggingFace xet, vốn làm hỏng đường dẫn Cache API mặc định.
* **Sửa:** Bỏ qua việc ghi đè KV-cache cho các mô hình nhúng (embedding models) (vì chúng không có decoder và việc ghi đè này đã gây ra lỗi runtime).
* **Sửa:** Quảng cáo mô hình ứng viên khởi động lạnh (cold-start candidate model) trong /webllm/v1/models trước khi tab worker tải xong, để người dùng SDK thấy mô hình ngay lập tức.
* **Sửa:** Kết nối WebLLM vào bộ lọc wpai_preferred_text_models để tính năng AI Experiments sẽ chuyển hướng đến engine trình duyệt khi mô hình được cấu hình.
* **Cải tiến:** Đã khắc phục các vấn đề về cache-busting, chuẩn hóa nội dung (content normalisation) và tham chiếu phần cứng (hardware-reference) trong quá trình kiểm thử end-to-end.

## Phiên bản 1.0.0 — Phát hành ban đầu {#version-100--initial-release}
