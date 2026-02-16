---
title: Mẫu Trang
sidebar_position: 4
_i18n_hash: 35467c61accd92dcfce7e212e2b35474
---
# Mẫu Trang (v2)

_**LƯU Ý: Bài viết này đề cập đến Ultimate Multisite phiên bản 2.x. Nếu bạn đang sử dụng phiên bản 1.x,**_ **xem bài viết này** _**.**_

Mục tiêu của chúng tôi khi tạo một mạng lưới cao cấp với Ultimate Multisite là tự động hóa càng nhiều quy trình càng tốt, đồng thời mang đến cho khách hàng sự linh hoạt và nhiều lựa chọn khác nhau khi tạo trang web. Một cách đơn giản để đạt được sự cân bằng này là sử dụng tính năng Mẫu Trang của Ultimate Multisite.

## Mẫu Trang là gì?

Đúng như tên gọi, Mẫu Trang là một trang web mẫu có thể được dùng làm nền tảng khi tạo các trang mới trong mạng lưới của bạn.

Điều này có nghĩa là bạn có thể tạo một trang cơ sở, kích hoạt các plugin khác nhau, thiết lập theme đang sử dụng và tùy chỉnh theo ý muốn. Sau đó, khi khách hàng tạo tài khoản mới, thay vì nhận được một trang WordPress mặc định không có nội dung gì đáng kể, họ sẽ nhận được bản sao của trang cơ sở với tất cả các tùy chỉnh và nội dung đã sẵn sàng.

Nghe tuyệt vời đấy, nhưng làm thế nào để tạo một mẫu trang mới? Thật ra rất đơn giản.

## Tạo và Chỉnh sửa Mẫu Trang mới

Mẫu Trang chỉ là những trang bình thường trên mạng lưới của bạn. Để tạo mẫu mới, bạn chỉ cần vào **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Nút Add site trong trang danh sách Sites](/img/config/site-templates-list.png)**

Thao tác này sẽ mở một cửa sổ modal yêu cầu bạn nhập **Site title, Site Domain/path,** và **Site type**. Trong trường thả xuống **Site Type**, hãy chắc chắn rằng bạn chọn **Site Template** *.*

_![Modal thêm mẫu trang với dropdown loại trang](/img/config/site-templates-list.png)_

Ở cuối biểu mẫu, bạn sẽ thấy một công tắc **Copy Site**. Tùy chọn này cho phép bạn tạo mẫu trang mới dựa trên một mẫu trang có sẵn làm điểm khởi đầu, giúp bạn tiết kiệm thời gian thay vì phải tạo mẫu trang từ đầu.

![Modal thêm mẫu trang với công tắc copy site](/img/config/site-templates-list.png)

### Tùy chỉnh nội dung của Mẫu Trang

Để tùy chỉnh mẫu trang, bạn chỉ cần truy cập vào bảng điều khiển dashboard của nó và thực hiện các thay đổi cần thiết. Bạn có thể tạo bài viết mới, trang mới, kích hoạt plugin và thay đổi theme đang sử dụng. Bạn thậm chí có thể vào Customizer và thay đổi tất cả các tùy chọn tùy chỉnh.

Tất cả dữ liệu đó sẽ được sao chép khi khách hàng tạo trang mới dựa trên Mẫu Trang đó.

### Tùy chọn Nâng cao

Nếu bạn có kiến thức về lập trình, bạn có thể sử dụng API Search and Replace của chúng tôi để tự động thay thế thông tin trên trang mới sau khi tạo. Điều này hữu ích cho những việc như thay thế tên công ty trên trang Giới thiệu, thay thế email liên hệ trên trang Liên hệ, v.v.

### Sử dụng Mẫu Trang

Vậy bạn đã tạo nhiều Mẫu Trang khác nhau với các thiết kế, theme và cài đặt khác nhau. Làm thế nào để sử dụng chúng một cách hiệu quả trên mạng lưới của bạn?

Về cơ bản, có hai cách tiếp cận bạn có thể sử dụng (không đồng thời):

  * Gắn một Mẫu Trang vào mỗi Gói dịch vụ của bạn

**HOẶC**

  * Cho phép khách hàng tự chọn mẫu trang trong quá trình đăng ký.

#### Chế độ 1: Chỉ định Mẫu Trang

Trong chế độ này, khách hàng sẽ không thể chọn mẫu khi tạo tài khoản, thay vào đó bạn sẽ xác định mẫu nào được sử dụng cho mỗi Gói dịch vụ.

Để làm điều này, bạn cần vào **Ultimate Multisite > Products > Edit**.

![Chỉnh sửa sản phẩm để gán mẫu trang](/img/config/product-site-templates.png)

Thao tác này sẽ đưa bạn đến trang **Edit Product**. Trong phần **Product Options**, tìm tab **Site template** và chọn tùy chọn **Assign Site Template** từ trường thả xuống. Danh sách các mẫu trang có sẵn sẽ hiện ra và cho phép bạn chọn một mẫu trang duy nhất cho sản phẩm.

![Tab mẫu trang sản phẩm với tùy chọn chỉ định mẫu trang](/img/config/product-site-templates.png)

#### Chế độ 2: Chọn Mẫu Trang Có sẵn

Trong chế độ này, bạn sẽ cho khách hàng quyền lựa chọn trong quá trình đăng ký. Họ có thể chọn từ các mẫu trang khác nhau mà bạn đã định nghĩa trong cài đặt sản phẩm. Bạn có tùy chọn giới hạn các mẫu trang mà họ có thể chọn cho từng sản phẩm. Điều này cho phép bạn có các bộ mẫu trang khác nhau cho mỗi sản phẩm, rất lý tưởng để làm nổi bật các chức năng và tính năng khác nhau cho sản phẩm có giá cao hơn.

Trên trang **Edit Product**. Trong phần **Product Options**, tìm tab **Site template** và chọn tùy chọn **Choose Available Site Template** từ trường thả xuống. Danh sách các mẫu trang có sẵn sẽ hiện ra và cho phép bạn chọn các mẫu trang muốn hiển thị. Bạn có thể làm điều này bằng cách chọn Hành vi: **Available** nếu bạn muốn mẫu trang được đưa vào danh sách. _**Not Available**_ nếu bạn muốn mẫu trang không hiển thị như một tùy chọn. Và **Pre-selected** nếu bạn muốn một trong các mẫu trang được chọn sẵn làm mặc định.

![Chọn mẫu trang có sẵn với các tùy chọn hành vi](/img/config/product-site-templates.png)

### Chế độ Mặc định: Chọn mẫu trang trên biểu mẫu Thanh toán

Nếu bạn muốn tất cả các mẫu trang đều có sẵn trong quá trình đăng ký, hoặc không muốn mất công gán hay chỉ định mẫu trang cho từng sản phẩm bạn tạo. Bạn chỉ cần thiết lập lựa chọn mẫu trang trong **Checkout Form**. Để làm điều này, bạn vào **Ultimate Multisite > Checkout Forms**. Sau đó nhấp **Edit** dưới biểu mẫu bạn muốn cấu hình.

![Trang danh sách biểu mẫu thanh toán](/img/config/checkout-forms-list.png)

Thao tác này sẽ mở trang **Edit Checkout Form**. Tìm trường **Template Selection** và nhấp **Edit** bên dưới.

![Trình chỉnh sửa biểu mẫu thanh toán với trường chọn mẫu](/img/config/checkout-form-editor.png)

Một cửa sổ modal sẽ xuất hiện. Trong trường **Template Sites**, bạn có thể chọn và liệt kê tất cả các mẫu trang mà bạn muốn hiển thị trong quá trình đăng ký. Các mẫu trang bạn chỉ định ở đây sẽ có sẵn bất kể người dùng chọn sản phẩm nào.

![Trường mẫu trang trong trình chỉnh sửa biểu mẫu thanh toán](/img/config/checkout-form-step.png)

### Tùy chọn Mẫu Trang

Có các chức năng mẫu trang khác mà bạn có thể bật hoặc tắt trong cài đặt Ultimate Multisite.

![Tùy chọn mẫu trang trong cài đặt Ultimate Multisite](/img/config/settings-sites.png)

#### Cho phép Chuyển đổi Mẫu

Bật tùy chọn này sẽ cho phép khách hàng chuyển đổi mẫu mà họ đã chọn trong quá trình đăng ký sau khi tài khoản và trang đã được tạo. Điều này hữu ích từ góc nhìn của khách hàng vì cho phép họ chọn lại mẫu nếu sau này họ phát hiện lựa chọn ban đầu không phù hợp nhất với nhu cầu cụ thể của họ.

#### Cho phép Người dùng sử dụng Trang của họ làm mẫu

Vì người dùng trang con đã dành thời gian xây dựng và thiết kế trang của riêng họ, họ có thể muốn nhân bản và sử dụng nó như một trong các mẫu trang có sẵn khi tạo trang con khác trên mạng lưới của bạn. Tùy chọn này sẽ cho phép họ thực hiện điều đó.

#### Sao chép Media khi Nhân bản Mẫu

Đánh dấu tùy chọn này sẽ sao chép các tệp media đã tải lên trên trang mẫu sang trang mới được tạo. Tùy chọn này có thể được ghi đè trong từng gói dịch vụ.

#### **Ngăn Công cụ Tìm kiếm lập chỉ mục Mẫu Trang**

Mẫu trang như đã thảo luận trong bài viết này là bản mẫu nhưng vẫn là một phần của mạng lưới, có nghĩa là các công cụ tìm kiếm vẫn có thể tìm thấy chúng. Tùy chọn này sẽ cho phép bạn ẩn các mẫu trang để công cụ tìm kiếm không lập chỉ mục chúng.

## Điền sẵn Mẫu Trang với tính năng tự động tìm-và-thay-thế

Một trong những tính năng mạnh mẽ nhất của Ultimate Multisite là khả năng thêm các trường văn bản, màu sắc và lựa chọn tùy ý vào biểu mẫu đăng ký. Sau khi thu thập dữ liệu đó, chúng ta có thể sử dụng nó để điền sẵn nội dung vào một số phần nhất định của mẫu trang được chọn. Sau đó, khi trang mới được xuất bản, Ultimate Multisite sẽ thay thế các placeholder bằng thông tin thực tế đã nhập trong quá trình đăng ký.

Ví dụ, nếu bạn muốn lấy tên công ty của người dùng cuối trong quá trình đăng ký và tự động đặt tên công ty đó lên trang chủ. Trên trang chủ của mẫu trang, bạn cần thêm các placeholder như trong hình bên dưới (placeholder phải được đặt trong dấu ngoặc nhọn kép - {{placeholder_name}}).

![Trang chủ với văn bản placeholder trong dấu ngoặc nhọn](/img/config/site-templates-list.png)

Sau đó, bạn chỉ cần thêm một trường đăng ký tương ứng trên biểu mẫu thanh toán để thu thập dữ liệu đó:

![Biểu mẫu thanh toán với trường đăng ký tương ứng](/img/config/checkout-form-editor.png)

Khách hàng của bạn sau đó có thể điền vào trường đó trong quá trình đăng ký.

![Trường đăng ký được khách hàng điền](/img/config/checkout-form-step.png)

![Xem trước biểu mẫu đăng ký](/img/config/checkout-form-editor.png)

Ultimate Multisite sau đó sẽ tự động thay thế các placeholder bằng dữ liệu do khách hàng cung cấp.

![Placeholder được thay thế bằng dữ liệu khách hàng trên trang](/img/config/site-templates-list.png)

### Giải quyết vấn đề "mẫu đầy placeholder"

Tất cả những điều đó rất tuyệt, nhưng chúng ta gặp phải một vấn đề khó chịu: giờ đây các mẫu trang của chúng ta - mà khách hàng có thể truy cập - đầy những placeholder xấu xí không nói lên được điều gì.

Để giải quyết vấn đề này, chúng tôi cung cấp tùy chọn thiết lập các giá trị giả cho placeholder, và chúng tôi sử dụng những giá trị này để tìm và thay thế nội dung trên các trang mẫu khi khách hàng đang xem.

Bạn có thể truy cập trình chỉnh sửa placeholder mẫu bằng cách vào **Ultimate Multisite > Settings > Sites**, sau đó nhấp vào liên kết **Edit Placeholders** trên thanh bên.

![Cài đặt placeholder trong trang cài đặt Sites](/img/config/settings-sites.png)

Thao tác này sẽ đưa bạn đến trình chỉnh sửa nội dung placeholder, nơi bạn có thể thêm placeholder và nội dung tương ứng của chúng.

![Trình chỉnh sửa nội dung placeholder mẫu](/img/config/settings-sites.png)
