---
title: Biểu mẫu liên hệ của Trình xây dựng trang web
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Biểu mẫu Liên hệ trong Trình Xây dựng Trang (Site Builder)

Superdav AI Agent v1.10.0 bổ sung khả năng tạo biểu mẫu liên hệ trực tiếp từ giao diện chat bằng agent Site Builder. Tính năng này cho phép bạn thêm các biểu mẫu liên hệ hoạt động đầy đủ vào bất kỳ trang nào mà không cần rời khỏi cửa sổ chat.

## Tổng quan

Tính năng biểu mẫu liên hệ của Site Builder (`create_contact_form`) sẽ tự động phát hiện plugin biểu mẫu bạn đã cài đặt và tạo biểu mẫu liên hệ bằng các khả năng gốc của plugin đó. Các plugin biểu mẫu được hỗ trợ bao gồm:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Trợ lý sẽ tự động chọn plugin biểu mẫu tốt nhất có sẵn trên trang của bạn và tạo ra một biểu mẫu liên hệ được tùy chỉnh phù hợp với plugin đó.

## Cách Tạo Biểu Mẫu Liên Hệ

Để tạo biểu mẫu liên hệ bằng Site Builder:

1. Mở bảng chat **Gratis AI Agent** trong trang quản trị WordPress.
2. Chuyển sang agent **Site Builder** bằng cách nhấp vào biểu tượng agent ở tiêu đề chat.
3. Mô tả biểu mẫu liên hệ bạn muốn tạo. Ví dụ:

   > "Thêm một biểu mẫu liên hệ vào trang Liên hệ với các trường cho tên, email, tin nhắn và số điện thoại."

   Hoặc đơn giản hơn:

   > "Tạo một biểu mẫu liên hệ cho trang Liên hệ."

4. Site Builder sẽ tạo biểu mẫu liên hệ và trả về một shortcode sẵn sàng để nhúng.

## Sử Dụng Shortcode Đã Tạo

Sau khi Site Builder tạo biểu mẫu liên hệ, nó sẽ trả về một shortcode (ví dụ: `[contact-form-7 id="123"]`). Bạn có thể:

1. **Nhúng vào trang hoặc bài viết** — Sao chép shortcode và dán nó vào bất kỳ trang hoặc bài viết nào bằng trình soạn thảo khối (block editor) hoặc trình soạn thảo cổ điển (classic editor).
2. **Thêm qua Site Builder** — Yêu cầu Site Builder tự động thêm biểu mẫu vào một trang cụ thể:

   > "Thêm biểu mẫu liên hệ vào trang Liên hệ."

3. **Sử dụng trong template** — Nếu bạn quen thuộc với PHP, bạn có thể thêm shortcode vào tệp template của theme.

## Tùy Chỉnh Biểu Mẫu Liên Hệ

Sau khi Site Builder tạo biểu mẫu liên hệ, bạn có thể tùy chỉnh nó thêm:

### Qua Giao Diện Chat

Yêu cầu Site Builder sửa đổi biểu mẫu:

> "Cập nhật biểu mẫu liên hệ để thêm trường chủ đề (subject) và yêu cầu trường tin nhắn phải điền."

Site Builder sẽ cập nhật biểu mẫu và trả về shortcode đã được cập nhật.

### Qua Giao Diện Quản Trị của Plugin Biểu Mẫu

Bạn cũng có thể tùy chỉnh biểu mẫu trực tiếp trong phần cài đặt của plugin biểu mẫu:

1. Truy cập **Contact Form 7** (hoặc plugin biểu mẫu bạn đã cài đặt) trong trang quản trị WordPress.
2. Tìm biểu mẫu do Site Builder tạo.
3. Chỉnh sửa các trường biểu mẫu, quy tắc xác thực và thông báo email theo nhu cầu.

## Plugin Biểu Mẫu và Khả Năng Tương Thích

Site Builder tự động phát hiện plugin biểu mẫu nào đã được cài đặt trên trang của bạn và sử dụng nó để tạo biểu mẫu liên hệ. Nếu có nhiều plugin biểu mẫu được cài đặt, Site Builder sẽ ưu tiên theo thứ tự sau:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Nếu không có plugin nào trong số này được cài đặt, Site Builder sẽ đề xuất bạn cài đặt một plugin trước khi tạo biểu mẫu liên hệ.

## Thông Báo Email

Các biểu mẫu liên hệ được tạo bởi Site Builder mặc định được cấu hình để gửi thông báo email đến quản trị viên trang web. Bạn có thể tùy chỉnh địa chỉ email nhận và nội dung thông báo:

1. Truy cập giao diện quản trị của plugin biểu mẫu.
2. Tìm biểu mẫu do Site Builder tạo.
3. Chỉnh sửa các cài đặt thông báo email.

Để biết hướng dẫn chi tiết, vui lòng tham khảo tài liệu của plugin biểu mẫu của bạn:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Các Trường Hợp Sử Dụng Ví Dụ

### Biểu Mẫu Liên Hệ Đơn Giản

> "Tạo một biểu mẫu liên hệ đơn giản với các trường tên, email và tin nhắn."

### Biểu Mẫu Nhiều Bước

> "Tạo một biểu mẫu liên hệ với bước đầu tiên dành cho thông tin liên hệ và bước thứ hai dành cho tin nhắn và phương thức liên hệ ưu tiên."

### Biểu Mẫu Có Logic Điều Kiện

> "Tạo một biểu mẫu liên hệ hiển thị các trường khác nhau dựa trên lựa chọn của người dùng trong menu thả xuống."

### Biểu Mẫu Có Tải Tệp Lên

> "Tạo một biểu mẫu liên hệ cho phép người dùng tải lên tệp hoặc tài liệu đính kèm."

:::note
Việc tạo biểu mẫu liên hệ có sẵn trong Superdav AI Agent v1.10.0 trở lên. Agent Site Builder phải được kích hoạt để sử dụng tính năng này.
:::
