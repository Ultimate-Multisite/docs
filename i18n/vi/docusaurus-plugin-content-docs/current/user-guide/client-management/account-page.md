---
title: Trang Tài Khoản Khách Hàng
sidebar_position: 14
_i18n_hash: 60261800e2a155b4b190a325bdb50bb2
---
# Trang Tài Khoản Của Khách Hàng (v2)

_**LƯU Ý QUAN TRỌNG: Bài viết này áp dụng cho Ultimate Multisite phiên bản 2.x.**_

Khi khách hàng đăng ký một gói dịch vụ trên mạng của bạn, họ sẽ được truy cập vào website và dashboard với các thông tin quan trọng về thanh toán, gói thành viên, tên miền, giới hạn gói dịch vụ, v.v...

Trong hướng dẫn này, chúng tôi sẽ giới thiệu cho bạn về trang tài khoản của khách hàng và bạn sẽ thấy những gì khách hàng có thể xem và thực hiện trong đó.

## Trang Tài Khoản

Trang tài khoản có thể truy cập bằng cách nhấp vào **Account** trong dashboard của khách hàng.

![Menu Account trong dashboard của khách hàng](/img/admin/dashboard.png)

![Tổng quan trang tài khoản khách hàng](/img/admin/dashboard.png)

Sau khi khách hàng nhấp vào, họ sẽ thấy tổng quan về gói thành viên, địa chỉ thanh toán, hóa đơn, tên miền, giới hạn website, và cũng có thể thay đổi **Site Template** (nếu mạng của bạn cho phép).

Họ cũng có thể thay đổi gói thành viên sang gói khác, hoặc mua thêm gói bổ sung hay dịch vụ mà bạn cung cấp. Hãy cùng xem chi tiết từng phần.

### Tổng Quan Gói Thành Viên:

Khối đầu tiên ngay bên dưới tên website của khách hàng hiển thị tổng quan về gói hiện tại và các dịch vụ/gói bổ sung đã mua kèm. Khối này cũng hiển thị số thành viên, số tiền thanh toán ban đầu, chi phí của gói dịch vụ và các gói bổ sung, cũng như số lần họ đã được tính phí cho gói thành viên này. Họ cũng có thể xem trạng thái gói thành viên là **Active** (Đang hoạt động), **Expired** (Hết hạn) hay **Canceled** (Đã hủy).

![Tổng quan gói thành viên hiển thị gói dịch vụ, số tiền và chi tiết thanh toán](/img/admin/memberships-list.png)

Ngay bên dưới khối này, khách hàng có thể thấy các khối **About This Site** và **Site Limits**. Các khối này hiển thị tất cả giới hạn của gói dịch vụ: dung lượng ổ đĩa, bài viết, trang, lượt truy cập, v.v... Các giới hạn này có thể được cấu hình trên trang của từng gói tại **Ultimate Multisite > Products**.

![Khối About This Site và Site Limits hiển thị các giới hạn của gói dịch vụ](/img/admin/dashboard.png)

Ở phía bên phải của **Your Membership**, khách hàng có thể nhấp vào **Change**. Thao tác này sẽ hiển thị tất cả các gói dịch vụ và gói bổ sung/dịch vụ có sẵn. Nếu họ chọn một gói khác, các giới hạn của gói mới sẽ được áp dụng thay thế cho các giới hạn hiện tại của gói thành viên - bất kể họ đang hạ cấp hay nâng cấp.

Còn nếu khách hàng chọn mua các gói bổ sung hoặc dịch vụ cho gói thành viên hiện tại - như thêm dung lượng ổ đĩa hoặc lượt truy cập - gói thành viên hiện tại sẽ không thay đổi mà chỉ thêm các gói bổ sung mới vào.

Lưu ý rằng mã giảm giá không thể được thêm vào trang thay đổi gói thành viên này. Nếu khách hàng đã sử dụng mã giảm giá khi mua gói thành viên lần đầu, mã đó cũng sẽ được áp dụng cho gói thành viên mới.

### Cập Nhật Địa Chỉ Thanh Toán:

Trên trang tài khoản, khách hàng cũng có thể cập nhật địa chỉ thanh toán. Họ chỉ cần nhấp vào **Update** bên cạnh _Billing Address_.

![Phần Billing Address với nút Update](/img/admin/customers-list.png)

Một cửa sổ mới sẽ xuất hiện cho khách hàng. Họ chỉ cần điền địa chỉ mới và nhấp vào _Save Changes_.

![Biểu mẫu cập nhật địa chỉ thanh toán](/img/admin/customers-list.png)

### Thay Đổi Site Template:

Để cho phép khách hàng thay đổi site template, bạn cần vào **Ultimate Multisite > Settings > Sites** và bật tùy chọn **Allow Template Switching**.

Ngoài ra, tại **Ultimate Multisite > Products**, chọn gói dịch vụ của bạn và vào tab **Site Templates**. Đảm bảo tùy chọn **Allow Site Templates** đã được bật và trong **Site Template Selection Mode**, tùy chọn **Choose Available Site Templates** đã được chọn.

![Tab site templates của sản phẩm với chế độ chọn template](/img/config/product-site-templates.png)

Bạn sẽ có thể thấy tất cả các site template có sẵn trên website của mình. Chọn những template bạn muốn cung cấp và những template bạn không muốn khách hàng đăng ký gói này sử dụng. Lưu ý rằng tùy chọn này cũng ảnh hưởng đến biểu mẫu thanh toán, vì vậy bất kỳ template nào được chọn là **Not Available** sẽ không xuất hiện trên trang đăng ký cho gói này.

Bây giờ khách hàng có thể nhấp vào **Change Site Template** trong trang tài khoản của họ.

![Nút Change Site Template trên trang tài khoản](/img/admin/dashboard.png)  
Danh sách tất cả các Site Template có sẵn cho gói này sẽ xuất hiện cho khách hàng.

![Danh sách các site template có sẵn cho gói dịch vụ](/img/config/site-templates-list.png)

Sau khi chọn template muốn chuyển đổi, họ sẽ được yêu cầu xác nhận thay đổi.

![Hộp thoại xác nhận chuyển đổi site template](/img/admin/dashboard.png)

Sau khi bật xác nhận và nhấp vào **Process Switch**, site template mới sẽ được áp dụng cho website của khách hàng.

### Thêm Tên Miền Tùy Chỉnh:

Khách hàng cũng có tùy chọn thêm tên miền tùy chỉnh cho gói này trên trang tài khoản. Để cho phép khách hàng sử dụng tên miền tùy chỉnh, vào **Ultimate Multisite > Settings >** **Domain Mapping**.

Bật tùy chọn **Enable Domain Mapping**. Điều này sẽ cho phép khách hàng sử dụng tên miền tùy chỉnh ở cấp độ mạng.

Đừng quên kiểm tra xem domain mapping có được bật ở cấp độ sản phẩm hay không - vì bạn có thể giới hạn một sản phẩm không cho phép khách hàng sử dụng tên miền tùy chỉnh.

Vào **Ultimate Multisite > Products**. Chọn gói dịch vụ bạn muốn và vào tab **Custom Domains**. Bật tùy chọn **Allow Custom Domains**.

![Tab Custom Domains với nút bật Allow Custom Domains](/img/config/product-custom-domains.png)

Điều này sẽ cho phép tất cả khách hàng đăng ký gói cụ thể này sử dụng tên miền tùy chỉnh. Bây giờ, trên trang Account, khách hàng có thể thêm tên miền tùy chỉnh bằng cách nhấp vào **Add Domain**.

![Nút Add Domain trên trang tài khoản](/img/admin/domains-list.png)

Cửa sổ đầu tiên mở ra sẽ hiển thị cho khách hàng hướng dẫn về cách cập nhật bản ghi DNS để tên miền tùy chỉnh này hoạt động trên mạng của bạn.

![Hướng dẫn DNS hiển thị khi thêm tên miền tùy chỉnh](/img/admin/domains-list.png)

Thông báo này có thể được chỉnh sửa (bởi bạn) tại **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Cài đặt Add New Domain Instructions trong Domain Mapping](/img/config/settings-domain-mapping.png)

Sau khi nhấp **Next Step**, khách hàng có thể thêm tên miền tùy chỉnh và chọn xem tên miền này có phải là tên miền chính hay không. Lưu ý rằng khách hàng có thể sử dụng nhiều tên miền tùy chỉnh cho website của họ, vì vậy họ có thể chọn tên miền nào sẽ là tên miền chính.

![Nhập tên miền tùy chỉnh với tùy chọn tên miền chính](/img/admin/domains-list.png)

Sau khi nhấp vào **Add Domain**, tên miền sẽ được thêm vào tài khoản của khách hàng. Tất cả những gì họ cần làm bây giờ là thay đổi bản ghi DNS của tên miền tùy chỉnh này tại nhà đăng ký tên miền của họ.

### Thay Đổi Mật Khẩu:

Trong dashboard tài khoản, khách hàng cũng có thể thay đổi mật khẩu bằng cách nhấp vào **Change Password**.

![Nút Change Password trên trang tài khoản](/img/admin/dashboard.png)

Một cửa sổ mới sẽ xuất hiện, nơi khách hàng cần điền mật khẩu hiện tại và sau đó điền mật khẩu mới họ muốn sử dụng.

![Biểu mẫu thay đổi mật khẩu với trường mật khẩu hiện tại và mới](/img/admin/dashboard.png)

### Vùng Nguy Hiểm:

Chúng tôi cũng có hai tùy chọn được hiển thị trong phần **Danger Zone**: **Delete Site** và **Delete Account**. Cả hai đều nằm trong phần Danger Zone vì hai hành động này không thể hoàn tác. Nếu khách hàng xóa website hoặc tài khoản của họ, họ không thể khôi phục lại.

![Danger Zone với tùy chọn Delete Site và Delete Account](/img/admin/dashboard.png)

Nếu khách hàng nhấp vào bất kỳ tùy chọn nào trong hai tùy chọn này, họ sẽ thấy một cửa sổ yêu cầu bật tùy chọn xác nhận xóa website hoặc tài khoản và họ sẽ được cảnh báo rằng hành động này không thể hoàn tác.

![Hộp thoại xác nhận Delete Site](/img/admin/dashboard.png)

![Hộp thoại xác nhận Delete Account](/img/admin/dashboard.png)

Nếu họ xóa website, tài khoản và gói thành viên của họ vẫn không bị ảnh hưởng. Họ chỉ mất tất cả nội dung trên website. Nếu họ xóa tài khoản, tất cả website, gói thành viên và thông tin liên quan đến tài khoản này sẽ bị mất.
