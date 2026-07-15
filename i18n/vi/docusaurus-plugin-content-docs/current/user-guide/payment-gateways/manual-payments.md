---
title: Thiết lập thanh toán thủ công
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Thiết lập Thanh toán thủ công (v2)

_**LƯU Ý QUAN TRỌNG: Bài viết này đề cập đến Ultimate Multisite phiên bản 2.x.**_

Thanh toán thủ công là cách để bạn cung cấp các phương thức thanh toán khác trong trường hợp **Stripe** hoặc **PayPal** không khả dụng cho người dùng của bạn. Đó có thể là chuyển khoản ngân hàng hoặc bất kỳ phương thức thanh toán nào khác có sẵn tại địa phương cho người dùng của bạn.

## Cách bật Thanh toán thủ công {#how-to-enable-manual-payments}

Thiết lập thanh toán thủ công rất dễ. Bạn chỉ cần bật nó trong các cổng thanh toán và nhập hướng dẫn chi tiết về cách người dùng nên gửi khoản thanh toán.

Trước tiên, đi tới **Ultimate Multisite > Cài đặt > Thanh toán**. Bên dưới **Cổng thanh toán** , bật **Thủ công**. Bạn sẽ thấy một hộp **Hướng dẫn thanh toán** xuất hiện cho bạn.

Thêm vào hộp này thông tin mà khách hàng của bạn cần để thực hiện thanh toán. Ví dụ, đó có thể là chi tiết tài khoản ngân hàng của bạn và email của bạn để khách hàng có thể gửi xác nhận thanh toán cho bạn.

![Nút bật cổng thanh toán thủ công với vùng văn bản Hướng dẫn thanh toán](/img/config/manual-gateway-expanded.png)

Đây là giao diện cài đặt cổng thủ công:

![Cài đặt cổng thủ công](/img/config/manual-gateway-settings.png)

Sau khi thiết lập xong, chỉ cần nhấp vào **Lưu cài đặt** và mọi việc đã hoàn tất. Khi người dùng đăng ký vào mạng của bạn, họ sẽ thấy một thông báo cho biết họ sẽ nhận được hướng dẫn của bạn để hoàn tất giao dịch mua.

![Thông báo xác nhận đăng ký cho người dùng biết họ sẽ nhận được hướng dẫn thanh toán](/img/frontend/registration-manual-notice.png)

Và họ cũng sẽ nhận được một thông báo trên trang **Cảm ơn** của bạn kèm theo hướng dẫn thanh toán của bạn.

<!-- Không có ảnh chụp màn hình: Trang Cảm ơn hiển thị hướng dẫn thanh toán sau khi thanh toán -->

## Xác nhận thanh toán thủ công {#confirming-manual-payments}

Để xác nhận một thanh toán thủ công, hãy đi tới menu **Thanh toán** trên thanh bên trái. Tại đó, bạn có thể xem tất cả các khoản thanh toán trên mạng của mình và chi tiết của chúng, bao gồm **trạng thái**. Một thanh toán thủ công sẽ luôn có trạng thái **Đang chờ** cho đến khi bạn thay đổi thủ công.

![Danh sách thanh toán hiển thị thanh toán thủ công đang chờ](/img/admin/payments-list.png)

Vào trang thanh toán bằng cách nhấp vào **mã tham chiếu**. Trên trang này, bạn có tất cả chi tiết của khoản thanh toán đang chờ, chẳng hạn như ID tham chiếu, sản phẩm, dấu thời gian và nhiều thông tin khác.

![Trang chi tiết thanh toán hiển thị mã tham chiếu, sản phẩm và tổng cộng](/img/admin/payment-edit.png)

Ở cột bên phải, bạn có thể thay đổi trạng thái của khoản thanh toán. Đổi nó thành **Đã hoàn tất** và **bật tùy chọn Kích hoạt tư cách thành viên** sẽ kích hoạt site của khách hàng của bạn và tư cách thành viên của họ sẽ hoạt động.

![Trang chỉnh sửa thanh toán với Trạng thái được đặt thành Đã hoàn tất và nút bật Kích hoạt tư cách thành viên](/img/admin/payment-activate-membership.png)
