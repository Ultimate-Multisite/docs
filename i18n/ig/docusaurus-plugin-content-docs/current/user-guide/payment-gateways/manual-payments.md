---
title: Nkwado Ihe Imebe Ọnụma
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Thiết Lập Thanh Toán Thủ Công (v2)

_**LƯU Ý QUAN TRỌNG: Bài viết này đề cập đến Ultimate Multisite phiên bản 2.x.**_

Thanh toán thủ công là cách bạn cung cấp các phương thức thanh toán khác nếu **Stripe** hoặc **PayPal** không có sẵn cho người dùng của bạn. Nó có thể là chuyển khoản, chuyển tiền ngân hàng hoặc bất kỳ phương thức thanh toán nào có sẵn tại địa phương với người dùng của bạn.

## Cách Bật Thanh Toán Thủ Công

Thiết lập thanh toán thủ công rất dễ dàng. Bạn chỉ cần bật nó dưới mục payment gateways và đưa vào hướng dẫn chi tiết về cách người dùng nên gửi thanh toán.

Đầu tiên, hãy truy cập **Ultimate Multisite > Settings > Payments**. Bên dưới **Payment Gateways**, hãy bật **Manual** lên. Bạn sẽ thấy một hộp **Payment Instructions** hiện ra cho bạn.

Thêm thông tin mà khách hàng của bạn cần để thực hiện thanh toán vào ô này. Đó có thể là chi tiết tài khoản ngân hàng và email của bạn để khách hàng có thể gửi xác nhận thanh toán cho bạn, ví dụ như vậy.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Đây là giao diện cài đặt cổng thanh toán thủ công:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Sau khi thiết lập xong, chỉ cần nhấn **Save Settings** và hoàn tất. Khi người dùng đăng ký vào mạng của bạn, họ sẽ thấy một thông báo cho biết họ sẽ nhận được hướng dẫn của bạn để hoàn tất việc mua hàng.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

Và họ cũng sẽ nhận được một tin nhắn trên trang **Thank You** của bạn với hướng dẫn thanh toán của bạn.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Xác Nhận Thanh Toán Thủ Công

Para xác nhận một khoản thanh toán thủ công, hãy vào menu **Payments** ở thanh bên trái. Ở đó bạn sẽ thấy tất cả các khoản thanh toán trên mạng của mình và chi tiết của chúng, bao gồm cả **status**. Một khoản thanh toán thủ công luôn có trạng thái **Pending** (Chờ) cho đến khi bạn tự thay đổi nó.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Nhập trang thanh toán bằng cách nhấp vào **reference code** (mã tham chiếu). Trên trang này, bạn sẽ có tất cả các chi tiết của khoản thanh toán đang chờ xử lý, như reference ID, sản phẩm, dấu thời gian và nhiều thứ khác.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Ở cột bên phải, bạn có thể thay đổi trạng thái của khoản thanh toán. Thay đổi nó thành **Completed** (Hoàn tất) và bật tùy chọn **Activate Membership** (Kích hoạt Thành viên) sẽ cho phép trang web của khách hàng của bạn hoạt động và tư cách thành viên của họ sẽ được kích hoạt.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
