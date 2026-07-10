---
title: Trang Account của khách hàng
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Trang Account của khách hàng của bạn (v2) {#your-clients-account-page-v2}

_**LƯU Ý QUAN TRỌNG: Bài viết này đề cập đến Ultimate Multisite phiên bản 2.x.**_

Khi khách hàng đăng ký một gói trên mạng của bạn, họ sẽ có quyền truy cập vào một trang web và Dashboard của trang đó với thông tin quan trọng liên quan đến các khoản thanh toán, gói thành viên, tên miền, giới hạn gói, v.v...

Trong hướng dẫn này, chúng tôi sẽ hướng dẫn bạn về trang Account của khách hàng và bạn sẽ thấy khách hàng của mình có thể xem và làm gì bên trong trang đó.

## Trang Account {#the-account-page}

Có thể truy cập trang Account bằng cách nhấp vào **Account** bên trong Dashboard của khách hàng của bạn.

![Menu Account trong Dashboard của khách hàng](/img/account-page/account-menu.png)

Trên các mạng tenant có chủ quyền, Ultimate Multisite v2.13.0 giữ trải nghiệm quản lý khách hàng này trên trang chính. Nếu một khách hàng mở các hành động tài khoản, thanh toán, tính phí, hóa đơn, quản lý trang, chuyển mẫu hoặc ánh xạ tên miền từ một tenant có chủ quyền, hành động đó sẽ trỏ trở lại bảng điều khiển khách hàng của trang chính để hồ sơ tính phí và gói thành viên của mạng vẫn là nguồn chính xác.

Khi khách hàng đến từ một tenant có chủ quyền, bảng điều khiển khách hàng của trang chính có thể bao gồm một liên kết quay lại trang tenant. Liên kết quay lại chỉ được hiển thị khi Ultimate Multisite có thể xác thực mục tiêu quay lại là một trong các trang của khách hàng, điều này ngăn chuyển hướng tùy ý trong khi vẫn giữ nguyên quy trình làm việc của tenant.

![Tổng quan trang Account của khách hàng](/img/account-page/overview.png)

Sau khi khách hàng nhấp vào đó, họ sẽ thấy tổng quan về gói thành viên, địa chỉ thanh toán, hóa đơn, tên miền, giới hạn trang của họ và cũng có thể thay đổi ****mẫu trang** (nếu điều đó được phép trong mạng của bạn)**.

Họ cũng có thể đổi gói thành viên sang một gói khác, hoặc mua một gói dịch vụ hay dịch vụ khác mà bạn cung cấp. Hãy cùng xem riêng từng phần.

### Tổng quan gói thành viên của bạn: {#your-membership-overview}

Khối đầu tiên ngay bên dưới tên trang web của khách hàng hiển thị tổng quan về gói hiện tại của họ và các dịch vụ/gói đã được mua kèm với gói đó. Khối này cũng hiển thị số gói thành viên, số tiền ban đầu đã trả cho gói đó, chi phí của gói và mọi dịch vụ/gói, cũng như số lần họ đã được tính phí cho gói thành viên này. Họ cũng có thể xem gói thành viên đang **Hoạt động** , **Hết hạn** hoặc **Đã hủy**.

![Tổng quan gói thành viên hiển thị gói, số tiền và chi tiết tính phí](/img/account-page/membership-card.png)

Ngay bên dưới khối này, khách hàng của bạn có thể thấy các khối **Giới thiệu về trang này** và **Giới hạn trang**. Các khối này hiển thị cho họ tất cả các giới hạn đi kèm với gói của họ: dung lượng đĩa, bài viết, trang, lượt truy cập, v.v... Những giới hạn này có thể được cấu hình trên từng trang gói tại **Ultimate Multisite > Sản phẩm**.

![Các khối Giới thiệu về trang này và Giới hạn trang hiển thị giới hạn gói](/img/account-page/site-limits.png)

Ở bên phải của **Gói thành viên của bạn** , khách hàng có thể nhấp vào **Thay đổi**. Thao tác này sẽ hiển thị cho họ tất cả các gói và gói dịch vụ/dịch vụ có sẵn. Nếu họ chọn một gói khác, các giới hạn của gói đó sẽ được áp dụng thay cho các giới hạn hiện tại của gói thành viên - bất kể họ đang hạ cấp hay nâng cấp gói.

Bây giờ, nếu khách hàng của bạn chọn mua các gói dịch vụ hoặc dịch vụ cho gói thành viên hiện tại này - như thêm dung lượng đĩa hoặc lượt truy cập - gói thành viên hiện tại sẽ không bị thay đổi mà chỉ có các gói mới được thêm vào đó.

Lưu ý rằng không thể thêm mã phiếu giảm giá trên trang thay đổi gói thành viên này. Nếu khách hàng đã sử dụng mã phiếu giảm giá khi mua gói thành viên đầu tiên, mã đó cũng sẽ áp dụng cho gói thành viên mới này.

### Cập nhật địa chỉ thanh toán: {#updating-the-billing-address}

Trên trang Account, khách hàng của bạn cũng có thể cập nhật địa chỉ thanh toán của họ. Họ chỉ cần nhấp vào **Cập nhật** bên cạnh _Địa chỉ thanh toán_.

![Phần Địa chỉ thanh toán với nút Cập nhật](/img/account-page/billing-address.png)

Một cửa sổ mới sẽ xuất hiện cho khách hàng của bạn. Tất cả những gì họ cần làm là điền địa chỉ mới và nhấp vào _Lưu thay đổi_.

![Biểu mẫu cập nhật địa chỉ thanh toán](/img/account-page/billing-address-form.png)

### Thay đổi mẫu trang: {#changing-the-site-template}

Để cho phép khách hàng của bạn thay đổi mẫu trang của họ, bạn cần đi tới **Ultimate Multisite > Cài đặt > Trang** và bật tùy chọn **Cho phép chuyển mẫu**.

Ngoài ra, tại **Ultimate Multisite > Sản phẩm**, chọn các gói của bạn và đi tới tab **Mẫu trang**. Đảm bảo tùy chọn **Cho phép mẫu trang** được bật và trong **Chế độ chọn mẫu trang** , tùy chọn **Chọn mẫu trang có sẵn** được chọn.

![Tab mẫu trang của sản phẩm với chế độ chọn mẫu](/img/config/product-site-templates.png)

Bạn sẽ có thể thấy tất cả các mẫu trang có sẵn trên trang web của mình. Chọn những mẫu bạn muốn cung cấp và những mẫu bạn không muốn cung cấp cho khách hàng đã đăng ký theo gói này. Lưu ý rằng các tùy chọn này cũng ảnh hưởng đến biểu mẫu thanh toán, vì vậy bất kỳ mẫu nào được chọn là **Không khả dụng** sẽ không xuất hiện trên trang đăng ký cho gói này.

Bây giờ khách hàng của bạn có thể nhấp vào **Thay đổi mẫu trang** bên trong trang Account của họ.

![Nút Thay đổi mẫu trang trên trang Account](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 hiển thị một bảng chuyển mẫu được thiết kế lại. Bảng này bắt đầu bằng một **thẻ mẫu hiện tại** để khách hàng có thể thấy mẫu nào đang hoạt động trước khi họ chọn mẫu thay thế.

Một lưới cố định gồm các mẫu trang có sẵn vẫn hiển thị trong khi khách hàng xem xét các tùy chọn của họ. Điều này giúp họ so sánh các mẫu được phép cho gói của mình mà không mất dấu lựa chọn hiện tại.

![Danh sách mẫu trang có sẵn cho gói](/img/config/site-templates-list.png)

Sau khi chọn mẫu họ muốn chuyển sang, họ sẽ được yêu cầu xác nhận thay đổi.

![Hộp thoại xác nhận chuyển mẫu trang](/img/account-page/template-switch-confirm.png)

Sau khi bật xác nhận và nhấp vào **Xử lý chuyển đổi** , mẫu trang mới sẽ được sử dụng trên trang web của khách hàng của bạn.

Khách hàng cũng có thể dùng **Reset current template** từ panel này khi họ cần đặt lại trang về template hiện đang được gán. Giống như chuyển sang template khác, việc đặt lại template có thể ghi đè nội dung trang, vì vậy khách hàng chỉ nên xác nhận khi họ hiểu hành động đặt lại.

### Thêm tên miền tùy chỉnh: {#adding-custom-domains}

Khách hàng của bạn cũng sẽ có tùy chọn thêm tên miền tùy chỉnh cho gói này trên trang account của họ. Để cho phép khách hàng sử dụng tên miền tùy chỉnh, hãy đi tới **Ultimate Multisite > Settings >** **Domain Mapping**.

Bật tùy chọn **Enable Domain Mapping**. Điều này sẽ cho phép khách hàng của bạn sử dụng tên miền tùy chỉnh ở cấp độ mạng.

Đừng quên cũng kiểm tra xem domain mapping có được bật theo từng sản phẩm hay không - vì bạn có thể giới hạn một sản phẩm để không cho phép khách hàng sử dụng tên miền tùy chỉnh.

Đi tới **Ultimate Multisite > Products**. Chọn gói bạn muốn và đi tới tab **Custom Domains**. Bật tùy chọn **Allow Custom Domains**.

![Tab Custom Domains với nút bật/tắt Allow Custom Domains](/img/config/product-custom-domains.png)

Điều này sẽ cho phép tất cả khách hàng đã đăng ký gói cụ thể này sử dụng tên miền tùy chỉnh. Bây giờ, trên trang Account, khách hàng của bạn có thể thêm tên miền tùy chỉnh bằng cách nhấp vào **Add Domain**.

![Nút Add Domain trên trang account](/img/account-page/add-domain-button.png)

Cửa sổ đầu tiên mở ra sẽ hiển thị cho khách hàng của bạn một thông báo hướng dẫn họ cách cập nhật bản ghi DNS để làm cho tên miền tùy chỉnh này hoạt động trên mạng của bạn.

![Hướng dẫn DNS hiển thị khi thêm tên miền tùy chỉnh](/img/account-page/add-domain-dns.png)

Thông báo này có thể được chỉnh sửa (bởi bạn) tại **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Thiết lập Add New Domain Instructions trong Domain Mapping](/img/config/settings-domain-mapping.png)

Dưới đây là chế độ xem đầy đủ của trang cài đặt domain mapping:

![Toàn bộ trang cài đặt domain mapping](/img/config/settings-domain-mapping-full.png)

Sau khi nhấp vào **Next Step** , khách hàng của bạn có thể thêm tên miền tùy chỉnh của họ và chọn liệu tên miền tùy chỉnh này có là tên miền chính hay không. Lưu ý rằng khách hàng của bạn có thể sử dụng nhiều hơn một tên miền tùy chỉnh cho website của họ, vì vậy họ có thể chọn tên miền nào sẽ là tên miền chính.

![Nhập tên miền tùy chỉnh với tùy chọn tên miền chính](/img/account-page/add-domain-primary.png)

Sau khi nhấp vào **Add Domain** , tên miền sẽ được thêm vào account của khách hàng. Tất cả những gì họ cần làm bây giờ là thay đổi các bản ghi DNS của tên miền tùy chỉnh này tại nhà đăng ký tên miền của họ.

### Thay đổi mật khẩu: {#changing-password}

Bên trong dashboard account, khách hàng của bạn cũng có thể thay đổi mật khẩu bằng cách nhấp vào **Change Password**.

![Nút Change Password trên trang account](/img/account-page/change-password-button.png)

Thao tác này sẽ hiển thị một cửa sổ mới nơi khách hàng của bạn cần điền mật khẩu hiện tại của họ và sau đó điền mật khẩu mới mà họ muốn sử dụng.

![Biểu mẫu đổi mật khẩu với các trường mật khẩu hiện tại và mật khẩu mới](/img/account-page/change-password-form.png)

### Vùng nguy hiểm: {#danger-zone}

Chúng tôi cũng có hai tùy chọn được hiển thị trong phần **Danger Zone**: **Delete Site** và **Delete Account**. Cả hai đều nằm trong phần Danger Zone vì hai hành động này không thể đảo ngược. Nếu khách hàng của bạn xóa website hoặc account của họ, họ không thể khôi phục lại chúng.

![Danger Zone với các tùy chọn Delete Site và Delete Account](/img/account-page/danger-zone.png)

Nếu khách hàng của bạn nhấp vào bất kỳ tùy chọn nào trong hai tùy chọn này, họ sẽ thấy một cửa sổ nơi họ cần bật tùy chọn để xóa website hoặc account và họ sẽ được cảnh báo rằng hành động này không thể hoàn tác.

![Hộp thoại xác nhận Delete Site](/img/account-page/delete-site-confirm.png)

![Hộp thoại xác nhận Delete Account](/img/account-page/delete-account-confirm.png)

Nếu họ xóa website của mình, account và membership của họ vẫn sẽ không bị ảnh hưởng. Họ sẽ chỉ mất toàn bộ nội dung trên website của mình. Nếu họ xóa account của mình, tất cả website, membership và thông tin liên quan đến account này sẽ bị mất.
