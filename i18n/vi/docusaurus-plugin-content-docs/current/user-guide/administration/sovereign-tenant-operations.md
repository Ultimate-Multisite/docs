---
title: Hoạt động của Người thuê Chủ quyền
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Vận hành Khách thuê Chủ quyền (Sovereign Tenant Operations)

Ultimate Multisite: Phiên bản 1.2.0 bổ sung các công cụ vận hành cho khách thuê chủ quyền: các subsites chạy với cơ sở dữ liệu, thư mục gốc và ngữ cảnh định tuyến riêng của chúng, nhưng vẫn hiển thị từ mạng quản trị.

Sử dụng trang này khi quản lý các trang khách hàng riêng biệt (isolated customer sites), chuyển giao trang từ xa (remote-site handoffs) hoặc di chuyển một trang con tiêu chuẩn sang cơ sở hạ tầng độc lập (sovereign infrastructure).

## Những thay đổi đối với quản trị viên {#what-changes-for-administrators}

Đăng nhập tự động cho người thuê (tenant) không trạng thái — Quản trị viên mạng có thể truy cập một tenant độc lập mà không cần phụ thuộc vào trạng thái phiên dùng chung tồn tại lâu dài. Token SSO được giới hạn theo phạm vi mục đích, gắn nguồn gốc, chống phát lại và có thời gian hết hạn ngắn.

**Định tuyến nhận biết chủ quyền (Sovereign-aware routing)** — Các mạng cô lập cũ và các tenant có chủ quyền giải quyết thông qua cùng một đường dẫn trình duyệt trang web, giúp giảm sự khác biệt khi khởi tạo giữa các cài đặt cô lập cũ và mới.

- **Trạng thái di chuyển đã được xác minh** — Các bước kiểm tra xác minh việc di chuyển bao gồm cấp phát người dùng, quyền ghi cơ sở dữ liệu, trạng thái xả hàng đợi (queue drain) và sự vắng mặt của các bảng cũ trước khi một tenant được coi là hoàn tất.

- **Gỡ cài đặt an toàn hơn** — Tính năng gỡ cài đặt chủ quyền (Sovereign teardown) hiện sẽ xóa sạch thông tin đăng nhập của người thuê, giúp các tenant đã bị xóa không để lại quyền truy cập cơ sở dữ liệu cũ.

## Truy cập một tenant chủ quyền {#visiting-a-sovereign-tenant}

1. Mở **Network Admin > Ultimate Multisite > Sites**.
2. Chọn tenant chủ quyền (sovereign tenant).
3. Sử dụng **Visit (SSO)** khi có sẵn thay vì sao chép mật khẩu hoặc tạo tài khoản quản trị tạm thời.

Luồng truy cập tạo ra một mã thông báo đăng nhập (login token) có thời gian tồn tại ngắn cho người thuê đó và ghi lại sự kiện SSO vào nhật ký kiểm toán của người thuê. Nếu nút bị lỗi, hãy kiểm tra xem tên miền của người thuê có phân giải đúng với cài đặt mong đợi hay không và liệu người thuê có thể truy cập được điểm cuối (endpoint) SSO phía mạng hay không.

## Danh sách kiểm tra vận hành trang web từ xa {#remote-site-operations-checklist}

Trước khi thay đổi một tenant (khách thuê) chủ quyền hoặc từ xa, hãy xác nhận các mục sau:

- Tên miền của người thuê trỏ về máy chủ sở hữu hệ thống tệp (filesystem) của người thuê đó.
- Máy chủ cơ sở dữ liệu của người thuê khớp với cấu hình liên kết máy chủ đã được thiết lập cho bản cài đặt đó.
- Các lệnh xác minh di chuyển (migration verification commands) đều chạy thành công cho người thuê.

Các hàng đợi di chuyển bất đồng bộ sẽ được dọn sạch trước khi thực hiện thay đổi DNS hoặc quyền sở hữu.
Người dùng quản trị của người thuê (tenant) đã được cấp trong quá trình di chuyển và có thể đăng nhập thông qua SSO.

## Xóa các tenant chủ quyền {#deleting-sovereign-tenants}

Xóa một tenant chủ quyền là hành động gây mất dữ liệu. Hãy xác nhận trạng thái sao lưu và xuất trước, sau đó xóa nó từ màn hình quản lý trang web. Quy trình gỡ bỏ phiên bản 1.2.0 sẽ loại bỏ thông tin đăng nhập cơ sở dữ liệu của tenant như một phần của quá trình dọn dẹp, nhưng quản trị viên vẫn nên kiểm tra xem người dùng cơ sở dữ liệu và thư mục cấp máy chủ có bị xóa hay không khi sử dụng các bảng điều khiển lưu trữ bên ngoài.

:::warning
Đừng xóa một tenant độc lập trong khi quá trình xác minh di chuyển vẫn đang chạy hoặc khi các tác vụ đẩy bất đồng bộ (async push jobs) còn đang nằm trong hàng đợi. Hãy đợi quá trình xác minh hoàn tất để việc gỡ bỏ không làm mất các thông tin xác thực cần thiết cho các tác vụ đang chờ xử lý.
:::
