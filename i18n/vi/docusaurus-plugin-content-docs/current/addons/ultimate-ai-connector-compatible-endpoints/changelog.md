---
title: Nhật ký thay đổi Bộ kết nối AI Ultimate dành cho các Điểm cuối Tương thích
sidebar_position: 99
_i18n_hash: bc1e5acc3b2415defb863e64a18d271c
---
# Nhật ký thay đổi của Ultimate AI Connector cho các Điểm cuối Tương thích {#ultimate-ai-connector-for-compatible-endpoints-changelog}

## Phiên bản 2.0.0 — Phát hành vào 2026-04-24 {#version-200--released-on-2026-04-24}

* **Mới:** Hỗ trợ đa nhà cung cấp — cấu hình nhiều điểm cuối AI và định tuyến yêu cầu với tính năng tự động chuyển đổi (fallback) giữa các nhà cung cấp.
* **Sửa lỗi:** Tích hợp SDK đa nhà cung cấp với các ID nhà cung cấp, URL đăng ký và phạm vi lọc HTTP chính xác cho từng nhà cung cấp.
* **Sửa lỗi:** Thẻ nhà cung cấp mới giờ tự động mở rộng khi thêm; xử lý cache script khi plugin được cập nhật.
* **Sửa lỗi:** Không gian tên lớp nhà cung cấp động cho `eval()` và hành vi tự động mở rộng cho các nhà cung cấp mới được thêm.
* **Sửa lỗi:** Sử dụng các thành phần Card/CardBody/CardHeader/CardDivider ổn định (không còn là thử nghiệm) để tương thích với WordPress 6.9+.
* **Sửa lỗi:** Thay thế `DragHandle` không xác định bằng biểu tượng nắm (grip icon) unicode để kéo và sắp xếp lại nhà cung cấp.
* **Sửa lỗi:** Loại bỏ yêu cầu HTTP gây tắc nghẽn khi tải mỗi trang.
* **Cải tiến:** Nâng cấp quy trình làm việc GitHub Actions lên Node.js 24.

## Phiên bản 1.0.0 — Phát hành ban đầu {#version-100--initial-release}
