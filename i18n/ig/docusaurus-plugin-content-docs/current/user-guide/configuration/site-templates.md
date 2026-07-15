---
title: Ndu Ndu Site Templates
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Site Templates (v2)

_**LƯU Ý: Bài viết này đề cập đến Ultimate Multisite phiên bản 2.x. Nếu bạn đang sử dụng phiên bản 1.x,**_ **hãy xem bài viết này.**_

Mục tiêu của chúng tôi khi tạo một mạng lưới cao cấp với Ultimate Multisite là tự động hóa càng nhiều quy trình càng tốt trong khi vẫn cho khách hàng sự linh hoạt và các lựa chọn khác nhau để họ có thể chọn khi tạo trang web của mình. Một cách dễ dàng để đạt được sự cân bằng này là sử dụng tính năng Site Templates của Ultimate Multisite.

## Site Template là gì? {#what-is-a-site-template}

Như tên gọi của nó gợi ý, một Site Template là một mẫu trang (boilerplate site) mà bạn có thể dùng làm nền tảng khi tạo các trang web mới trong mạng lưới của mình.

Điều này có nghĩa là bạn có thể tạo một trang web cơ sở, kích hoạt các plugin khác nhau, đặt một theme đang hoạt động và tùy chỉnh nó theo bất kỳ cách nào bạn muốn. Sau đó, khi khách hàng của bạn tạo một tài khoản mới, thay vì nhận được một trang WordPress mặc định không có nội dung ý nghĩa bên trong, họ sẽ nhận được bản sao của trang web cơ sở của bạn với tất cả các tùy chỉnh và nội dung đã được thiết lập sẵn.

Nghe thì tuyệt vời, nhưng làm thế nào để tôi tạo một site template mới? Nó đơn giản như có thể vậy.

## Tạo và Chỉnh sửa Site Template mới {#creating-and-editing-a-new-site-template}

Site Templates chỉ là những trang thông thường trong mạng lưới của bạn. Để tạo một template mới, bạn chỉ cần vào **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Nút Thêm trang web trong trang danh sách Sites](/img/config/site-templates-list.png)**

Điều này sẽ mở ra một cửa sổ modal (cửa sổ bật lên) nơi nó sẽ hỏi về **Site title (Tiêu đề trang), Site Domain/path (Tên miền/đường dẫn trang),** và **Site type (Loại trang).** Trong trường thả xuống **Site Type**, hãy đảm bảo bạn chọn **Site Template**.

_![Modal thêm site template với menu thả xuống loại trang](/img/config/site-templates-list.png)_

Bạn cũng có thể thêm một mô tả dành cho khách hàng để giải thích những gì template này bao gồm:

![Site template description field on the site template edit screen](/img/config/site-template-edit-description.png)

Na enyi enyi na form, ka ị chọta **Copy Site** toggle switch. Oge a ga-arị gị ịchụkọta site template ọhụrụ ọ bụ site template ya na ọ dịka ị nwere ya dịka ị chọrọ ịgba ọsọ, ọ bụrụ na ị chọrọ ka ị chọpụta oge ma ọ bụ kọwa site template ọhụrụ ọhụrụ.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Ịgbanwe ihe ndị dị n'ime Site Template {#customizing-the-contents-of-a-site-template}

Ọ bụrụ na ị chọrọ ịgbanwe site template ha, ka ị gidi ya dashboard panel ma kọwa ihe ị chọrọ. Ị ga-anọchịrị ọhụrụ posts, pages, activate plugins ma gbanwe theme dị n'ime. Ọ bụrụ na ị chọrọ, ị chere gidi Customizer ma gbanwe olu ọ bụla nke ị chọrọ.

![Site template edit interface](/img/config/site-template-edit.png)

Ihe onye ahụ ga-arị chọta n'ime mgbe onye ọrịa na-agbanwe site ọhụrụ ọ bụ site Template ahụ.

### Ịdị anyị dị mma (Advanced Options) {#advanced-options}

Ọ bụrụ na ị jara ike ịkọwa code ọhụrụ, ị ga-anọchịrị agbanwe ihe n'ime site ọhụrụ ọ bụ site template ahụ ka ọ dịka ị chere Search and Replace API ha. Oge a dị mma maka ihe ndị dị ka gbanwe onye ahụ n'ime About page, gbanwe email contact n'ime Contact page, ma ọ bụ ihe ndị ọzọ.

### Ịchọta Site Templates {#using-site-templates}

Ọ bụ, ị chere site templates ọtụtụ dị nwere dị iche iche design, themes na settings. Kedu ihe ga-arị gị ịrụ ha dị mma n'ime network gị ara?

Na gị erụta, ọ bụrụ na ị chọrọ, ọ bụrụ na ị chere site templates ọtụtụ dị iche iche na-adịghị ekwesị (not simultaneously):

  * Ịgba Site Template ọzọ n'ime Plans ọ bụla gị.

**MA**

  * Ime onye ahụ ị chọrọ iji chere site templates ha ma ọ bụrụ na ndị biara gị chọrọ ịchere site templates ha ma ọ bụrụ na ha chọrọ ịchere site templates ha ma ọ bụrụ na ha chọrọ ịchere site templates ha ma ọ bụrụ na ha chọrọ ịchere site templates ha ma ọ bụrụ na ha chọrọ ịchere site templates ha ma ọ bụrụ na ha chọrọ ịchere site templates ha ma ọ bụrụ na ha chọrọ ịchere site templates ha ma ọ bụrụ na ha chọrọ ịchere site templates ha ma ọ bụrụ na ha chọrọ ịchere site templates ha

#### Mode 1: Assign Site Template {#mode-1-assign-site-template}

N chế độ này, khách hàng của bạn sẽ không thể chọn mẫu (template) khi họ tạo tài khoản, mà thay vào đó, bạn sẽ xác định mẫu nào nên được sử dụng cho mỗi Gói (Plan) của bạn.

Để làm điều đó, bạn cần vào **Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

Điều này sẽ đưa bạn đến trang **Edit Product**. Dưới mục **Product Options**, hãy tìm tab **Site template** và chọn tùy chọn **Assign Site Template** từ ô thả xuống (drop-down field). Điều này sẽ hiện ra danh sách các mẫu trang có sẵn và cho phép bạn chỉ chọn một mẫu trang dành riêng cho sản phẩm đó.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Chế độ 2: Chọn Mẫu Trang Có Sẵn {#mode-2-choose-available-site-template}

Trong chế độ này, bạn sẽ cho khách hàng của mình quyền lựa chọn trong quá trình đăng ký. Họ sẽ có thể chọn từ các mẫu trang khác nhau mà bạn đã định nghĩa dưới cài đặt sản phẩm. Bạn có tùy chọn giới hạn số mẫu trang họ có thể chọn dưới sản phẩm đã được chọn. Điều này cho phép bạn có các bộ mẫu trang khác nhau dưới mỗi sản phẩm, điều này rất lý tưởng để làm nổi bật các chức năng và tính năng khác nhau cho một sản phẩm có giá cao hơn.

Na trang **Edit Product** (Chỉnh sửa Sản phẩm). Dưới mục **Product Options** (Tùy chọn Sản phẩm), bạn tìm tab **Site template** (Mẫu trang web) và chọn tùy chọn **Choose Available Site Template** (Chọn Mẫu trang web có sẵn) từ ô thả xuống. Việc này sẽ hiện ra danh sách các mẫu trang web có sẵn và cho phép bạn chọn mẫu trang web mà bạn muốn nó được hiển thị. Bạn có thể làm điều này bằng cách chọn hành vi của nó: **Available** (Có sẵn) nếu bạn muốn mẫu trang web đó xuất hiện trong danh sách. **Not Available** (Không có sẵn) nếu bạn không muốn mẫu trang web đó hiển thị như một lựa chọn. Và **Pre-selected** (Đã chọn trước) nếu bạn muốn một trong các mẫu trang web được liệt kê trở thành mặc định được chọn.

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### Chế độ Mặc định: Chọn mẫu trang web trên biểu mẫu Thanh toán (Checkout form) {#default-mode-site-template-selection-on-the-checkout-form}

Nếu bạn muốn tất cả các mẫu trang web của mình đều có sẵn trong quá trình đăng ký, hoặc không thích phải làm thêm công việc gán hoặc chỉ định mẫu trang web dưới mỗi sản phẩm bạn tạo. Khi đó, bạn chỉ cần đặt lựa chọn mẫu trang web dưới **Checkout Form** (Biểu mẫu Thanh toán) của mình. Để làm điều này, hãy vào **Ultimate Multisite > Checkout Forms** và nhấp vào **Edit** (Chỉnh sửa) bên dưới biểu mẫu mà bạn muốn cấu hình.

Điều này sẽ mở ra trang **Edit Checkout Form** (Chỉnh sửa Biểu mẫu Thanh toán). Tìm trường **Template Selection** (Lựa chọn Mẫu) và nhấp vào **Edit** (Chỉnh sửa) bên dưới nó.

Một cửa sổ modal sẽ hiện ra. Dưới trường **Template Sites** (Các Trang web Mẫu), bạn có thể chọn và liệt kê tất cả các mẫu trang web mà bạn muốn có sẵn trong quá trình đăng ký. Các mẫu trang web bạn chỉ định từ đây sẽ luôn có sẵn bất kể người dùng đã chọn sản phẩm nào.

![Template selection field in the checkout form editor](/img/config/checkout-form-template-step.png)

Ở giao diện phía trước (frontend), khách hàng sẽ thấy trình chọn mẫu ngay trong quá trình thanh toán và có thể chọn thiết kế ban đầu cho trang web mới của họ.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### Opciones de Modelos Sites (Site Template Options) {#site-template-options}

M na-adị các chức năng mẫu site khác mà bạn có thể bật hoặc tắt trong cài đặt Ultimate Multisite.

![Opciones de modelos sites en la configuración de Ultimate Multisite](/img/config/settings-sites-templates-section.png)

#### Cho phép Chuyển đổi Mẫu (Allow Template Switching) {#allow-template-switching}

Bật tùy chọn này sẽ cho phép khách hàng của bạn chuyển sang mẫu họ chọn trong quá trình đăng ký sau khi tài khoản và site đã được tạo. Điều này rất hữu ích từ góc độ khách hàng vì nó cho phép họ chọn lại một mẫu nếu sau này họ nhận ra lựa chọn ban đầu không phải là cái tốt nhất cho nhu cầu cụ thể của họ.

#### Cho phép Người dùng sử dụng Site của họ làm mẫu (Allow Users to use their Site as templates) {#allow-users-to-use-their-site-as-templates}

Vì người dùng subsite đã dành thời gian xây dựng và thiết kế trang web của riêng họ, họ có thể muốn sao chép nó và sử dụng nó như một trong các mẫu site có sẵn khi tạo một subsite khác trên mạng lưới của bạn. Tùy chọn này sẽ cho phép họ làm được điều đó.

#### Sao chép Media khi Nhân bản Mẫu (Copy Media on Template Duplication) {#copy-media-on-template-duplication}

Kiểm tra tùy chọn này sẽ sao chép media đã tải lên trang mẫu sang site mới được tạo. Điều này có thể bị ghi đè trên mỗi gói dịch vụ.

#### **Ngăn Công cụ Tìm kiếm lập chỉ mục các Site Templates (Prevent Search Engines from indexing Site Templates)** {#prevent-search-engines-from-indexing-site-templates}

Các site template như đã thảo luận trong bài viết này là những bản mẫu cơ bản nhưng vẫn là một phần mạng lưới của bạn, nghĩa là chúng vẫn có thể được công cụ tìm kiếm tìm thấy. Tùy chọn này sẽ cho phép bạn ẩn các site template để công cụ tìm kiếm có thể lập chỉ mục chúng.

## Điền sẵn Site Templates bằng tự động tìm và thay thế (Pre-populating Site Templates with auto search-and-replace) {#pre-populating-site-templates-with-auto-search-and-replace}

O salah satu tính năng mạnh nhất của Ultimate Multisite là khả năng thêm bất kỳ văn bản, màu sắc và các trường chọn nào vào biểu mẫu đăng ký. Sau khi chúng ta thu thập được dữ liệu đó, chúng ta có thể dùng nó để điền sẵn nội dung ở một số phần của template trang web đã chọn. Khi trang web mới được xuất bản, Ultimate Multisite sẽ thay thế các chỗ giữ chỗ (placeholders) bằng thông tin thực tế mà người dùng đã nhập trong quá trình đăng ký.

Ví dụ, nếu bạn muốn lấy tên công ty của người dùng cuối trong quá trình đăng ký và tự động đặt tên công ty đó lên trang chủ. Trên trang chủ template của bạn, bạn cần thêm các chỗ giữ chỗ, giống như trong hình dưới đây (các chỗ giữ chỗ phải được bao quanh bởi dấu ngoặc nhọn kép - {{placeholder_name}}).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Sau đó, bạn chỉ cần thêm một trường đăng ký tương ứng vào biểu mẫu thanh toán của mình để thu thập dữ liệu đó. Trình chỉnh sửa biểu mẫu thanh toán giống như cái được dùng để chọn template cho phép bạn đặt các trường tùy chỉnh bên cạnh bộ chọn template:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

Khách hàng của bạn sau đó sẽ có thể điền vào trường đó trong quá trình đăng ký.

![Frontend checkout form with template chooser](/img/config/frontend-template-chooser.png)

Ultimate Multisite sẽ tự động thay thế các chỗ giữ chỗ bằng dữ liệu do khách hàng cung cấp.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### Giải quyết vấn đề "template đầy chỗ giữ chỗ" {#solving-the-template-full-of-placeholders-problem}

Tất cả những điều trên đều tuyệt vời, nhưng chúng ta gặp phải một vấn đề khó chịu: bây giờ các template trang web của chúng ta - mà khách hàng có thể truy cập được - lại đầy những chỗ giữ chỗ xấu xí không nói lên nhiều điều.

Na ịgba ọkụ ahụ, anyị na-eme ike ịset ihe ndị nwere ike ịbụ (fake values) choọrọ ndị placeholder, ma anyị ga-asị ihe ndị a maka ịhụ na template sites mgbe ndị khách nwere ike ịlale.

Ka ọ dị m gị akses na editor placeholder template, ị chọrọ ịgidi ya n' **Ultimate Multisite > Settings > Sites**, tarakwa, ọ bụ na sidebar, ị chọrọ link **Edit Placeholders**.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

Ọ ga-asị gị n' editor nội dung placeholder ahụ, onye ị ga-asị ihe ndị a (placeholders) na ihe ndị a maka isiokwu ha.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
