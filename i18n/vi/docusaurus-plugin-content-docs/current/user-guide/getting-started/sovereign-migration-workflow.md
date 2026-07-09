---
title: Quy trình di chuyển chủ quyền
sidebar_position: 8
_i18n_hash: f8aebdd695ed2f5b3f074c7aa7d52175
---
# Quy trình di chuyển chủ quyền (Sovereign Migration Workflow) {#sovereign-migration-workflow}

Ultimate Multisite phiên bản 1.2.0 đã thêm các cổng xác minh di chuyển để di chuyển một trang con tiêu chuẩn sang cơ sở hạ tầng khách thuê độc lập (sovereign tenant).

## Trước khi bắt đầu {#before-you-start}

Hãy chắc chắn rằng bạn đã:

- Bản sao lưu hiện tại của trang web nguồn.
- Addon Đa người thuê (Multi-Tenancy) đang được kích hoạt.
- Cơ sở dữ liệu, thư mục gốc hệ thống tệp và tên miền của tenant đích đã sẵn sàng.
- Một liên kết ràng buộc máy chủ cơ sở dữ liệu khớp với môi trường đích.

Truy cập để chạy các lệnh WP-CLI cho toàn bộ mạng.

## Quy trình làm việc được đề xuất {#recommended-workflow}

1. Chuẩn bị cơ sở dữ liệu và hệ thống tệp (filesystem) cho tenant đích.
2. Đăng ký hoặc cập nhật cài đặt cô lập tenant.
3. Chạy di chuyển tenant (tenant migration).
4. Cung cấp hoặc xác minh người dùng của tenant.
5. Xả các tác vụ di chuyển bất đồng bộ (async migration jobs).
6. Chạy xác minh di chuyển chủ quyền (sovereign migration verification).

7. Truy cập trang web thuê (tenant) bằng SSO.
8. Chỉ chuyển đổi DNS hoặc định tuyến sau khi quá trình xác minh thành công.

## Các cổng xác minh {#verification-gates}

Quy trình xác minh kiểm tra việc di chuyển từ nhiều góc độ khác nhau:

- Schema của người thuê đã tồn tại và có thể được viết bởi người viết cơ sở dữ liệu của người thuê.
- Máy chủ cơ sở dữ liệu được cấu hình có các quyền cấp (grants) hợp lệ.
- Người dùng của người thuê có mặt và khớp với số lượng người dùng cài đặt chủ quyền dự kiến.

Hàng đợi đẩy bất đồng bộ (async push queue) có thể được dọn sạch thành công.
Các đường dẫn dữ liệu phía mạng cũ không còn cần thiết cho tenant chủ quyền nữa.

Hãy coi các lỗi xác minh là những trở ngại trước khi ra mắt sản phẩm. Hãy sửa lỗi cơ sở dữ liệu, người dùng, hàng đợi hoặc định tuyến đã được báo cáo, sau đó chạy lại quá trình xác minh trước khi cho khách thuê tiếp xúc với khách hàng.

## Lần ghé thăm sản xuất đầu tiên {#first-production-visit}

Sau khi xác minh thành công, hãy sử dụng **Visit (SSO)** từ màn hình quản trị trang web để truy cập lần đầu của admin. Thao tác này sẽ xác nhận việc định tuyến tenant, xử lý token SSO, ghim nguồn gốc (origin pinning) và cấp quyền người dùng phía tenant chỉ trong một bước được kiểm soát.
