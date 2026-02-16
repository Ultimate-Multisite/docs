---
title: Quản lý Trang web
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Quản lý Sites

Sites (hay subsites) là nền tảng cốt lõi của doanh nghiệp WaaS của bạn. Ultimate Multisite có 3 loại site:

- **Customer-owned** — Sites thuộc về khách hàng cụ thể
- **Site Templates** — Sites được thiết lập sẵn mà khách hàng có thể chọn làm điểm khởi đầu
- **Main Site** — Site chính trong mạng lưới của bạn

## Xem danh sách Sites

Truy cập **Ultimate Multisite → Sites** để xem tất cả subsites trong mạng lưới của bạn. Mỗi site được gắn nhãn theo loại và bạn có thể lọc theo All Sites, Customer-Owned, Templates, hoặc Pending.

![Trang danh sách Sites](/img/admin/sites-list.png)

## Thêm Site mới

Nhấn nút **Add Site** để tạo site mới. Bạn cần cung cấp các thông tin sau:

- **Site Title** — Tên của site mới
- **Site URL** — Tên miền/đường dẫn cho site
- **Site Type** — Site này là customer site, template, hay site thông thường

Tùy chọn **Copy Site** cho phép bạn tạo site mới dựa trên một site template có sẵn. Khi bật tùy chọn này, bạn có thể chọn template nào làm điểm khởi đầu. Hãy đảm bảo bật **Copy Media on Duplication** nếu bạn muốn sao chép cả các tệp media.

## Quản lý Site hiện có

Nhấn **Manage** trên bất kỳ site nào để mở trang **Edit Site**. Tại đây bạn sẽ thấy:

### Thông tin cơ bản

Tên site, loại site, site ID và mô tả. Bạn cũng sẽ thấy tên miền được ánh xạ, membership liên kết, và tài khoản khách hàng sở hữu site.

### Tùy chọn Site

Cấu hình các khả năng và giới hạn của site:

- **Visit limits** — Số lượt truy cập tối đa cho site
- **User account limits** — Giới hạn số tài khoản theo từng user role
- **Disk space** — Dung lượng lưu trữ cho site
- **Custom domain** — Bật tính năng ánh xạ tên miền cho site này
- **Plugin and theme visibility** — Kiểm soát plugin và theme nào được hiển thị, ẩn, hoặc kích hoạt sẵn

Theo mặc định, các site sẽ tuân theo giới hạn được đặt ở cấp membership. Nếu bạn đặt giới hạn riêng cho site, các giới hạn này sẽ ghi đè cài đặt của membership.

### Liên kết

Bên dưới phần tùy chọn site, bạn sẽ thấy thông tin về:

- **Mapped domains** được liên kết với site
- **Membership** mà site thuộc về
- **Customer account** được liên kết với site

### Thanh bên phải

Ở phía bên phải, bạn có thể:

- **Bật/tắt site** bằng nút chuyển đổi
- **Thay đổi loại site** hoặc chuyển quyền sở hữu
- **Đặt ảnh/thumbnail cho site** (hiển thị trên frontend cho các site template)
- **Xóa site** vĩnh viễn

:::warning
Việc xóa site không thể hoàn tác. Site và toàn bộ nội dung của nó sẽ bị xóa vĩnh viễn.
:::
