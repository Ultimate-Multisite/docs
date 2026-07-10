---
title: Izila Ndu-Ndu
sidebar_position: 12
_i18n_hash: 5aaf1504c3022f94b9aec9faaa4eda22
---
# Isolation Multi-Tenancy {#multi-tenancy-isolation}

Ultimate Multisite: Multi-Tenancy 1.2.0 ndụzi (version) support database na filesystem isolation ọ bụla maka tenants ndị nwere sovereign. A na-agbanwe data tenant dị n'ebe dị n'ọchị, onaghị agbanwe provisioning network, billing, na administration.

## Isolation strategy {#isolation-strategy}

Jiri sovereign isolation maka customers ndị na-enwe mma separation data, storage filesystem dị n'ọchị, ma ọ bụ host boundary dị n'ọchị.

Ma ogni tenant sovereign ga-anọcha:

- A dedicated tenant database ma ọ bụ strategy database prefix nke a na-apụta agbaje host.
- A dedicated tenant filesystem root.
- A tenant registry entry nke na-map site ahụ so na database ahụ, root path, hostname, na isolation model.
- A migration verification result mburu tenant ahụ ga-anọchị live.

## Database host binding {#database-host-binding}

Version 1.2.0 na-agbanwe ihe a na-enwe default same-machine host binding behavior maka sovereign installs. Ihe dị n'ebe dị n'ọchị dị ka `localhost` na-agbanwe nke ọma, onye Bedrock, FrankenPHP, na containerized WordPress ga-anọchị permissions ma na-verify so na host string MySQL na-enwe.

Mgbe ị na-configure tenant sovereign:

1. Set database host na ihe a runtime tenant ahụ na-enwe agbaje.
2. Jiri `localhost` maka local socket installs mgbe host na-anọchị connections lokal.
3. Jiri `127.0.0.1` ma ọ bụ service hostname karịsị agbaje site database ahụ anọchị privileges so host ahụ.
4. Run migration verification mburu ị chọpụta host binding.

Ọ bụrụ na verification reports grant failures, jiri tenant DB user grants na-agbanwe na host binding nke a na-configure. User na-agbaje maka `user@localhost` dị iche na `user@127.0.0.1` ma ọ bụ `user@%`.

## Filesystem root {#filesystem-root}

Gốc tenant (tenant root) phải ổn định sau khi khởi động lại và triển deployment. Hãy tránh dùng các đường dẫn mount tạm thời. Pentru cài đặt kiểu Bedrock, hãy xác nhận rằng gốc tenant trỏ đến thư mục web WordPress mà bootstrap của tenant mong đợi, không chỉ là gốc dự án.

## Thứ tự cấp phát (Provisioning order) {#provisioning-order}

Đối với các tenant chủ quyền mới, hãy sử dụng thứ tự này:

1. Tạo mục đăng ký tenant (tenant registry entry).
2. Tạo cơ sở dữ liệu và người dùng cơ sở dữ liệu của tenant.
3. Bootstrap lược đồ (schema) của tenant.
4. Cấp phát người dùng cho tenant.
5. Cấu hình các đường dẫn hệ thống tệp (filesystem paths) của tenant.
6. Chạy xác minh di chuyển dữ liệu (migration verification).
7. Chuyển đổi định tuyến hoặc DNS sau khi xác minh thành công.

Thứ tự này giúp ngăn chặn việc các tenant bị cô lập một phần nhận lưu lượng truy cập trước khi trình ghi cơ sở dữ liệu, người dùng và hệ thống tệp đã sẵn sàng.

## Luồng quản lý khách hàng cho khách hàng chủ quyền (Sovereign customer management flows) {#sovereign-customer-management-flows}

Ultimate Multisite v2.13.0 giữ các hành động quản lý khách hàng trên trang chính khi chế độ chủ quyền được bật. Một tenant vẫn có thể chạy như một cài đặt WordPress biệt lập, nhưng các hành động hướng đến khách hàng phụ thuộc vào thanh toán mạng, tư cách thành viên hoặc dữ liệu tài khoản dùng chung nên gửi khách hàng quay lại trang chính thay vì cố gắng hoàn tất hành động bên trong thời gian chạy của tenant.

Luồng trang chính áp dụng cho:

- Thay đổi thanh toán và kế hoạch (Checkout and plan changes).
- Tổng quan tài khoản và các hành động hồ sơ khách hàng (Account overview and customer profile actions).
- Cập nhật địa chỉ thanh toán và màn hình quản lý thanh toán (Billing address updates and payment-management screens).
- Xem hóa đơn và lịch sử thanh toán (Invoice and payment-history views).
- Các hành động quản lý trang như thêm hoặc xóa trang (Site management actions such as adding sites or deleting a site).
- Chuyển đổi mẫu (Template switching).
- Ánh xạ tên miền và thay đổi tên miền chính (Domain mapping and primary-domain changes).

Idimụrụ ọrụ ọ bụla n'ime a nwere ike ịgbanwe n'ime tenant (sovereign tenant), Ultimate Multisite ga-agbanye URL nke main-site ahụ ma ga-agbanye tenant nke source ahụ dịka ihe na-akọwa anọ n'ụzọ dị mma. A na-agbanwe nke a na-eme ka ndị biara gbanwe (customers) gbanwe ọrụ ahụ n'ime aka n'ịkọwa mmiri (network records), karịta gbacku n'ime context tenant ahụ ma anaghị chọrọ ịgba ọsọ (duplicate) billing na membership state n'ime database nke sovereign.

Ọ bụrụ na ị bụ operator, eziokwu praktikal bụ: gbara akụkọ billing, account, checkout, invoice, template, na domain-management pages dị n'ime main site ahụ maka network tenant. Tenant dashboards ga-agbanye link n'ụọ ndị a, ma main site ahụ bụ ihe ọ bụla nke onye chọrọ (source of truth) maka ọrụ ahụ.
