---
title: Cách Cấu Hình Ánh Xạ Tên Miền
sidebar_position: 6
_i18n_hash: 1bb022a0d812fd87791d9ea476f7be84
---
# Cách cấu hình Domain Mapping (v2)

_**LƯU Ý QUAN TRỌNG: Bài viết này áp dụng cho Ultimate Multisite phiên bản 2.x.**_

Một trong những tính năng mạnh mẽ nhất của mạng premium là khả năng cho phép khách hàng gắn tên miền cấp cao nhất vào site của họ. Hãy thử so sánh xem: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) hay [_**joesbikeshop.com**_](http://joesbikeshop.com) - cái nào trông chuyên nghiệp hơn? Đó là lý do Ultimate Multisite tích hợp sẵn tính năng này, không cần cài thêm plugin của bên thứ ba.

## Domain mapping là gì?

Đúng như tên gọi, domain mapping là tính năng của Ultimate Multisite cho phép nhận yêu cầu từ một tên miền tùy chỉnh và ánh xạ yêu cầu đó đến site tương ứng trong mạng có gắn tên miền đó.

### Cách thiết lập domain mapping trên mạng Ultimate Multisite của bạn

Domain mapping cần một số bước thiết lập từ phía bạn để hoạt động. May mắn là Ultimate Multisite đã tự động hóa phần khó khăn nhất, giúp bạn dễ dàng đáp ứng các yêu cầu.

Trong quá trình cài đặt Ultimate Multisite, trình hướng dẫn sẽ tự động sao chép và cài đặt file **sunrise.php** vào thư mục được chỉ định. **Trình hướng dẫn sẽ không cho phép bạn tiếp tục cho đến khi bước này hoàn tất**.

![Trình hướng dẫn cài đặt Ultimate Multisite với bước sunrise.php](/img/config/settings-domain-mapping.png)

Điều này có nghĩa là ngay sau khi trình hướng dẫn cài đặt Ultimate Multisite hoàn tất việc thiết lập mạng của bạn, bạn có thể bắt đầu ánh xạ tên miền tùy chỉnh ngay lập tức.

Lưu ý rằng domain mapping trong Ultimate Multisite không bắt buộc. Bạn có thể sử dụng chức năng domain mapping gốc của WordPress Multisite hoặc bất kỳ giải pháp domain mapping nào khác.

Nếu bạn cần tắt domain mapping của Ultimate Multisite để sử dụng giải pháp domain mapping khác, bạn có thể tắt tính năng này tại **Ultimate Multisite > Settings > Domain Mapping**.

![Cài đặt Domain Mapping với nút bật/tắt](/img/config/settings-domain-mapping.png)

Ngay bên dưới tùy chọn này, bạn cũng sẽ thấy tùy chọn **Force Admin Redirect**. Tùy chọn này cho phép bạn kiểm soát việc khách hàng có thể truy cập dashboard quản trị của họ trên cả tên miền tùy chỉnh và subdomain hay chỉ trên một trong hai.

Nếu bạn chọn **Force redirect to mapped domain**, khách hàng của bạn chỉ có thể truy cập dashboard quản trị trên tên miền tùy chỉnh của họ.

Tùy chọn **Force redirect to network domain** sẽ làm điều ngược lại - khách hàng của bạn chỉ được phép truy cập dashboard trên subdomain của họ, ngay cả khi họ cố đăng nhập trên tên miền tùy chỉnh.

Còn tùy chọn **Allow access to the admin by both mapped domain domain and network domain** cho phép họ truy cập dashboard quản trị trên cả subdomain và tên miền tùy chỉnh.

![Các tùy chọn Force Admin Redirect cho domain mapping](/img/config/settings-domain-mapping.png)

Có hai cách để ánh xạ tên miền tùy chỉnh. Cách thứ nhất là ánh xạ tên miền từ dashboard quản trị mạng với tư cách super admin và cách thứ hai là thông qua dashboard quản trị subsite trong trang tài khoản.

Nhưng trước khi bắt đầu ánh xạ tên miền tùy chỉnh đến một trong các subsite trong mạng của bạn, bạn cần đảm bảo rằng **cài đặt DNS** của tên miền đã được cấu hình đúng.

### 

### Đảm bảo cài đặt DNS của tên miền được cấu hình đúng

Để ánh xạ hoạt động, bạn cần đảm bảo tên miền bạn định ánh xạ đang trỏ đến địa chỉ IP của Mạng. Lưu ý rằng bạn cần địa chỉ IP của Mạng - địa chỉ IP của tên miền nơi Ultimate Multisite được cài đặt - không phải địa chỉ IP của tên miền tùy chỉnh bạn muốn ánh xạ. Để tra cứu địa chỉ IP của một tên miền cụ thể, chúng tôi gợi ý truy cập [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) chẳng hạn.

Để ánh xạ tên miền chính xác, bạn cần thêm một **A RECORD** trong cấu hình **DNS** trỏ đến **địa chỉ IP** đó. Việc quản lý DNS khác nhau rất nhiều giữa các nhà đăng ký tên miền, nhưng có rất nhiều hướng dẫn trực tuyến nếu bạn tìm kiếm "_Creating A Record on XXXX_" trong đó XXXX là nhà đăng ký tên miền của bạn (ví dụ: "_Creating A Record on GoDaddy_").

Nếu bạn gặp khó khăn trong việc thiết lập, **hãy liên hệ bộ phận hỗ trợ của nhà đăng ký tên miền** và họ sẽ có thể giúp bạn phần này.

Nếu bạn định cho phép khách hàng tự ánh xạ tên miền của họ, họ sẽ phải tự thực hiện phần công việc này. Hãy hướng dẫn họ đến hệ thống hỗ trợ của nhà đăng ký nếu họ không thể tự tạo A Record.

### Ánh xạ tên miền tùy chỉnh với tư cách Super Admin

Khi bạn đăng nhập với tư cách super admin trên mạng của mình, bạn có thể dễ dàng thêm và quản lý tên miền tùy chỉnh bằng cách vào **Ultimate Multisite > Domains**.

![Trang danh sách Domains trong Ultimate Multisite](/img/admin/domains-list.png)

Tại trang này, bạn có thể nhấp vào nút **Add Domain** ở trên cùng và một cửa sổ modal sẽ xuất hiện, nơi bạn có thể thiết lập và điền **tên miền tùy chỉnh**, **subsite** mà bạn muốn áp dụng tên miền tùy chỉnh, và quyết định xem bạn có muốn đặt nó làm **tên miền chính** hay không (lưu ý rằng bạn có thể ánh xạ **nhiều tên miền đến một subsite**).

![Modal Add Domain với các trường tên miền và site](/img/admin/domains-list.png)

Sau khi điền đầy đủ thông tin, bạn có thể nhấp nút **Add Existing Domain** ở dưới cùng.

Thao tác này sẽ bắt đầu quá trình xác minh và lấy thông tin DNS của tên miền tùy chỉnh. Bạn cũng sẽ thấy nhật ký ở cuối trang để theo dõi quá trình đang diễn ra. Quá trình này có thể mất vài phút để hoàn tất.

**Stage** hay trạng thái sẽ chuyển từ **Checking DNS** sang **Ready** nếu mọi thứ được thiết lập đúng.

![Trạng thái domain chuyển từ Checking DNS sang Ready](/img/admin/domains-list.png)

![Domain với trạng thái Ready trong danh sách domains](/img/admin/domains-list.png)

Nếu bạn nhấp vào tên miền, bạn sẽ thấy một số tùy chọn bên trong. Hãy cùng xem qua nhanh:

![Trang chi tiết domain với các tùy chọn stage, site, active và SSL](/img/admin/domains-list.png)

**Stage:** Đây là giai đoạn mà tên miền đang ở. Khi bạn mới thêm tên miền, nó có thể sẽ ở giai đoạn **Checking DNS**. Quá trình sẽ kiểm tra các bản ghi DNS và xác nhận chúng chính xác. Sau đó, tên miền sẽ chuyển sang giai đoạn **Checking SSL**. Ultimate Multisite sẽ kiểm tra xem tên miền có SSL hay không và sẽ phân loại tên miền của bạn là **Ready** hoặc **Ready (without SSL)**.

**Site:** Subdomain được liên kết với tên miền này. Tên miền được ánh xạ sẽ hiển thị nội dung của site cụ thể này.

**Active:** Bạn có thể bật hoặc tắt tùy chọn này để kích hoạt hoặc vô hiệu hóa tên miền.

**Is Primary Domain?:** Khách hàng của bạn có thể có nhiều hơn một tên miền được ánh xạ cho mỗi site. Sử dụng tùy chọn này để chọn xem đây có phải là tên miền chính cho site cụ thể đó hay không.

**Is Secure?:** Mặc dù Ultimate Multisite kiểm tra xem tên miền có chứng chỉ SSL hay không trước khi kích hoạt, bạn có thể tự chọn để tải tên miền có hoặc không có chứng chỉ SSL. Lưu ý rằng nếu website không có chứng chỉ SSL và bạn cố buộc tải với SSL, có thể sẽ xảy ra lỗi.

### Ánh xạ tên miền tùy chỉnh với tư cách người dùng Subsite

Quản trị viên subsite cũng có thể ánh xạ tên miền tùy chỉnh từ dashboard quản trị subsite của họ.

Đầu tiên, bạn cần đảm bảo rằng bạn đã bật tùy chọn này trong cài đặt **Domain mapping**. Xem ảnh chụp màn hình bên dưới.

![Cài đặt Domain mapping cho phép người dùng subsite ánh xạ tên miền](/img/config/settings-domain-mapping.png)

Bạn cũng có thể thiết lập hoặc cấu hình tùy chọn này ở cấp **Plan** hoặc tùy chọn sản phẩm tại **Ultimate Multisite > Products**.

![Tùy chọn custom domains trong cài đặt sản phẩm](/img/config/settings-domain-mapping.png)

Khi bất kỳ tùy chọn nào trong số đó được bật và người dùng subsite được phép ánh xạ tên miền tùy chỉnh, người dùng subsite sẽ thấy một metabox trong trang **Account** có tên **Domains**.

![Metabox Domains trên trang account của subsite](/img/admin/domains-list.png)

Người dùng có thể nhấp nút **Add Domain** và một cửa sổ modal sẽ xuất hiện với một số hướng dẫn.

![Modal Add Domain với hướng dẫn DNS cho người dùng subsite](/img/admin/domains-list.png)

Sau đó người dùng có thể nhấp **Next Step** và tiến hành thêm tên miền tùy chỉnh. Họ cũng có thể chọn xem đây có phải là tên miền chính hay không.

![Trường thêm tên miền tùy chỉnh với tùy chọn primary domain](/img/admin/domains-list.png)

![Nhấp Add Domain để bắt đầu xác minh DNS](/img/admin/domains-list.png)Nhấp vào **Add Domain** sẽ bắt đầu quá trình xác minh và lấy thông tin DNS của tên miền tùy chỉnh.

### Về Domain Syncing

Domain Syncing là quá trình Ultimate Multisite thêm tên miền tùy chỉnh vào tài khoản hosting của bạn như một add-on domain **để domain mapping hoạt động**.

Domain syncing tự động xảy ra nếu nhà cung cấp hosting của bạn có tích hợp với tính năng domain mapping của Ultimate Multisite. Hiện tại, các nhà cung cấp hosting này là _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ và _Cpanel._

Bạn sẽ cần kích hoạt tích hợp này trong cài đặt Ultimate Multisite dưới tab **Integration**.

![Tab Integration trong cài đặt Ultimate Multisite](/img/config/settings-domain-mapping.png)

![Cài đặt tích hợp nhà cung cấp hosting cho domain syncing](/img/config/settings-domain-mapping.png)

_Lưu ý rằng nếu nhà cung cấp hosting của bạn không phải là một trong những nhà cung cấp được đề cập ở trên, **bạn sẽ cần phải đồng bộ hoặc thêm tên miền thủ công** vào tài khoản hosting của mình._
