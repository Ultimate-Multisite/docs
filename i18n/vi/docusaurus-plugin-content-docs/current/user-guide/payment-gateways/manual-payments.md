---
title: Thiết Lập Thanh Toán Thủ Công
sidebar_position: 20
_i18n_hash: 1046fae1e97189ace8966057920da6eb
---
# Thiết Lập Thanh Toán Thủ Công (v2)

_**LƯU Ý QUAN TRỌNG: Bài viết này áp dụng cho Ultimate Multisite phiên bản 2.x.**_

Thanh toán thủ công là cách để bạn cung cấp các phương thức thanh toán khác khi **Stripe** hoặc **PayPal** không khả dụng cho người dùng của bạn. Đó có thể là chuyển khoản ngân hàng hoặc bất kỳ phương thức thanh toán nào khác phổ biến tại địa phương của người dùng.

## Cách bật Thanh Toán Thủ Công

Việc thiết lập thanh toán thủ công rất đơn giản. Bạn chỉ cần bật tính năng này trong phần cổng thanh toán và nhập hướng dẫn chi tiết về cách người dùng gửi thanh toán.

Đầu tiên, vào **Ultimate Multisite > Settings > Payments**. Trong phần **Payment Gateways**, bật **Manual**. Bạn sẽ thấy ô **Payment Instructions** xuất hiện.

Thêm vào ô này các thông tin mà khách hàng cần để thực hiện thanh toán. Ví dụ, bạn có thể điền thông tin tài khoản ngân hàng và email để khách hàng gửi xác nhận thanh toán cho bạn.

![Nút bật cổng thanh toán thủ công và ô hướng dẫn thanh toán](/img/config/settings-payment-gateways.png)

Sau khi thiết lập xong, chỉ cần nhấn **Save Settings** là hoàn tất. Khi người dùng đăng ký vào mạng của bạn, họ sẽ thấy thông báo rằng họ sẽ nhận được hướng dẫn của bạn để hoàn tất thanh toán.

![Thông báo thanh toán thủ công hiển thị trong quá trình đăng ký](/img/config/settings-payment-gateways.png)

Họ cũng sẽ nhận được thông báo trên trang **Thank You** kèm theo hướng dẫn thanh toán của bạn.

![Trang Thank You hiển thị hướng dẫn thanh toán](/img/config/settings-payment-gateways.png)

## Xác nhận thanh toán thủ công

Để xác nhận thanh toán thủ công, vào menu **Payments** ở thanh bên trái. Tại đây bạn có thể xem tất cả các giao dịch trên mạng của mình cùng với thông tin chi tiết, bao gồm **trạng thái**. Thanh toán thủ công sẽ luôn có trạng thái **Pending** cho đến khi bạn thay đổi thủ công.

![Danh sách thanh toán hiển thị thanh toán thủ công đang chờ xử lý](/img/admin/payments-list.png)

Vào trang chi tiết thanh toán bằng cách nhấn vào **mã tham chiếu**. Trên trang này bạn có thể xem tất cả thông tin của giao dịch đang chờ xử lý, như mã tham chiếu, sản phẩm, thời gian và nhiều thông tin khác.

![Trang chi tiết thanh toán với mã tham chiếu và sản phẩm](/img/admin/payments-list.png)

Ở cột bên phải, bạn có thể thay đổi trạng thái thanh toán. Chuyển sang **Completed** và **bật tùy chọn Activate Membership** sẽ kích hoạt trang web của khách hàng và tư cách thành viên của họ sẽ được kích hoạt.

![Thay đổi trạng thái thanh toán sang Completed với nút bật Activate Membership](/img/admin/payments-list.png)
