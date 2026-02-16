---
title: Quản lý Thanh toán và Hóa đơn
sidebar_position: 15
_i18n_hash: fc6e16106af648bfca0812d24168b582
---
# Quản lý thanh toán và hóa đơn

## Cài đặt thanh toán

Trước khi bắt đầu nhận thanh toán, bạn cần thiết lập các cài đặt liên quan đến thanh toán. Truy cập **Ultimate Multisite → Settings** và nhấp vào tab **Payment**.

![Tab cài đặt thanh toán](/img/admin/settings-payments-top.png)

### Tùy chọn thanh toán chung

Trong phần cài đặt chung, bạn có thể thiết lập:

- **Currency** — Đơn vị tiền tệ mặc định dùng cho các giao dịch
- **Currency Position** — Vị trí hiển thị ký hiệu tiền tệ (trước/sau số tiền)

![Cài đặt cổng thanh toán](/img/admin/settings-payments-options.png)

### Cổng thanh toán

Ultimate Multisite hỗ trợ nhiều cổng thanh toán khác nhau. Bạn có thể bật và thiết lập từng cổng thanh toán trong tab Payment.

![Cấu hình cổng thanh toán](/img/admin/settings-payments-gateways.png)

Các cổng thanh toán hiện có:

- **Stripe** — Thanh toán thẻ tín dụng qua Stripe
- **PayPal** — Thanh toán qua PayPal
- **Manual** — Dành cho thanh toán ngoại tuyến hoặc xử lý thanh toán tùy chỉnh

Mỗi cổng thanh toán có phần cấu hình riêng để bạn nhập API key và các cài đặt khác.

![Cài đặt cổng thanh toán bổ sung](/img/admin/settings-payments-gateways-2.png)

### Chế độ Sandbox

Bạn có thể bật **Sandbox Mode** để kiểm tra tích hợp thanh toán trước khi chính thức hoạt động. Khi chế độ sandbox được bật, sẽ không có giao dịch thực nào được thực hiện.

## Xem các khoản thanh toán

Truy cập trang **Payments** trong Ultimate Multisite để xem tất cả giao dịch trên toàn bộ mạng của bạn.

![Danh sách thanh toán](/img/admin/payments-list.png)

Bạn có thể lọc các khoản thanh toán theo trạng thái (hoàn thành, đang chờ, thất bại, hoàn tiền) và tìm kiếm các giao dịch cụ thể.

Nhấp vào một khoản thanh toán để xem chi tiết đầy đủ bao gồm các mục trong đơn hàng, gói thành viên liên kết, thông tin khách hàng và dữ liệu cổng thanh toán.

## Hóa đơn

Ultimate Multisite có thể tự động tạo hóa đơn cho các khoản thanh toán. Bạn có thể tùy chỉnh mẫu hóa đơn và định dạng đánh số trong phần cài đặt Payment.

Các tùy chọn tùy chỉnh hóa đơn bao gồm:

- **Tên và địa chỉ công ty** hiển thị trên hóa đơn
- **Định dạng đánh số hóa đơn** và thứ tự đánh số
- **Logo** hiển thị ở phần đầu hóa đơn
- **Văn bản chân trang tùy chỉnh** cho điều khoản, ghi chú hoặc thông tin pháp lý

Để tùy chỉnh mẫu hóa đơn, truy cập **Ultimate Multisite → Settings → Payment** và tìm các cài đặt liên quan đến hóa đơn.
