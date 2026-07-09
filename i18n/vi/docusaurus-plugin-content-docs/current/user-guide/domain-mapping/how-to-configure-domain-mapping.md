---
title: Cách cấu hình ánh xạ tên miền
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Cách cấu hình ánh xạ miền (v2)

_**LƯU Ý QUAN TRỌNG: Bài viết này đề cập đến Ultimate Multisite phiên bản 2.x.**_

Một trong những tính năng mạnh mẽ nhất của một mạng cao cấp là khả năng cung cấp cho khách hàng của chúng ta cơ hội gắn một miền cấp cao nhất vào các trang của họ. Rốt cuộc, cái nào trông chuyên nghiệp hơn: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) hay [_**joesbikeshop.com**_](http://joesbikeshop.com)? Đó là lý do Ultimate Multisite cung cấp sẵn tính năng này, không cần dùng plugin bên thứ ba.

## Ánh xạ miền là gì?

Đúng như tên gọi, ánh xạ miền là khả năng do Ultimate Multisite cung cấp để tiếp nhận một yêu cầu cho miền tùy chỉnh và ánh xạ yêu cầu đó tới trang tương ứng trong mạng có miền cụ thể đó được gắn vào.

### Cách thiết lập ánh xạ miền trên mạng Ultimate Multisite của bạn

Ánh xạ miền cần bạn thực hiện một số thiết lập để hoạt động. Rất may, Ultimate Multisite tự động hóa phần việc khó cho bạn để bạn có thể dễ dàng đáp ứng các yêu cầu.

Trong quá trình cài đặt Ultimate Multisite, trình hướng dẫn sẽ tự động sao chép và cài đặt **sunrise.php** vào thư mục được chỉ định. **Trình hướng dẫn sẽ không cho phép bạn tiếp tục cho đến khi bước này hoàn tất**.

<!-- Không có ảnh chụp màn hình: Trình hướng dẫn cài đặt Ultimate Multisite với bước sunrise.php -->

Điều này có nghĩa là sau khi trình hướng dẫn cài đặt Ultimate Multisite hoàn tất việc thiết lập mạng của bạn, bạn có thể bắt đầu ánh xạ miền tùy chỉnh ngay lập tức.

Lưu ý rằng ánh xạ miền trong Ultimate Multisite không bắt buộc. Bạn có tùy chọn sử dụng chức năng ánh xạ miền gốc của WordPress Multisite hoặc bất kỳ giải pháp ánh xạ miền nào khác.

Nếu bạn cần tắt ánh xạ miền của Ultimate Multisite để nhường chỗ cho các giải pháp ánh xạ miền khác, bạn có thể tắt tính năng này trong **Ultimate Multisite > Cài đặt > Ánh xạ miền**.

![Trang cài đặt Ánh xạ miền hiển thị chuyển hướng quản trị, thông báo ánh xạ và tùy chọn DNS](/img/config/domain-mapping-settings.png)

Ngay bên dưới tùy chọn này, bạn cũng có thể thấy tùy chọn **Buộc chuyển hướng quản trị**. Tùy chọn này cho phép bạn kiểm soát việc khách hàng của bạn có thể truy cập Dashboard quản trị của họ trên cả miền tùy chỉnh và tên miền phụ, hay chỉ trên một trong hai.

Nếu bạn chọn **Buộc chuyển hướng tới miền đã ánh xạ** , khách hàng của bạn sẽ chỉ có thể truy cập Dashboard quản trị của họ trên các miền tùy chỉnh.

Tùy chọn **Buộc chuyển hướng tới** **miền mạng** sẽ làm điều ngược lại hoàn toàn - khách hàng của bạn sẽ chỉ được phép truy cập Dashboard của họ trên tên miền phụ, ngay cả khi cố gắng đăng nhập trên miền tùy chỉnh của họ.

Và tùy chọn **Cho phép truy cập trang quản trị bằng cả miền đã ánh xạ và miền mạng** cho phép họ truy cập Dashboard quản trị của mình trên cả tên miền phụ và miền tùy chỉnh.

![Danh sách thả xuống Chuyển hướng quản trị được mở rộng hiển thị ba tùy chọn chuyển hướng](/img/config/domain-mapping-redirect-options.png)

Có hai cách để ánh xạ một miền tùy chỉnh. Cách thứ nhất là ánh xạ tên miền từ Dashboard quản trị mạng của bạn với tư cách quản trị viên cấp cao và cách thứ hai là thông qua Dashboard quản trị của trang con trong trang Account.

Nhưng trước khi bạn bắt đầu ánh xạ miền tùy chỉnh tới một trong các trang con trong mạng của mình, bạn sẽ cần đảm bảo rằng **cài đặt DNS** của tên miền đã được cấu hình đúng.

###

### Đảm bảo cài đặt DNS của miền được cấu hình đúng

Để việc ánh xạ hoạt động, bạn cần đảm bảo miền bạn dự định ánh xạ đang trỏ tới địa chỉ IP của mạng của bạn. Lưu ý rằng bạn cần địa chỉ IP của mạng - địa chỉ IP của miền nơi Ultimate Multisite được cài đặt - không phải địa chỉ IP của miền tùy chỉnh mà bạn muốn ánh xạ. Để tìm địa chỉ IP của một miền cụ thể, chúng tôi đề xuất truy cập [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), chẳng hạn.

Để ánh xạ miền đúng cách, bạn cần thêm một **A RECORD** trong cấu hình **DNS** của mình trỏ tới **địa chỉ IP** đó. Việc quản lý DNS khác nhau rất nhiều giữa các nhà đăng ký miền khác nhau, nhưng có rất nhiều hướng dẫn trực tuyến về việc đó nếu bạn tìm kiếm " _Tạo A Record trên XXXX_ " trong đó XXXX là nhà đăng ký miền của bạn (ví dụ: " _Tạo A Record trên_ _GoDaddy_ ").

Nếu bạn gặp khó khăn khi làm cho việc này hoạt động, **hãy liên hệ bộ phận hỗ trợ của nhà đăng ký miền của bạn** và họ sẽ có thể giúp bạn với phần này.

Nếu bạn dự định cho phép khách hàng tự ánh xạ miền của họ, họ sẽ phải tự thực hiện phần việc này. Hãy hướng họ tới hệ thống hỗ trợ của nhà đăng ký nếu họ không thể tạo A Record.

### Ánh xạ tên miền tùy chỉnh với tư cách Quản trị viên cấp cao

Khi bạn đã đăng nhập với tư cách quản trị viên cấp cao trên mạng của mình, bạn có thể dễ dàng thêm và quản lý tên miền tùy chỉnh bằng cách vào **Ultimate Multisite > Miền**.

![Trang danh sách Miền trong Ultimate Multisite](/img/admin/domains-list.png)

Trong trang này, bạn có thể nhấp vào nút **Thêm miền** ở phía trên và thao tác này sẽ mở một cửa sổ modal nơi bạn có thể đặt và điền **tên miền tùy chỉnh** , **trang con** mà bạn muốn áp dụng tên miền tùy chỉnh, và quyết định liệu bạn có muốn đặt nó làm tên **miền chính** hay không (lưu ý rằng bạn có thể ánh xạ **nhiều tên miền tới một trang con**).

![Modal Thêm miền với tên miền, bộ chọn trang và công tắc miền chính](/img/admin/domain-add-modal.png)

Sau khi nhập tất cả thông tin, bạn có thể nhấp vào nút **Thêm miền hiện có** ở phía dưới.

Thao tác này sẽ bắt đầu quá trình xác minh và lấy thông tin DNS của miền tùy chỉnh. Bạn cũng sẽ thấy nhật ký ở cuối trang để theo dõi quá trình đang diễn ra. Quá trình này có thể mất vài phút để hoàn tất.

Ultimate Multisite v2.13.0 cũng tự động tạo bản ghi tên miền nội bộ khi một trang mới được tạo trên một máy chủ cần được xem là tên miền theo từng trang. Nếu máy chủ là tên miền chính của mạng, hoặc là một trong các tên miền cơ sở của biểu mẫu thanh toán dùng chung được cấu hình trên trường **Site URL**, bản ghi tên miền được ánh xạ tự động sẽ được bỏ qua để tên miền cơ sở dùng chung đó vẫn khả dụng cho mọi trang sử dụng nó.

Khi khách hàng đăng ký một tên miền mới thông qua Domain Seller v1.3.0 hoặc mới hơn, Ultimate Multisite mặc định tự động ánh xạ tên miền đã đăng ký tới trang mạng của khách hàng. Quản trị viên không còn cần thêm một bản ghi tên miền được ánh xạ riêng sau khi đăng ký thành công, trừ khi họ muốn điều chỉnh các tùy chọn như cờ tên miền chính, trạng thái kích hoạt hoặc xử lý SSL.

**Stage** hoặc trạng thái nên chuyển từ **Checking DNS** sang **Ready** nếu mọi thứ được thiết lập đúng cách.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Nếu bạn nhấp vào tên miền, bạn sẽ có thể thấy một số tùy chọn bên trong. Hãy xem nhanh các tùy chọn đó:

![Trang chi tiết tên miền với các nút bật/tắt giai đoạn, trang, hoạt động, chính và SSL](/img/admin/domain-edit.png)

**Stage:** Đây là giai đoạn mà tên miền đang ở. Khi bạn lần đầu thêm tên miền, có thể nó sẽ ở giai đoạn **Checking DNS**. Quy trình sẽ kiểm tra các mục nhập DNS và xác nhận chúng là chính xác. Sau đó, tên miền sẽ được đưa sang giai đoạn **Checking SSL**. Ultimate Multisite sẽ kiểm tra xem tên miền có SSL hay không và sẽ phân loại tên miền của bạn là **Ready** hoặc **Ready (without SSL)**.

**Site:** Tên miền phụ được liên kết với tên miền này. Tên miền được ánh xạ sẽ hiển thị nội dung của trang cụ thể này.

**Active:** Bạn có thể bật hoặc tắt tùy chọn này để kích hoạt hoặc vô hiệu hóa tên miền.

**Is Primary Domain?:** Khách hàng của bạn có thể có nhiều hơn một tên miền được ánh xạ cho mỗi trang. Sử dụng tùy chọn này để chọn xem đây có phải là tên miền chính cho trang cụ thể hay không.

**Is Secure?:** Mặc dù Ultimate Multisite kiểm tra xem tên miền có chứng chỉ SSL hay không trước khi bật, bạn có thể chọn thủ công để tải tên miền với hoặc không với chứng chỉ SSL. Lưu ý rằng nếu website không có chứng chỉ SSL và bạn cố buộc tải nó với SSL, nó có thể gây ra lỗi.

### Ánh xạ tên miền tùy chỉnh với tư cách người dùng trang con

Quản trị viên trang con cũng có thể ánh xạ tên miền tùy chỉnh từ Dashboard quản trị trang con của họ.

Trước tiên, bạn cần đảm bảo rằng bạn bật tùy chọn này trong cài đặt **Domain mapping**. Xem ảnh chụp màn hình bên dưới.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Bạn cũng có thể đặt hoặc cấu hình tùy chọn này ở cấp **Plan** hoặc trong tùy chọn sản phẩm tại **Ultimate Multisite > Products**.

![Phần Tên miền tùy chỉnh trên trang chỉnh sửa sản phẩm](/img/config/product-custom-domains.png)

Khi bất kỳ tùy chọn nào trong số đó được bật và người dùng trang con được phép ánh xạ tên miền tùy chỉnh, người dùng trang con sẽ thấy một metabox trong trang **Account** có tên **Domains**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Người dùng có thể nhấp vào nút **Add Domain** và nó sẽ mở một cửa sổ modal với một số hướng dẫn.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Sau đó người dùng có thể nhấp vào **Next Step** và tiếp tục thêm tên miền tùy chỉnh. Họ cũng có thể chọn liệu đây có phải là tên miền chính hay không.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Nhấp vào **Add Domain** sẽ bắt đầu quy trình xác minh và lấy thông tin DNS của tên miền tùy chỉnh.

### Về đồng bộ hóa tên miền

Đồng bộ hóa tên miền là một quy trình trong đó Ultimate Multisite thêm tên miền tùy chỉnh vào tài khoản lưu trữ của bạn dưới dạng tên miền bổ sung **để tính năng ánh xạ tên miền hoạt động**.

Đồng bộ hóa tên miền diễn ra tự động nếu nhà cung cấp lưu trữ của bạn có tích hợp với tính năng ánh xạ tên miền của Ultimate Multisite. Hiện tại, các nhà cung cấp lưu trữ này là _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ và _Cpanel._

Khi tích hợp nhà cung cấp lưu trữ đang hoạt động, Ultimate Multisite cũng có thể đưa tác vụ tạo DNS hoặc tên miền phụ phía nhà cung cấp vào hàng đợi cho các trang mới được tạo. Nếu không có tích hợp nào đang lắng nghe tác vụ đó, công việc nền sẽ bị bỏ qua để tránh các mục hàng đợi không thực hiện gì. Các kiểm tra DNS và SSL cho tên miền được ánh xạ tiếp tục chạy thông qua quy trình giai đoạn tên miền thông thường.

Bạn sẽ cần kích hoạt tích hợp này trong cài đặt Ultimate Multisite dưới tab **Integration**.

![Tab Tích hợp trong cài đặt Ultimate Multisite hiển thị các nhà cung cấp lưu trữ](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Lưu ý rằng nếu nhà cung cấp lưu trữ của bạn không phải là một trong những nhà cung cấp được đề cập ở trên, **bạn sẽ cần đồng bộ hóa thủ công hoặc thêm tên miền** vào tài khoản lưu trữ của bạn._
