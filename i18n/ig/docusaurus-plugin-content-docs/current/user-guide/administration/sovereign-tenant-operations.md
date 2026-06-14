---
title: Nkwado Ndu Operative
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Operations Tenant Sovereignty

Ultimate Multisite: Multi-Tenancy 1.2.0 nwere add operational tooling fɛ sovereign tenants: subsites na-eme run with their own database, filesystem root, and routing context while still visible from the network admin.

Use this page when you dey manage isolated customer sites, remote-site handoffs, or migrations that move a standard subsite into sovereign infrastructure.

## Ka ihe mere nwere fọm administrators

- **Stateless tenant autologin** — Network admins na-eme go visit sovereign tenant without relying on long-lived shared session state. The SSO token e dey for purpose-scoped, origin-pinned, replay-protected, and capped to a short expiry window.
- **Sovereign-aware routing** — Legacy isolated networks and sovereign tenants resolve through the same site router path, which reduces differences between old and new isolated installs when using the same site router path.
- **Verified migration state** — Migration verification checks user provisioning, database writer permissions, queue drain status, and legacy table absence before a tenant be treated as complete.
- **Safer teardown** — Sovereign teardown now remove tenant credentials cleanly so deleted tenants no leave stale database access behind.

## Visiting a sovereign tenant

1. Open **Network Admin > Ultimate Multisite > Sites**.
2. Select the sovereign tenant.
3. Use **Visit (SSO)** when available instead of copying passwords or creating temporary admin accounts.

The visit flow go create a short-lived login token for that tenant and record the SSO event in the tenant audit trail. If the button fail, check say the tenant domain dey resolve to the expected install and say the tenant fit reach the network-side SSO endpoint.

## Remote-site operations checklist

Before you change a sovereign or remote tenant, confirm:

Domain của người thuê trỏ về máy chủ sở hữu hệ thống tệp của người thuê đó.
Máy chủ cơ sở dữ liệu của người thuê khớp với liên kết máy chủ được cấu hình cho lần cài đặt đó.
Các lệnh xác minh di chuyển (migration verification commands) chạy thành công cho người thuê.
Các hàng đợi di chuyển bất đồng bộ (Async migration queues) sẽ được dọn sạch trước khi thực hiện thay đổi DNS hoặc quyền sở hữu.
Người dùng quản trị của người thuê đã được cấp trong quá trình di chuyển và có thể đăng nhập qua SSO.

## Xóa các người thuê chủ quyền (sovereign tenants)

Xóa một người thuê chủ quyền là hành động phá hủy dữ liệu. Hãy xác nhận trạng thái sao lưu và xuất trước, sau đó xóa từ màn hình quản lý trang web. Quy trình gỡ bỏ 1.2.0 sẽ loại bỏ thông tin đăng nhập cơ sở dữ liệu của người thuê như một phần của việc dọn dẹp, nhưng quản trị viên vẫn nên kiểm tra xem các người dùng cơ sở dữ liệu và thư mục cấp máy chủ có còn không khi sử dụng các bảng điều khiển lưu trữ bên ngoài.

:::warning
Đừng xóa người thuê chủ quyền trong khi quá trình xác minh di chuyển vẫn đang chạy hoặc trong khi các tác vụ đẩy bất đồng bộ (async push jobs) đang nằm trong hàng đợi. Hãy đợi việc xác minh hoàn tất để quy trình gỡ bỏ không xóa các thông tin đăng nhập cần thiết cho các tác vụ đang chờ xử lý.
:::
