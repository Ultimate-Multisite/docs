---
title: Nhật ký thay đổi Site Exporter
sidebar_position: 99
_i18n_hash: 6ce7f1a3c455b0afe71a841b7b82319a
---
# Nhật ký thay đổi của Site Exporter {#site-exporter-changelog}

Phiên bản: 1.0.6 - Phát hành vào 2026-05-11
* Tính năng mới: Xuất site giờ đây đã bao gồm một file index.php tự khởi động, giúp bạn có thể cài đặt file ZIP này trên một máy chủ mới mà không cần cài đặt plugin riêng.
* Tính năng mới: Xuất mạng lưới cho phép quản trị viên xuất tất cả các subsites (trang con) trong một file nén duy nhất ngay từ trang quản trị Site Export.

Phiên bản: 1.0.5 - Phát hành vào 2026-05-05
* Sửa lỗi: Đã thêm `__callStatic` vào stub polyfill của WP_CLI để xử lý các phương thức chưa được giả lập (mocked) như `get_config`, giúp ngăn chặn lỗi khởi động kiểm thử.

Phiên bản: 1.0.4 - Phát hành vào 2025-11-25

* Sửa lỗi: Khắc phục khả năng tương thích với Ultimate Multisite 2.4.

Phiên bản: 1.0.2 - Phát hành vào 2025-09-28

* Đổi tiền tố (prefix) thành ultimate-multisite; cập nhật text domain; tăng phiên bản.

### Phiên bản 1.0.1 - Phát hành vào 2023-08-09 {#version-101---released-on-2023-08-09}

* Cải thiện: Giờ đây đảm bảo lấy được đường dẫn file nhập (importer) chính xác.
* Sửa lỗi: Tắt bộ nhớ đệm đối tượng (object cache) để ngăn ngừa lỗi trong quá trình nhập.
* Sửa lỗi: Khắc phục sự cố liên kết tải xuống plugin nhập không hoạt động.

### Phiên bản 1.0.0 - Phát hành vào 2022-12-23 {#version-100---released-on-2022-12-23}

* Sửa lỗi: Popup của form xuất không tải được;
* Sửa lỗi: Các file Javascript không tải được trên trang xuất;
* Nội bộ: Quy trình build mới;

### Phiên bản 1.0.0-beta.4 - Phát hành vào 2022-01-13 {#version-100-beta4---released-on-2022-01-13}

* Nội bộ: Thêm bộ tạo hooks và filters;
* Nội bộ: Thêm các stub WP Ultimo để cải thiện trải nghiệm cho nhà phát triển;
