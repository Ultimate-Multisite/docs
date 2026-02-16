---
title: Nhận Thanh Toán
sidebar_position: 15
_i18n_hash: 8d591eda27cdf7dcd856d9b3c806db00
---
# Nhận Thanh Toán (v2)

_**LƯU Ý QUAN TRỌNG: Bài viết này áp dụng cho Ultimate Multisite phiên bản 2.x.**_

Ultimate Multisite tích hợp sẵn hệ thống thành viên và thanh toán. Để hệ thống thanh toán hoạt động, chúng tôi đã tích hợp các cổng thanh toán phổ biến nhất trong thương mại điện tử. Các cổng thanh toán mặc định trong Ultimate Multisite là _Stripe_, _PayPal_ và Thanh toán thủ công. Bạn cũng có thể sử dụng _WooCommerce_, _GoCardless_ và _Payfast_ để nhận thanh toán bằng cách cài đặt các add-on tương ứng.

## Cài Đặt Cơ Bản

Bạn có thể cấu hình bất kỳ cổng thanh toán nào trong phần cài đặt thanh toán của Ultimate Multisite. Truy cập bằng cách vào **Ultimate Multisite menu > Settings > Payments.**

![Trang cài đặt thanh toán trong Ultimate Multisite](/img/config/settings-payment-gateways.png)

Trước khi thiết lập cổng thanh toán, hãy xem qua các cài đặt thanh toán cơ bản bạn có thể cấu hình:

**Force auto-renew:** Tùy chọn này đảm bảo thanh toán sẽ tự động gia hạn vào cuối mỗi chu kỳ thanh toán tùy theo tần suất thanh toán mà người dùng đã chọn.

![Nút bật/tắt Force auto-renew](/img/config/settings-payment-gateways.png)

**Allow trials without payment method:** Khi bật tùy chọn này, khách hàng không cần nhập thông tin tài chính trong quá trình đăng ký. Thông tin này chỉ được yêu cầu khi thời gian dùng thử kết thúc.

![Nút bật/tắt Allow trials without payment method](/img/config/settings-payment-gateways.png)

**Send invoice on payment confirmation:** Tùy chọn này cho phép bạn chọn có gửi hóa đơn sau khi thanh toán hay không. Lưu ý rằng người dùng có thể xem lịch sử thanh toán trong dashboard của subsite. Tùy chọn này không áp dụng cho Cổng thanh toán thủ công.

![Nút bật/tắt Send invoice on payment confirmation](/img/config/settings-payment-gateways.png)

**Invoice numbering scheme:** Tại đây, bạn có thể chọn sử dụng mã tham chiếu thanh toán hoặc hệ thống số thứ tự. Nếu chọn mã tham chiếu thanh toán cho hóa đơn, bạn không cần cấu hình gì thêm. Nếu chọn hệ thống số thứ tự, bạn cần cấu hình **next invoice number** (Số này sẽ được dùng làm số hóa đơn cho hóa đơn tiếp theo được tạo trong hệ thống. Số này tự động tăng thêm một mỗi khi có hóa đơn mới. Bạn có thể thay đổi và lưu để đặt lại số thứ tự hóa đơn về một giá trị cụ thể) và **invoice number prefix.**

![Lựa chọn hệ thống đánh số hóa đơn](/img/config/settings-payment-gateways.png)

![Cài đặt số thứ tự và tiền tố hóa đơn](/img/config/settings-payment-gateways.png)

## Tìm các cổng thanh toán ở đâu:

Bạn có thể thiết lập các cổng thanh toán trên cùng một trang (**Ultimate Multisite > Settings > Payments**). Ngay bên dưới **active payment gateways**, bạn sẽ thấy: _Stripe_, _Stripe Checkout_, _PayPal_ và _Manual_.

![Danh sách các cổng thanh toán đang hoạt động](/img/config/settings-payment-gateways.png)

Chúng tôi có bài viết riêng cho từng cổng thanh toán, hướng dẫn bạn các bước thiết lập. Bạn có thể tìm thấy ở các liên kết bên dưới.

**Thiết lập cổng thanh toán Stripe**

**Thiết lập cổng thanh toán PayPal**

**Thiết lập thanh toán thủ công**

Nếu bạn muốn sử dụng _WooCommerce_, _GoCardless_ hoặc _Payfast_ làm cổng thanh toán, bạn cần **cài đặt và cấu hình các add-on tương ứng**.

### Cách cài đặt add-on WooCommerce:

Chúng tôi hiểu rằng _Stripe_ và _PayPal_ không khả dụng ở một số quốc gia, điều này hạn chế người dùng Ultimate Multisite sử dụng plugin của chúng tôi một cách hiệu quả. Vì vậy, chúng tôi đã tạo add-on tích hợp _WooCommerce_, một plugin thương mại điện tử rất phổ biến. Các nhà phát triển trên khắp thế giới đã tạo ra nhiều add-on để tích hợp các cổng thanh toán khác nhau vào WooCommerce. Chúng tôi tận dụng điều này để mở rộng các cổng thanh toán bạn có thể sử dụng với hệ thống thanh toán của Ultimate Multisite.

_**QUAN TRỌNG:** Ultimate Multisite: WooCommerce Integration yêu cầu WooCommerce phải được kích hoạt ít nhất trên trang chính của bạn._

Đầu tiên, hãy truy cập trang add-ons. Bạn có thể tìm thấy bằng cách vào **Ultimate Multisite > Settings**. Bạn sẽ thấy bảng **Add-ons**. Nhấp vào **Check our Add-ons**.

![Trang cài đặt với phần add-ons](/img/config/settings-general.png)

Sau khi nhấp vào **Check our Add-ons**, bạn sẽ được chuyển đến trang add-ons. Tại đây bạn có thể tìm thấy tất cả add-on của Ultimate Multisite. Nhấp vào add-on **Ultimate Multisite: WooCommerce Integration**.

![Trang add-ons hiển thị danh sách các add-on có sẵn](/img/config/settings-general.png)

Một cửa sổ sẽ hiện lên với chi tiết add-on. Chỉ cần nhấp vào **Install Now**.

![Hộp thoại cài đặt add-on WooCommerce](/img/config/settings-general.png)

Sau khi cài đặt xong, bạn sẽ được chuyển đến trang plugins. Tại đây, chỉ cần nhấp vào **Network Activate** và add-on WooCommerce sẽ được kích hoạt trên toàn mạng của bạn.

![Kích hoạt Network Activate cho add-on WooCommerce](/img/config/settings-general.png)

Sau khi kích hoạt, nếu bạn vẫn chưa cài đặt và kích hoạt plugin WooCommerce trên website, bạn sẽ nhận được thông báo nhắc nhở.

![Thông báo nhắc nhở kích hoạt WooCommerce](/img/config/settings-general.png)

Để tìm hiểu thêm về add-on WooCommerce Integration, **nhấp vào đây**.

### Cách cài đặt add-on GoCardless:

Các bước cài đặt add-on _GoCardless_ khá giống với add-on _WooCommerce_. Hãy truy cập trang add-ons và chọn add-on **Ultimate Multisite: GoCardless Gateway**.

![Trang add-ons hiển thị danh sách các add-on có sẵn](/img/config/settings-general.png)

Cửa sổ add-on sẽ hiện lên. Nhấp vào **Install Now**.

![Hộp thoại cài đặt add-on GoCardless](/img/config/settings-general.png)

Sau khi cài đặt xong, bạn sẽ được chuyển đến trang plugins. Tại đây, chỉ cần nhấp vào **Network Activate** và add-on _GoCardless_ sẽ được kích hoạt trên toàn mạng của bạn.

![Kích hoạt Network Activate cho add-on GoCardless](/img/config/settings-general.png)

Để tìm hiểu cách bắt đầu với cổng thanh toán _GoCardless_, **đọc bài viết này**.

### Cách cài đặt add-on Payfast:

Truy cập trang add-ons và chọn add-on **Ultimate Multisite: Payfast Gateway**.

![Trang add-ons hiển thị danh sách các add-on có sẵn](/img/config/settings-general.png)

Cửa sổ add-on sẽ hiện lên. Nhấp vào **Install Now.**

![Hộp thoại cài đặt add-on Payfast](/img/config/settings-general.png)

Sau khi cài đặt xong, bạn sẽ được chuyển đến trang plugins. Tại đây, chỉ cần nhấp vào **Network Activate** và add-on _Payfast_ sẽ được kích hoạt trên toàn mạng của bạn.

![Kích hoạt Network Activate cho add-on Payfast](/img/config/settings-general.png)
