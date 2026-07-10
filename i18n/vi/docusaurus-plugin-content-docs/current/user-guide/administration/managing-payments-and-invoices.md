---
title: Quản lý thanh toán và hóa đơn
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Quản lý Thanh toán và Hóa đơn {#managing-payments-and-invoices}

## Cài đặt Thanh toán {#payment-settings}

Trước khi bắt đầu nhận thanh toán, bạn cần cấu hình các cài đặt liên quan đến thanh toán. Điều hướng đến **Ultimate Multisite → Settings** và nhấp vào tab **Payment**.

![Tab cài đặt thanh toán](/img/admin/settings-payments-top.png)

Đây là chế độ xem đầy đủ của trang cài đặt thanh toán:

![Toàn bộ trang cài đặt thanh toán](/img/admin/settings-payments-full.png)

### Tùy chọn Thanh toán Chung {#general-payment-options}

Trong phần cài đặt chung, bạn có thể cấu hình:

- **Tiền tệ** — Tiền tệ mặc định được dùng cho các giao dịch
- **Vị trí Tiền tệ** — Vị trí ký hiệu tiền tệ xuất hiện (trước/sau số tiền)

![Cài đặt cổng thanh toán](/img/admin/settings-payments-options.png)

### Cổng Thanh toán {#payment-gateways}

Ultimate Multisite hỗ trợ nhiều cổng thanh toán. Bạn có thể bật và cấu hình từng cổng từ tab cài đặt Payment.

![Cấu hình cổng thanh toán](/img/admin/settings-payments-gateways.png)

Các cổng khả dụng bao gồm:

- **Stripe** — Thanh toán bằng thẻ tín dụng qua Stripe
- **PayPal** — Thanh toán PayPal
- **Manual** — Dành cho xử lý thanh toán ngoại tuyến hoặc tùy chỉnh

Mỗi cổng có phần cấu hình riêng, nơi bạn nhập API keys và các cài đặt khác.

![Cài đặt cổng bổ sung](/img/admin/settings-payments-gateways-2.png)

### Sandbox Mode {#sandbox-mode}

Bạn có thể bật **Sandbox Mode** để kiểm thử tích hợp thanh toán trước khi đưa vào hoạt động chính thức. Khi chế độ sandbox đang hoạt động, sẽ không có khoản phí thực nào được thực hiện.

## Xem Thanh toán {#viewing-payments}

Điều hướng đến trang **Payments** trong Ultimate Multisite để xem tất cả giao dịch trên toàn mạng của bạn.

![Danh sách thanh toán](/img/admin/payments-list.png)

Bạn có thể lọc thanh toán theo trạng thái (đã hoàn tất, đang chờ, thất bại, đã hoàn tiền) và tìm kiếm các giao dịch cụ thể.

Nhấp vào một khoản thanh toán để xem đầy đủ chi tiết, bao gồm các mục dòng, gói thành viên liên kết, thông tin khách hàng và dữ liệu cổng thanh toán.

## Hóa đơn {#invoices}

Ultimate Multisite có thể tự động tạo hóa đơn cho các khoản thanh toán. Bạn có thể tùy chỉnh mẫu hóa đơn và định dạng đánh số từ cài đặt Payment.

Các tùy chọn tùy chỉnh hóa đơn bao gồm:

- **Tên và địa chỉ công ty** hiển thị trên hóa đơn
- **Đánh số hóa đơn** định dạng và trình tự
- **Logo** hiển thị trên phần đầu hóa đơn
- **Văn bản chân trang tùy chỉnh** cho điều khoản, ghi chú hoặc thông tin pháp lý

Để tùy chỉnh mẫu hóa đơn, hãy đi tới **Ultimate Multisite → Settings → Payment** và tìm các cài đặt liên quan đến hóa đơn.
