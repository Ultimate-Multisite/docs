---
title: Ude Sites
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Ịgba Sites (Sites)

Sites (hoặc subsites) là cốt lõi của kinh doanh WaaS của bạn. Ultimate Multisite có 3 loại site:

- **Customer-owned** — Các site thuộc về khách hàng cụ thể
- **Site Templates** — Các site được định nghĩa sẵn mà khách hàng có thể chọn làm điểm khởi đầu
- **Main Site** — Site mạng chính của bạn

## Xem Sites

Đi đến **Ultimate Multisite → Sites** để xem tất cả các subsites trong mạng của bạn. Mỗi site sẽ được dán nhãn theo loại và bạn có thể lọc theo Tất cả Sites, Customer-Owned, Templates, hoặc Pending (Chờ).

![Sites list page](/img/admin/sites-list.png)

## Thêm Site Mới

Nhấn nút **Add Site** để tạo một site mới. Bạn sẽ cần cung cấp:

- **Site Title** — Tên của site mới
- **Site URL** — Tên miền/đường dẫn cho site đó
- **Site Type** — Nó là site khách hàng, template hay site thông thường

Tùy chọn **Copy Site** cho phép bạn tạo một site mới dựa trên một template site đã có. Khi bật tùy chọn này, bạn có thể chọn template nào để làm điểm khởi đầu. Hãy đảm bảo rằng **Copy Media on Duplication** được bật để bao gồm các file media.

## Quản lý Site Hiện Có

Nhấn **Manage** ở bất kỳ site nào để mở trang **Edit Site**. Ở đây bạn sẽ tìm thấy:

### Thông tin Cơ bản

Tên site, loại site, ID site và mô tả. Bạn cũng sẽ thấy tên miền được ánh xạ (mapped domain), tư cách thành viên liên quan và tài khoản khách hàng sở hữu site đó.

### Tùy chọn Site

Cấu hình các khả năng và giới hạn của site:

- **Visit limits** — Số lần truy cập tối đa cho site
- **User account limits** — Giới hạn theo vai trò người dùng
- **Disk space** — Quota lưu trữ cho site
- **Custom domain** — Bật ánh xạ tên miền cho site này
- **Plugin and theme visibility** — Kiểm soát plugin và theme nào được hiển thị, ẩn hoặc kích hoạt sẵn

By default, các trang web sẽ tuân theo giới hạn được đặt ở cấp độ thành viên. Việc đặt giới hạn ở cấp độ trang web sẽ ghi đè lên cài đặt của thành viên.

### Các Liên kết (Associations)

Dưới các tùy chọn trang web, bạn sẽ tìm thấy thông tin về:

- **Các tên miền được ánh xạ** liên quan đến trang web
- **Thành viên** mà trang web đang thuộc về
- **Tài khoản khách hàng** được liên kết với trang web

### Thanh bên phải (Right Sidebar)

Ở phía bên phải, bạn có thể:

- **Bật/tắt trang web** bằng nút chuyển đổi (toggle button)
- **Thay đổi loại trang web** hoặc phân quyền sở hữu lại
- **Đặt hình ảnh/ảnh thu nhỏ của trang web** (sẽ hiển thị ở giao diện người dùng cho các mẫu trang web)
- **Xóa trang web** vĩnh viễn

:::warning
Xóa một trang web là không thể hoàn tác. Trang web và tất cả nội dung của nó sẽ bị xóa vĩnh viễn.
:::
