---
title: Luồng đăng ký
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Luồng đăng ký (v2)

_**LƯU Ý QUAN TRỌNG: Bài viết này đề cập đến Ultimate Multisite phiên bản 2.x.**_

Người dùng có thể đăng ký vào mạng của bạn theo nhiều cách khác nhau. Họ có thể sử dụng biểu mẫu đăng ký của bạn hoặc một liên kết có thể chia sẻ đến một gói đã được chọn sẵn. Tại đây, chúng tôi sẽ chỉ cho bạn cách khách hàng có thể đăng ký trên mạng của bạn bằng các đường dẫn hiện có và điều gì xảy ra sau khi họ đăng ký trên mạng của bạn.

## Sử dụng biểu mẫu đăng ký:

Đây là quy trình đăng ký tiêu chuẩn. Bạn tạo một trang đăng ký với **biểu mẫu checkout** và đây sẽ là nơi khách hàng của bạn truy cập để đăng ký trên mạng của bạn và đăng ký một gói. Bạn có thể có nhiều trang đăng ký, mỗi trang có một biểu mẫu đăng ký khác nhau nếu muốn.

Trang mặc định để đăng ký là [_**yourdomain.com/register**_](http://yourdomain.com/register), nhưng bạn có thể thay đổi điều này bất cứ lúc nào tại **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Sau khi người dùng đến trang đăng ký của bạn (thường bằng cách nhấp vào nút **Đăng nhập** hoặc **Mua ngay**), họ sẽ thấy biểu mẫu đăng ký của bạn ở đó.

![Biểu mẫu đăng ký được hiển thị trên trang đăng ký](/img/frontend/registration-form.png)

Dưới đây là ví dụ về biểu mẫu checkout khi nó xuất hiện trên frontend:

![Biểu mẫu đăng ký checkout trên frontend](/img/config/checkout-frontend-registration.png)

Tất cả những gì họ phải làm là điền tất cả các trường bắt buộc - email, tên người dùng, mật khẩu, v.v... - và thanh toán cho gói hoặc xác nhận địa chỉ email của họ nếu họ đang đăng ký gói miễn phí hoặc gói trả phí có thời gian dùng thử mà không có thông tin thanh toán.

Trên trang "Cảm ơn", họ sẽ thấy một thông báo cho biết họ có cần xác nhận địa chỉ email hay không, hoặc website của họ đã được kích hoạt và họ có thể bắt đầu sử dụng.

![Trang Cảm ơn sau khi đăng ký](/img/frontend/registration-thank-you.png)

Nếu yêu cầu xác nhận địa chỉ email, họ sẽ cần vào hộp thư email của mình và nhấp vào liên kết xác minh. Website của họ sẽ không được kích hoạt nếu địa chỉ email của họ không được xác minh.

Nếu họ đã đăng ký gói trả phí hoặc việc xác minh email không bắt buộc trên mạng của bạn, website của họ sẽ được kích hoạt ngay sau checkout và họ sẽ được hiển thị một liên kết để đăng nhập vào dashboard của mình.

![Site được kích hoạt với liên kết để đăng nhập vào dashboard](/img/frontend/site-activated.png)

## Sử dụng liên kết có thể chia sẻ:

Quy trình đăng ký bằng liên kết có thể chia sẻ về cơ bản giống với biểu mẫu đăng ký, điểm khác biệt duy nhất là khi sử dụng liên kết có thể chia sẻ, khách hàng của bạn có thể có một sản phẩm hoặc mẫu website được chọn sẵn trên biểu mẫu checkout (tham khảo phần Chọn sẵn sản phẩm và mẫu qua tham số URL) hoặc có thể được thêm một mã phiếu giảm giá (tham khảo phần Sử dụng tham số URL).

Quy trình đăng ký sẽ giống nhau: họ sẽ cần điền tên, tên người dùng, địa chỉ email, tên và tiêu đề website, v.v... nhưng gói hoặc mẫu site sẽ đã được chọn sẵn cho họ.

### Đăng ký bằng thanh toán thủ công:

Nếu bạn không muốn sử dụng PayPal, Stripe hoặc bất kỳ cổng thanh toán nào khác do Ultimate Multisite hoặc các tích hợp tiện ích bổ sung của nó cung cấp, bạn có thể sử dụng thanh toán thủ công cho khách hàng của mình. Bằng cách này, bạn có thể tạo hóa đơn cho họ thanh toán trên bộ xử lý thanh toán bạn ưu tiên sau khi họ đăng ký trên mạng của bạn.

Quy trình đăng ký sẽ hoàn toàn giống như trên, nhưng trên trang đăng ký, khách hàng của bạn sẽ thấy một thông báo cho biết họ sẽ nhận được email với hướng dẫn thêm để hoàn tất thanh toán.

![Thông báo thanh toán thủ công trong quá trình đăng ký](/img/frontend/registration-manual-notice.png)

Và sau khi đăng ký hoàn tất, họ sẽ thấy hướng dẫn thanh toán mà bạn đã thiết lập (và cũng nhận được hướng dẫn đó trong email của họ).

![Hướng dẫn thanh toán hiển thị sau khi đăng ký](/img/frontend/registration-payment-instructions.png)

Hướng dẫn thanh toán có thể được thay đổi tại **Ultimate Multisite > Settings > Payments** sau khi bật tùy chọn thanh toán **Manual**:

![Nút bật/tắt thanh toán Manual với trường hướng dẫn thanh toán](/img/config/manual-gateway-settings.png)

Sau khi khách hàng của bạn hoàn tất thanh toán thủ công và gửi xác nhận cho bạn, bạn cần **xác nhận thanh toán theo cách thủ công** để kích hoạt membership và website của khách hàng.

Để thực hiện việc này, hãy đi tới **Ultimate Multisite > Payments** và tìm thanh toán của khách hàng. Nó vẫn nên hiển thị trạng thái **Pending**.

![Danh sách thanh toán với thanh toán thủ công đang chờ xử lý](/img/admin/payments-list.png)

Nhấp vào số thanh toán và bạn sẽ có thể thay đổi trạng thái của nó thành **Completed**.

![Trang chi tiết thanh toán](/img/admin/payment-edit.png)

![Thay đổi trạng thái thanh toán thành Completed](/img/admin/payment-status-completed.png)

Sau khi thay đổi trạng thái của nó thành **Completed** , bạn sẽ thấy thông báo **Activate membership**. Bật tùy chọn này **on** để kích hoạt membership và website được liên kết với khách hàng này. Sau đó, nhấp vào **Save Payment**.

![Nút bật/tắt Activate membership và nút Save Payment](/img/admin/payment-activate-membership.png)

Khách hàng của bạn giờ đây sẽ có thể truy cập dashboard và tất cả các tính năng mà họ đã đăng ký.
