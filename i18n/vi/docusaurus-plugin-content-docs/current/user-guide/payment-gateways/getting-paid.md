---
title: Nhận thanh toán
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Nhận thanh toán (v2)

_**LƯU Ý QUAN TRỌNG: Bài viết này đề cập đến Ultimate Multisite phiên bản 2.x.**_

Ultimate Multisite có hệ thống thành viên và thanh toán tích hợp sẵn. Để hệ thống thanh toán của chúng tôi hoạt động, chúng tôi đã tích hợp các cổng thanh toán phổ biến nhất được dùng trong thương mại điện tử. Các cổng thanh toán mặc định trong Ultimate Multisite là _Stripe_ , _PayPal_ , và Thanh toán thủ công. Bạn cũng có thể dùng _WooCommerce_ , _GoCardless_ và _Payfast_ để nhận thanh toán bằng cách cài đặt các add-on tương ứng của chúng.

## Cài đặt cơ bản

Bạn có thể cấu hình bất kỳ cổng thanh toán nào trong số này trong cài đặt thanh toán của Ultimate Multisite. Bạn có thể tìm thấy bằng cách vào **menu Ultimate Multisite > Cài đặt > Thanh toán.**

![Trang cài đặt thanh toán trong Ultimate Multisite hiển thị bảng Thanh toán](/img/config/payments-settings-page.png)

Trước khi bạn thiết lập cổng thanh toán, vui lòng xem qua các cài đặt thanh toán cơ bản mà bạn có thể cấu hình:

**Bắt buộc tự động gia hạ** **n:** Tùy chọn này sẽ đảm bảo rằng khoản thanh toán sẽ tự động lặp lại vào cuối mỗi chu kỳ thanh toán tùy thuộc vào tần suất thanh toán mà người dùng đã chọn.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 kiểm tra xem cổng đang hoạt động có thông tin xác thực gia hạn có thể tái sử dụng hay không trước khi lưu một gói thành viên định kỳ có bật tự động gia hạn. Thông tin xác thực gia hạn có thể là subscription của cổng, thỏa thuận thanh toán, vault token đã lưu, hoặc phương thức thanh toán có thể tái sử dụng tương đương. Nếu cổng báo rằng không có thông tin xác thực khả dụng nào tồn tại, Ultimate Multisite sẽ lưu gói thành viên nhưng tắt tự động gia hạn và ghi lại trạng thái thiếu thông tin xác thực để quản trị viên hoặc quy trình hỗ trợ có thể yêu cầu khách hàng ủy quyền lại thanh toán trước ngày gia hạn.

Điều này ngăn một gói thành viên trông như thể sẽ tự động gia hạn trong khi cổng chỉ có thể thu các khoản thanh toán một lần. Các add-on cổng nên xác nhận rằng các checkout định kỳ lưu một thông tin xác thực có thể tái sử dụng, đặc biệt khi cổng hỗ trợ cả chế độ thu một lần và chế độ thanh toán vaulted/subscription.

**Cho phép dùng thử không cần phương thức** **thanh toán:** Khi bật tùy chọn này, client của bạn sẽ không phải thêm bất kỳ thông tin tài chính nào trong quá trình đăng ký. Điều này chỉ được yêu cầu khi thời gian dùng thử hết hạn.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Gửi hóa đơn khi xác nhận thanh toán:** Tùy chọn này cho bạn lựa chọn có gửi hóa đơn sau khi thanh toán hay không. Lưu ý rằng người dùng sẽ có quyền truy cập lịch sử thanh toán của họ trong dashboard subsite của họ. Tùy chọn này không áp dụng cho Cổng thủ công.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Sơ đồ đánh số hóa đơn:** Tại đây, bạn có thể chọn mã tham chiếu thanh toán hoặc sơ đồ số tuần tự. Nếu bạn chọn dùng mã tham chiếu thanh toán cho hóa đơn của mình, bạn không cần cấu hình gì thêm. Nếu bạn chọn dùng sơ đồ số tuần tự, bạn sẽ cần cấu hình **số hóa đơn tiếp theo** (Số này sẽ được dùng làm số hóa đơn cho hóa đơn tiếp theo được tạo trên hệ thống. Nó tăng thêm một mỗi khi hóa đơn mới được tạo. Bạn có thể thay đổi và lưu nó để đặt lại số thứ tự hóa đơn về một giá trị cụ thể) và **tiền tố số hóa đơn.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Nơi tìm các cổng:

Bạn có thể thiết lập các cổng thanh toán trên cùng một trang ( **Ultimate Multisite > Cài đặt > Thanh toán**). Ngay bên dưới **cổng thanh toán đang hoạt động** , bạn sẽ có thể thấy: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ và _Manual_.

![Phần Cổng thanh toán đang hoạt động liệt kê Stripe, Stripe Checkout, PayPal và Manual](/img/config/payments-active-gateways.png)

Chúng tôi có một bài viết riêng cho từng cổng thanh toán để hướng dẫn bạn qua các bước thiết lập; bạn có thể tìm thấy chúng ở các liên kết bên dưới.

Bạn có thể xem và chỉnh sửa chi tiết thanh toán:

![Giao diện chỉnh sửa thanh toán](/img/admin/payment-edit.png)

Đây là chế độ xem đầy đủ của trang chỉnh sửa thanh toán:

![Giao diện chỉnh sửa thanh toán đầy đủ](/img/admin/payment-edit-full.png)

Đây cũng là chế độ xem đầy đủ của cài đặt cổng thanh toán:

![Trang cài đặt cổng thanh toán đầy đủ](/img/config/settings-payments-gateways-full.png)

**Thiết lập cổng Stripe**

**Thiết lập cổng PayPal**** **

**Thiết lập thanh toán thủ công**

Bây giờ, nếu bạn muốn dùng _WooCommerce_ , _GoCardless_ hoặc _Payfast_ làm cổng thanh toán, bạn sẽ cần **cài đặt và cấu hình các add-on của chúng**.

### Cách cài đặt add-on WooCommerce:

Chúng tôi hiểu rằng _Stripe_ và _PayPal_ không khả dụng ở một số quốc gia, điều này giới hạn hoặc cản trở người dùng Ultimate Multisite sử dụng plugin của chúng tôi một cách hiệu quả. Vì vậy, chúng tôi đã tạo một add-on để tích hợp _WooCommerce,_ vốn là một plugin thương mại điện tử rất phổ biến. Các nhà phát triển trên khắp thế giới đã tạo add-on để tích hợp các cổng thanh toán khác nhau vào nó. Chúng tôi đã tận dụng điều này để mở rộng các cổng thanh toán bạn có thể dùng với hệ thống thanh toán của Ultimate Multisite.

_**QUAN TRỌNG:** Ultimate Multisite: WooCommerce Integration yêu cầu WooCommerce được kích hoạt ít nhất trên site chính của bạn._

Trước tiên, vui lòng đi tới trang add-on. Bạn có thể tìm thấy bằng cách vào **Ultimate Multisite > Settings**. Bạn sẽ thấy bảng **Add-ons**. Nhấp vào **Check our Add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Sau khi nhấp vào **Check our Add-ons** , bạn sẽ được chuyển hướng đến trang add-on. Tại đây bạn có thể tìm thấy tất cả add-on của Ultimate Multisite. Nhấp vào add-on **Ultimate Multisite: WooCommerce Integration**.

![Trang add-on liệt kê các add-on Ultimate Multisite bao gồm WooCommerce Integration](/img/addons/addons-page.png)

Một cửa sổ sẽ bật lên với chi tiết tiện ích bổ sung. Chỉ cần nhấp vào **Cài đặt ngay**.

<!-- Không có ảnh chụp màn hình: hộp thoại chi tiết tiện ích bổ sung Ultimate Multisite WooCommerce Integration với nút Cài đặt ngay -->

Sau khi cài đặt xong, bạn sẽ được chuyển hướng đến trang plugin. Tại đây, chỉ cần nhấp vào **Kích hoạt trên mạng** và tiện ích bổ sung WooCommerce sẽ được kích hoạt trên mạng của bạn.

<!-- Không có ảnh chụp màn hình: Trang plugin với liên kết Kích hoạt trên mạng cho tiện ích bổ sung WooCommerce Integration -->

Sau khi kích hoạt, nếu bạn vẫn chưa cài đặt và kích hoạt plugin WooCommerce trên trang web của mình, bạn sẽ nhận được lời nhắc.

<!-- Không có ảnh chụp màn hình: Thông báo quản trị nhắc quản trị viên cài đặt và kích hoạt plugin WooCommerce -->

Để đọc thêm về tiện ích bổ sung WooCommerce Integration, **nhấp vào đây**.

### Cách cài đặt tiện ích bổ sung GoCardless:

Các bước để cài đặt tiện ích bổ sung _GoCardless_ gần như giống với tiện ích bổ sung _WooCommerce_. Vui lòng đi đến trang tiện ích bổ sung và chọn tiện ích bổ sung **Ultimate Multisite: GoCardless Gateway**.

<!-- Không có ảnh chụp màn hình: Trang tiện ích bổ sung với tiện ích bổ sung Ultimate Multisite GoCardless Gateway được tô sáng -->

Cửa sổ tiện ích bổ sung sẽ bật lên. Nhấp vào **Cài đặt ngay**.

<!-- Không có ảnh chụp màn hình: hộp thoại chi tiết tiện ích bổ sung Ultimate Multisite GoCardless Gateway với nút Cài đặt ngay -->

Sau khi cài đặt xong, bạn sẽ được chuyển hướng đến trang plugin. Tại đây, chỉ cần nhấp vào **Kích hoạt trên mạng** và tiện ích bổ sung _GoCardless_ sẽ được kích hoạt trên mạng của bạn.

<!-- Không có ảnh chụp màn hình: Trang plugin với liên kết Kích hoạt trên mạng cho tiện ích bổ sung GoCardless Gateway -->

Để tìm hiểu cách bắt đầu với gateway _GoCardless_, **đọc bài viết này**.

### Cách cài đặt tiện ích bổ sung Payfast:

Đi đến trang tiện ích bổ sung và chọn tiện ích bổ sung **Ultimate Multisite: Payfast Gateway**.

<!-- Không có ảnh chụp màn hình: Trang tiện ích bổ sung với tiện ích bổ sung Ultimate Multisite Payfast Gateway được tô sáng -->

Cửa sổ tiện ích bổ sung sẽ bật lên. Nhấp vào **Cài đặt ngay.**

<!-- Không có ảnh chụp màn hình: hộp thoại chi tiết tiện ích bổ sung Ultimate Multisite Payfast Gateway với nút Cài đặt ngay -->

Sau khi cài đặt xong, bạn sẽ được chuyển hướng đến trang plugin. Tại đây, chỉ cần nhấp vào **Kích hoạt trên mạng** và tiện ích bổ sung _Payfast_ sẽ được kích hoạt trên mạng của bạn.

<!-- Không có ảnh chụp màn hình: Trang plugin với liên kết Kích hoạt trên mạng cho tiện ích bổ sung Payfast Gateway -->
