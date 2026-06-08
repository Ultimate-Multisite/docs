---
title: Trình xây dựng & Hộp cát Plugin
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 giới thiệu **Hệ thống Plugin Builder & Sandbox**, cho phép trợ lý AI tạo, kích hoạt và quản lý các plugin WordPress trên mạng lưới của bạn — tất cả đều thông qua một môi trường sandbox (hộp cát) an toàn và biệt lập.

## Tổng quan

Plugin Builder cho phép trợ lý AI viết các plugin WordPress tùy chỉnh dựa trên yêu cầu ngôn ngữ tự nhiên. Các plugin được tạo ra sẽ được xác thực, lưu trữ và kích hoạt bên trong lớp sandbox trước khi chúng ảnh hưởng đến chức năng của trang web thực tế.

Các trường hợp sử dụng bao gồm:

- Tạo các plugin tiện ích nhẹ mà không cần sự can thiệp của nhà phát triển.
- Tạo mẫu các tính năng yêu cầu các hook của WordPress hoặc các loại bài viết tùy chỉnh (custom post types).
- Xây dựng các script tự động hóa ngắn hạn cho các thao tác hàng loạt.

## Tạo Plugin bằng AI

Để tạo một plugin, hãy mở giao diện trò chuyện của Gratis AI Agent và mô tả những gì bạn cần. Ví dụ:

> "Tạo một plugin thêm thông báo quản trị tùy chỉnh trên dashboard."

AI sẽ:

1. Tạo mã PHP plugin bằng cách sử dụng cơ chế tạo mã có cấu trúc.
2. Xác thực đầu ra để kiểm tra lỗi cú pháp và các mẫu không an toàn.
3. Lưu plugin đã tạo vào kho sandbox.
4. Trả về xác nhận cùng với slug của plugin và nút **Activate in Sandbox** (Kích hoạt trong Sandbox).

Bạn có thể tinh chỉnh kết quả bằng cách tiếp tục trò chuyện trong cùng luồng hội thoại trước khi kích hoạt.

## Kích hoạt Sandbox

Việc kích hoạt một plugin được tạo trong sandbox khác với việc kích hoạt nó trên mạng lưới thực tế. Sandbox:

- Chạy plugin trong một môi trường WordPress biệt lập (wp-env).
- Thu thập bất kỳ lỗi PHP, cảnh báo hoặc xung đột hook nào.
- Báo cáo kết quả kích hoạt trở lại trong giao diện trò chuyện.

Để kích hoạt plugin trong sandbox, hãy nhấp vào nút **Activate in Sandbox** trong phản hồi chat của AI, hoặc sử dụng lệnh gạch chéo (slash command):

```
/activate-plugin <plugin-slug>
```

Một thông báo trạng thái sẽ xác nhận việc kích hoạt thành công hay thất bại. Nếu thất bại, nhật ký lỗi sẽ được hiển thị trong luồng trò chuyện.

## Quản lý Plugin đã tạo

Các plugin được tạo sẽ được liệt kê tại **Gratis AI Agent → Plugin Builder → Manage Plugins**. Từ màn hình này, bạn có thể:

| Hành động | Mô tả |
|---|---|
| **View source** | Xem lại toàn bộ mã PHP của plugin. |
| **Re-activate in sandbox** | Chạy lại kiểm tra kích hoạt trong sandbox. |
| **Install on network** | Triển khai plugin lên mạng lưới thực tế (yêu cầu xác nhận thủ công). |
| **Update** | Cung cấp phiên bản mới qua AI, thay thế mã hiện có. |
| **Delete** | Xóa plugin khỏi kho sandbox. Nó sẽ bị hủy kích hoạt khỏi tất cả các trang trước. |

:::warning
**Install on network** triển khai plugin đã tạo lên WordPress multisite thực tế của bạn. Vui lòng xem lại mã plugin trước khi tiếp tục. Gratis AI Agent sẽ yêu cầu xác nhận trước khi hoàn tất việc cài đặt trực tiếp.
:::

## Cài đặt Plugin đã tạo lên Mạng lưới

Khi bạn hài lòng với một plugin trong sandbox, bạn có thể cài đặt nó lên mạng lưới thực tế:

1. Truy cập **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Nhấp vào **Install on Network** bên cạnh plugin bạn muốn triển khai.
3. Xác nhận hộp thoại. Plugin sẽ được cài đặt vào `wp-content/plugins/` và được kích hoạt ở cấp độ mạng lưới.

Hoặc, bạn có thể sử dụng lệnh gạch chéo trong giao diện chat:

```
/install-plugin <plugin-slug>
```

## Cập nhật Plugin

Để cập nhật một plugin đã tạo, hãy mô tả thay đổi cho trợ lý AI trong một cuộc trò chuyện mới:

> "Cập nhật plugin dashboard-notice để chỉ hiển thị thông báo cho quản trị viên."

AI sẽ tạo ra một phiên bản mới, và phiên bản này sẽ xuất hiện trong sandbox cùng với phiên bản hiện tại. Bạn xem lại phần khác biệt (diff) và xác nhận trước khi bản cập nhật được áp dụng.

## Tích hợp HookScanner

Plugin Builder sử dụng **HookScanner** tích hợp để phân tích các hook và filter được đăng ký bởi mỗi plugin được tạo. Kết quả của HookScanner được hiển thị trong phản hồi chat và bao gồm:

- Các action hooks đã đăng ký (`add_action` calls).
- Các filter hooks đã đăng ký (`add_filter` calls).
- Bất kỳ hook nào được tìm thấy trong các dependency của plugin (bỏ qua các thư mục `vendor/` và `node_modules/`).

Điều này giúp bạn hiểu hành vi của plugin trước khi kích hoạt nó.

## Lưu ý Bảo mật

- Các plugin được tạo được lưu trữ riêng biệt với các plugin được cài đặt thủ công và không thể truy cập qua màn hình quản lý plugin tiêu chuẩn của WordPress cho đến khi bạn chủ động cài đặt chúng lên mạng lưới.
- Sandbox sử dụng xác thực đường dẫn (path validation) để ngăn chặn việc duyệt thư mục khi ghi các tệp plugin.
- Các plugin có các lời gọi hàm nguy hiểm (ví dụ: `eval`, `exec`, `system`) sẽ bị gắn cờ trong quá trình xác thực và sẽ không được kích hoạt.
