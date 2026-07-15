---
title: Nche Plan
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Ndemu Plan (v2)

_**LƯU Ý QUAN TRỌNG: Bài viết này đề cập đến Ultimate Multisite phiên bản 2.x.**_

Các khách hàng của bạn có thể nâng cấp gói dịch vụ của họ bất cứ lúc nào. Họ có thể chọn nâng cấp lên một gói khác hoặc mua thêm bất kỳ dịch vụ hay gói bổ sung nào mà bạn cung cấp trên mạng lưới của mình.

Trong hướng dẫn này, chúng tôi sẽ nói cho các bạn biết làm thế nào để họ có thể nâng cấp gói và điều gì xảy ra sau quá trình nâng cấp đó.

Để nâng cấp gói, khách hàng của bạn nên truy cập vào dashboard của họ và đi đến trang **Account** (Tài khoản).

![Dashboard của phụ trang khách hàng với liên kết menu Account hiển thị](/img/account-page/account-menu.png)

Trên trang Account, họ sẽ thấy thông tin về tư cách thành viên hiện tại của mình và gói dịch vụ đang áp dụng cho nó. Để nâng cấp lên một gói khác, họ phải nhấn vào **Change** (Thay đổi) ở góc trên bên phải của phần **Your Membership** (Thành viên của bạn).

![Trang Account Thẻ Thành viên của bạn với nút Change](/img/account-page/membership-change-button.png)

Họ sẽ được chuyển hướng đến một biểu mẫu thanh toán nơi tất cả các gói dịch vụ có sẵn sẽ được hiển thị.

Họ cũng có thể xem **các dịch vụ và gói có sẵn cho gói hiện tại của họ**, trong trường hợp họ chỉ muốn mua một dịch vụ hoặc gói cụ thể (như số lượt truy cập không giới hạn hay dung lượng đĩa trong ví dụ của chúng tôi ở đây), chứ không phải nâng cấp gói.

![Bộ chọn nâng cấp hiển thị các gói và gói có sẵn ở phía khách hàng](/img/account-page/upgrade-picker.png)

Sau khi họ chọn sản phẩm muốn mua, họ sẽ thấy số tiền cần phải trả ngay bây giờ - chưa tính bất kỳ khoản tín dụng nào hiện có - và số tiền sẽ bị tính vào ngày thanh toán tiếp theo.

Thông thường, nếu sản phẩm là một gói khác và việc thanh toán được thực hiện giữa các khoản phí thành viên, họ sẽ nhận được tín dụng cho số tiền đã trả cho gói trước đó.

![Upgrade payment summary showing credit applied and next billing amount](/img/account-page/upgrade-summary.png)

Họ chọn một gói hoặc gói mà không thay đổi bất cứ điều gì so với đăng ký hiện tại, họ sẽ thấy một thông báo giải thích về điều đó.

![Lưu ý khi gói được chọn không thay đổi đăng ký](/img/account-page/upgrade-no-change.png)

Sau khi thanh toán hoàn tất, các sản phẩm mới sẽ được thêm vào tài khoản của khách hàng và tất cả các giới hạn hoặc tính năng của sản phẩm mới sẽ được thêm vào ngay lập tức: lượt truy cập, dung lượng đĩa, bài viết, v.v...

##

## Lộ trình Nâng cấp và Hạ cấp (Upgrade and Downgrade Paths) {#upgrade-and-downgrade-paths}

Trên mỗi sản phẩm của bạn, bạn sẽ có một tab **Up & Downgrades**. Tùy chọn đầu tiên trên tab đó là một trường gọi là **Plan Group**.

**Plan groups** chính là thứ cho phép bạn bảo Ultimate Multisite biết rằng các gói nhất định thuộc cùng một "gia đình", và do đó nên được sử dụng để xây dựng các tùy chọn đường nâng cấp/hạ cấp.

![Tab chỉnh sửa sản phẩm Up and Downgrades với trường Plan Group](/img/config/product-upgrades-plan-group.png)

Ví dụ, bạn có một **Free plan** (Gói Miễn phí), một **Basic Plan** (Gói Cơ bản) và một **Premium Plan** (Gói Cao cấp). Bạn muốn người dùng đăng ký dưới **Free Plan** chỉ có thể nâng cấp lên **Premium Plan** và bạn không muốn họ thấy "Basic Plan" là một tùy chọn nâng cấp. Tất cả những gì bạn cần làm là gán cùng một tên plan group cho cả Free Plan và Premium Plan như được hiển thị trong các ảnh chụp màn hình bên dưới.

![Trang sản phẩm Free Plan với gói High End được gán Plan Group](/img/config/product-upgrades-free.png)

![Trang sản phẩm Premium Plan với gói High End được gán Plan Group](/img/config/product-upgrades-premium.png)

Iye so, cái này phải bảo cho Ultimate Multisite biết rằng trong mạng lưới của nó có một "gia đình" các gói dịch vụ tên là **High End**. Khi bạn muốn nâng cấp hoặc hạ cấp, chỉ những gói thuộc cùng một gia đình đó mới được hiện ra làm lựa chọn cho người dùng thôi.
