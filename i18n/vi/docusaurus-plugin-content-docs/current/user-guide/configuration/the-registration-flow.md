---
title: Quy trình Đăng ký
sidebar_position: 3
_i18n_hash: 73484be47ec750747cb9d94ea874d97f
---
# Quy Trình Đăng Ký (v2)

_**LƯU Ý QUAN TRỌNG: Bài viết này áp dụng cho Ultimate Multisite phiên bản 2.x.**_

Người dùng có thể đăng ký vào mạng của bạn theo nhiều cách khác nhau. Họ có thể sử dụng biểu mẫu đăng ký hoặc một liên kết chia sẻ đến gói dịch vụ đã được chọn sẵn. Ở đây, chúng tôi sẽ hướng dẫn bạn cách khách hàng có thể đăng ký vào mạng của bạn thông qua các phương thức có sẵn và những gì xảy ra sau khi họ đăng ký.

## Sử Dụng Biểu Mẫu Đăng Ký:

Đây là quy trình đăng ký tiêu chuẩn. Bạn tạo một trang đăng ký với **biểu mẫu thanh toán** và đây sẽ là nơi khách hàng truy cập để đăng ký vào mạng của bạn và đăng ký gói dịch vụ. Bạn có thể tạo nhiều trang đăng ký, mỗi trang với một biểu mẫu đăng ký khác nhau nếu muốn.

Trang mặc định cho việc đăng ký là [_**yourdomain.com/register**_](http://yourdomain.com/register), nhưng bạn có thể thay đổi điều này bất cứ lúc nào tại **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Sau khi người dùng truy cập trang đăng ký của bạn (thường bằng cách nhấp vào nút **Đăng nhập** hoặc **Mua ngay**), họ sẽ thấy biểu mẫu đăng ký ở đó.

![Biểu mẫu đăng ký hiển thị trên trang đăng ký](/img/config/checkout-forms-list.png)

Tất cả những gì họ cần làm là điền vào các trường bắt buộc - email, tên đăng nhập, mật khẩu, v.v... - và thanh toán cho gói dịch vụ hoặc xác nhận địa chỉ email nếu họ đăng ký gói miễn phí hoặc gói trả phí có thời gian dùng thử mà không cần thông tin thanh toán.

Trên trang "Cảm ơn", họ sẽ thấy thông báo cho biết họ cần xác nhận địa chỉ email hay website của họ đã được kích hoạt và có thể bắt đầu sử dụng.

![Trang Cảm ơn sau khi đăng ký](/img/config/checkout-form-editor.png)

Nếu yêu cầu xác nhận địa chỉ email, họ sẽ cần vào hộp thư email và nhấp vào liên kết xác minh. Website của họ sẽ không được kích hoạt nếu địa chỉ email chưa được xác minh.

Nếu họ đã đăng ký gói trả phí hoặc việc xác minh email không bắt buộc trên mạng của bạn, website của họ sẽ được kích hoạt ngay sau khi thanh toán và họ sẽ thấy liên kết để đăng nhập vào dashboard.

![Website đã kích hoạt với liên kết đăng nhập vào dashboard](/img/config/checkout-form-editor.png)

## Sử Dụng Liên Kết Chia Sẻ:

Quy trình đăng ký bằng liên kết chia sẻ về cơ bản giống như biểu mẫu đăng ký, điểm khác biệt duy nhất là khi sử dụng liên kết chia sẻ, khách hàng của bạn có thể có sản phẩm hoặc mẫu website được chọn sẵn trên biểu mẫu thanh toán (tham khảo phần Chọn sẵn sản phẩm và mẫu qua tham số URL) hoặc có thể có mã giảm giá được thêm sẵn (tham khảo phần Sử dụng Tham số URL).

Quy trình đăng ký sẽ giống nhau: họ sẽ cần điền tên, tên đăng nhập, địa chỉ email, tên website và tiêu đề, v.v... nhưng gói dịch vụ hoặc mẫu website sẽ được chọn sẵn cho họ.

### Đăng Ký Sử Dụng Thanh Toán Thủ Công:

Nếu bạn không muốn sử dụng PayPal, Stripe hoặc bất kỳ cổng thanh toán nào khác được Ultimate Multisite hoặc các add-on tích hợp cung cấp, bạn có thể sử dụng thanh toán thủ công cho khách hàng. Bằng cách này, bạn có thể tạo hóa đơn để họ thanh toán trên hệ thống thanh toán bạn ưa thích sau khi họ đăng ký vào mạng của bạn.

Quy trình đăng ký sẽ hoàn toàn giống như trên, nhưng trên trang đăng ký, khách hàng của bạn sẽ thấy thông báo rằng họ sẽ nhận được email với hướng dẫn tiếp theo để hoàn tất thanh toán.

![Thông báo thanh toán thủ công trong quá trình đăng ký](/img/config/settings-payment-gateways.png)

Và sau khi hoàn tất đăng ký, họ sẽ thấy hướng dẫn thanh toán mà bạn đã thiết lập (và cũng nhận được qua email).

![Hướng dẫn thanh toán hiển thị sau khi đăng ký](/img/config/settings-payment-gateways.png)

Hướng dẫn thanh toán có thể được thay đổi tại **Ultimate Multisite > Settings > Payments** sau khi bật tùy chọn thanh toán **Manual**:

![Nút bật thanh toán thủ công với trường hướng dẫn thanh toán](/img/config/settings-payment-gateways.png)

Sau khi khách hàng hoàn tất thanh toán thủ công và gửi xác nhận cho bạn, bạn cần **xác nhận thanh toán thủ công** để kích hoạt gói thành viên và website của khách hàng.

Để làm điều này, vào **Ultimate Multisite > Payments** và tìm khoản thanh toán của khách hàng. Nó sẽ vẫn hiển thị trạng thái **Pending**.

![Danh sách thanh toán với khoản thanh toán thủ công đang chờ xử lý](/img/admin/payments-list.png)

Nhấp vào số thanh toán và bạn sẽ có thể thay đổi trạng thái thành **Completed**.

![Trang chi tiết thanh toán](/img/admin/payments-list.png)

![Thay đổi trạng thái thanh toán thành Completed](/img/admin/payments-list.png)

Sau khi thay đổi trạng thái thành **Completed**, bạn sẽ thấy thông báo **Activate membership**. Bật tùy chọn này **on** để kích hoạt gói thành viên và website liên kết với khách hàng này. Sau đó, nhấp **Save Payment**.

![Nút bật Activate membership và nút Save Payment](/img/admin/payments-list.png)

Khách hàng của bạn giờ đây sẽ có thể truy cập dashboard và tất cả các tính năng mà họ đã đăng ký.
