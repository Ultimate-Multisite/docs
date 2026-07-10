---
title: Nâng cấp một gói
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Nâng cấp gói (v2) {#upgrading-a-plan-v2}

_**LƯU Ý QUAN TRỌNG: Bài viết này đề cập đến Ultimate Multisite phiên bản 2.x.**_

Khách hàng của bạn có thể nâng cấp gói của họ bất cứ lúc nào. Họ có thể nâng cấp lên một gói khác hoặc mua bất kỳ dịch vụ hay gói bổ sung nào mà bạn cung cấp trên mạng của mình.

Trong hướng dẫn này, chúng ta sẽ tìm hiểu cách họ có thể nâng cấp gói và điều gì xảy ra sau quá trình nâng cấp.

Để nâng cấp gói, khách hàng của bạn nên truy cập Dashboard của họ và đi tới trang **Account**.

![Dashboard site con của khách hàng với liên kết menu Account hiển thị](/img/account-page/account-menu.png)

Trên trang Account, họ sẽ thấy tư cách thành viên hiện tại của mình và gói được liên kết với nó. Để nâng cấp lên một gói khác, họ phải nhấp vào **Thay đổi** ở góc trên bên phải của phần **Tư cách thành viên của bạn**.

![Trang Account với thẻ Tư cách thành viên của bạn và nút Thay đổi](/img/account-page/membership-change-button.png)

Họ sẽ được chuyển hướng đến một biểu mẫu thanh toán, nơi tất cả các gói hiện có sẽ được hiển thị.

Họ cũng sẽ có thể xem **các dịch vụ và gói có sẵn cho gói hiện tại của họ** , trong trường hợp họ chỉ muốn mua một dịch vụ hoặc gói cụ thể (như lượt truy cập không giới hạn hoặc dung lượng đĩa trong ví dụ của chúng tôi ở đây), chứ không nâng cấp gói.

![Trình chọn nâng cấp hiển thị các gói và gói bổ sung có sẵn ở phía khách hàng](/img/account-page/upgrade-picker.png)

Sau khi họ chọn sản phẩm muốn mua, họ sẽ thấy số tiền cần thanh toán ngay bây giờ - không bao gồm bất kỳ khoản tín dụng hiện có nào - và số tiền họ sẽ bị tính vào ngày thanh toán tiếp theo.

Thông thường, nếu sản phẩm là một gói khác và việc thanh toán sẽ được thực hiện giữa một lần tính phí tư cách thành viên, họ sẽ nhận được một khoản tín dụng cho số tiền đã thanh toán trên gói đầu tiên.

![Tóm tắt thanh toán nâng cấp hiển thị tín dụng đã áp dụng và số tiền thanh toán tiếp theo](/img/account-page/upgrade-summary.png)

Nếu họ chọn một gói hoặc gói bổ sung không thay đổi bất kỳ điều gì so với đăng ký hiện tại, họ sẽ thấy một thông báo giải thích điều đó.

![Thông báo khi gói được chọn không thay đổi đăng ký](/img/account-page/upgrade-no-change.png)

Sau khi thanh toán hoàn tất, (các) sản phẩm mới sẽ được thêm vào tài khoản của khách hàng của bạn và tất cả các giới hạn hoặc tính năng của (các) sản phẩm mới sẽ được thêm vào đó ngay lập tức: lượt truy cập, dung lượng đĩa, bài viết, v.v...

##

##

## Đường dẫn nâng cấp và hạ cấp {#upgrade-and-downgrade-paths}

Trên mỗi sản phẩm của bạn, bạn sẽ có một tab **Nâng cấp & Hạ cấp**. Tùy chọn đầu tiên trên tab đó là một trường có tên **Nhóm gói**.

**Nhóm gói** là thứ cho phép bạn cho Ultimate Multisite biết rằng một số gói nhất định thuộc cùng một "gia đình", và do đó nên được dùng để xây dựng các tùy chọn đường dẫn nâng cấp/hạ cấp.

![Tab Nâng cấp và Hạ cấp khi chỉnh sửa sản phẩm với trường Nhóm gói](/img/config/product-upgrades-plan-group.png)

Ví dụ, bạn có một **gói Miễn phí** , một **Gói Cơ bản** và một **Gói Cao cấp** có sẵn. Bạn muốn người dùng đăng ký theo **Gói Miễn phí** chỉ có thể nâng cấp lên **Gói Cao cấp** và bạn không muốn họ thấy "Gói Cơ bản" như một tùy chọn nâng cấp. Tất cả những gì bạn cần làm là gán cùng tên nhóm gói cho cả gói Miễn phí và Cao cấp như trong các ảnh chụp màn hình bên dưới.

![Trang sản phẩm Gói Miễn phí với nhóm gói Cao cấp được gán](/img/config/product-upgrades-free.png)

![Trang sản phẩm Gói Cao cấp với nhóm gói Cao cấp được gán](/img/config/product-upgrades-premium.png)

Điều này sẽ cho Ultimate Multisite biết rằng có một "gia đình" các gói trong mạng được gọi là **Cao cấp**. Khi cung cấp nâng cấp hoặc hạ cấp, chỉ các gói từ cùng một gia đình mới được trình bày như một tùy chọn cho người dùng.
