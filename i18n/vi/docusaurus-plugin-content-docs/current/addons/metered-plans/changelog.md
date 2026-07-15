---
title: Nhật ký thay đổi Gói theo mức sử dụng
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Nhật ký thay đổi của Gói cước Tính theo mức sử dụng

Version 1.1.0 - Phát hành vào ngày 2026-05-05
- Mới: Tính phí token AI cho các trang con (subsites) trong môi trường multisite — theo dõi và tính phí mức sử dụng token AI trên nhiều trang khách hàng với mức giá linh hoạt cho từng token.
- Mới: Việc thực thi kết nối (Connector) đã được xây dựng lại với khả năng khám phá giới hạn động và đồng bộ hóa ghi trực tiếp (write-through), đảm bảo độ chính xác theo thời gian thực trên tất cả các kết nối.
- Sửa lỗi: Việc nâng cấp bảng cơ sở dữ liệu hiện đã được căn chỉnh chính xác với định nghĩa schema của BerlinDB, ngăn ngừa lỗi nâng cấp khi cài đặt mới.
- Sửa lỗi: Các callback nâng cấp cơ sở dữ liệu đã được chuyển đổi sang định dạng chính xác, giải quyết các lỗi nâng cấp im lặng.
- Sửa lỗi: Hiện đã chấp nhận các giá trị phân số trong trường nhập Phụ phí vượt mức (Overage Markup) của AI Usage.
- Sửa lỗi: Đã giải quyết các lỗi nghiêm trọng (fatal errors) và các vấn đề khởi tạo kép khi tải plugin.
- Cải thiện: Thêm script npm check-env để các môi trường phát triển tự cấu hình khi chạy lần đầu.

### 1.0.3 {#103}
* Cập nhật lên Plugin Update Checker v5
* Thêm các tiêu đề plugin WordPress hiện đại
* Cải thiện khả năng tương thích với các phiên bản WordPress mới nhất
* Nâng cao hiệu suất theo dõi mức sử dụng

### 1.0.2 {#102}
* Sửa lỗi và cải thiện hiệu suất
* Báo cáo mức sử dụng được nâng cao

### 1.0.0 {#100}
* Phát hành ban đầu
* Chức năng tính phí đo lường cốt lõi
* Theo dõi mức sử dụng và tính toán vượt mức
* Tạo hóa đơn tự động
