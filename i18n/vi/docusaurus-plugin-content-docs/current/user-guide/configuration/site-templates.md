---
title: Mẫu trang
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Mẫu trang (v2)

_**LƯU Ý: Bài viết này đề cập đến Ultimate Multisite phiên bản 2.x. Nếu bạn đang sử dụng phiên bản 1.x,**_ **hãy xem bài viết này** _**.**_

Mục tiêu của chúng tôi khi tạo một mạng cao cấp với Ultimate Multisite là tự động hóa nhiều quy trình nhất có thể, đồng thời vẫn mang lại cho khách hàng sự linh hoạt và nhiều tùy chọn khác nhau để lựa chọn khi tạo website của họ. Một cách dễ dàng để đạt được sự cân bằng này là sử dụng tính năng Mẫu trang của Ultimate Multisite.

## Mẫu trang là gì?

Đúng như tên gọi, Mẫu trang là một trang nền tảng có thể được dùng làm cơ sở khi tạo các trang mới trong mạng của bạn.

Điều này có nghĩa là bạn có thể tạo một trang cơ sở, kích hoạt các plugin khác nhau, đặt một theme đang hoạt động và tùy chỉnh theo bất kỳ cách nào bạn muốn. Sau đó, khi khách hàng của bạn tạo một Account mới, thay vì nhận một trang WordPress mặc định không có nội dung có ý nghĩa bên trong, họ sẽ nhận được một bản sao của trang cơ sở của bạn với tất cả tùy chỉnh và nội dung đã được thiết lập sẵn.

Nghe thật tuyệt, nhưng làm thế nào để tôi tạo một mẫu trang mới? Việc này đơn giản hết mức có thể.

## Tạo và chỉnh sửa một Mẫu trang mới

Mẫu trang chỉ là các trang bình thường trên mạng của bạn. Để tạo một mẫu mới, bạn chỉ cần đi tới **Quản trị mạng > Ultimate Multisite > Trang > Thêm trang.**

**![Nút thêm trang trong trang danh sách Trang](/img/config/site-templates-list.png)**

Thao tác này sẽ mở một cửa sổ modal, nơi hệ thống sẽ yêu cầu **Tiêu đề trang, Tên miền/đường dẫn trang,** và **Loại trang**. Trong trường thả xuống **Loại trang**, hãy đảm bảo bạn chọn **Mẫu trang** *.*

_![Modal thêm mẫu trang với danh sách thả xuống loại trang](/img/config/site-templates-list.png)_

Bạn cũng có thể thêm một mô tả hiển thị cho khách hàng để giải thích mẫu bao gồm những gì:

![Trường mô tả mẫu trang trên màn hình chỉnh sửa mẫu trang](/img/config/site-template-edit-description.png)

Ở cuối biểu mẫu, bạn sẽ thấy một công tắc bật/tắt **Sao chép trang**. Tùy chọn này sẽ cho phép bạn tạo một mẫu trang mới dựa trên một mẫu trang hiện có làm điểm bắt đầu, giúp bạn tiết kiệm thời gian thay vì tạo một mẫu trang từ đầu.

![Modal thêm mẫu trang với công tắc sao chép trang](/img/config/site-templates-list.png)

### Tùy chỉnh nội dung của một Mẫu trang

Để tùy chỉnh mẫu trang của bạn, chỉ cần điều hướng đến bảng Dashboard của nó và thực hiện các thay đổi bạn cần. Bạn có thể tạo bài viết mới, trang mới, kích hoạt plugin và thay đổi theme đang hoạt động. Bạn thậm chí có thể đi tới Trình tùy biến và thay đổi mọi loại tùy chọn tùy chỉnh.

![Giao diện chỉnh sửa mẫu trang](/img/config/site-template-edit.png)

Tất cả dữ liệu đó sẽ được sao chép sang khi khách hàng tạo một trang mới dựa trên Mẫu trang đó.

### Tùy chọn nâng cao

Nếu bạn thành thạo một số mã tùy chỉnh, bạn có thể sử dụng API Tìm kiếm và Thay thế của chúng tôi để tự động thay thế thông tin trên trang mới sau khi trang được tạo. Điều này hữu ích cho những việc như thay thế tên công ty trên trang Giới thiệu, thay thế email liên hệ trên trang Liên hệ, v.v.

### Sử dụng Mẫu trang

Được rồi, vậy là bạn đã tạo một loạt Mẫu trang khác nhau với các thiết kế, theme và thiết lập khác nhau. Bây giờ làm thế nào để chúng trở nên hữu ích trên mạng của bạn?

Về cơ bản, hiện có hai cách tiếp cận bạn có thể sử dụng (không dùng đồng thời):

  * Gắn một Mẫu trang vào từng Gói của bạn

**HOẶC**

  * Cho phép khách hàng tự chọn mẫu trang trong quá trình đăng ký.

#### Chế độ 1: Gán Mẫu trang

Trong chế độ này, khách hàng của bạn sẽ không thể chọn một mẫu khi họ tạo Account, mà thay vào đó bạn sẽ xác định mẫu nào sẽ được dùng cho từng Gói của bạn.

Để làm điều đó, bạn cần đi tới **Ultimate Multisite > Sản phẩm > Chỉnh sửa**.

![Chỉnh sửa sản phẩm để gán mẫu trang](/img/config/product-site-templates.png)

Thao tác này sẽ đưa bạn đến trang **Chỉnh sửa sản phẩm**. Trong phần **Tùy chọn sản phẩm**, tìm tab **Mẫu trang** và chọn tùy chọn **Gán Mẫu trang** từ trường thả xuống. Thao tác này sẽ hiển thị danh sách các mẫu trang có sẵn và cho phép bạn chọn chỉ một mẫu trang dành riêng cho sản phẩm.

![Tab mẫu trang của sản phẩm với tùy chọn gán mẫu trang](/img/config/product-site-templates.png)

#### Chế độ 2: Chọn Mẫu trang có sẵn

Trong chế độ này, bạn sẽ cho khách hàng lựa chọn trong quá trình đăng ký. Họ sẽ có thể chọn từ các mẫu trang khác nhau mà bạn xác định trong thiết lập sản phẩm. Bạn có tùy chọn giới hạn mẫu trang mà họ có thể chọn trong sản phẩm đã chọn. Điều này sẽ cho phép bạn có các bộ mẫu trang khác nhau trong từng sản phẩm, rất lý tưởng để làm nổi bật các chức năng và tính năng khác nhau cho một sản phẩm có giá cao hơn.

Trên trang **Chỉnh sửa sản phẩm**. Trong phần **Tùy chọn sản phẩm**, tìm tab **Mẫu trang** và chọn tùy chọn **Chọn Mẫu trang có sẵn** từ trường thả xuống. Thao tác này sẽ hiển thị danh sách các mẫu trang có sẵn và cho phép bạn chọn mẫu trang mà bạn muốn cho phép sử dụng. Bạn có thể làm điều này bằng cách chọn Hành vi của nó: **Có sẵn** nếu bạn muốn mẫu trang được đưa vào danh sách. _**Không có sẵn**_ nếu bạn không muốn mẫu trang hiển thị như một tùy chọn. Và **Được chọn sẵn** nếu bạn muốn một trong các mẫu trang được liệt kê trở thành lựa chọn mặc định.

![Chọn mẫu trang có sẵn với các tùy chọn hành vi](/img/config/product-site-templates.png)

### Chế độ mặc định: lựa chọn mẫu trang trên biểu mẫu Thanh toán

Nếu bạn muốn tất cả mẫu trang của mình có sẵn trong quá trình đăng ký, hoặc có thể không muốn làm thêm việc gán hoặc chỉ định mẫu trang trong từng sản phẩm bạn tạo. Khi đó bạn có thể chỉ cần đặt lựa chọn mẫu trang trong **Biểu mẫu thanh toán** của mình. Để thực hiện việc này, hãy đi tới **Ultimate Multisite > Biểu mẫu thanh toán** và nhấp **Chỉnh sửa** dưới biểu mẫu bạn muốn cấu hình.

Thao tác này sẽ hiển thị trang **Chỉnh sửa biểu mẫu thanh toán**. Tìm trường **Lựa chọn mẫu** và nhấp **Chỉnh sửa** bên dưới trường đó.

Một cửa sổ modal sẽ xuất hiện. Trong trường **Template Sites**, bạn có thể chọn và liệt kê tất cả các mẫu site mà bạn muốn hiển thị trong quá trình đăng ký. Các mẫu site bạn chỉ định tại đây sẽ khả dụng bất kể người dùng đã chọn sản phẩm nào.

![Trường chọn mẫu trong trình chỉnh sửa biểu mẫu checkout](/img/config/checkout-form-template-step.png)

Ở frontend, khách hàng sẽ thấy bộ chọn mẫu trong quá trình checkout và có thể chọn thiết kế khởi đầu cho site mới của họ.

![Bộ chọn mẫu ở frontend trong quá trình đăng ký](/img/config/frontend-template-chooser.png)

### Tùy chọn mẫu site

Có các chức năng mẫu site khác mà bạn có thể bật hoặc tắt trong cài đặt Ultimate Multisite.

![Tùy chọn mẫu site trong cài đặt Ultimate Multisite](/img/config/settings-sites-templates-section.png)

#### Cho phép chuyển đổi mẫu

Bật tùy chọn này sẽ cho phép khách hàng của bạn chuyển đổi mẫu mà họ chọn trong quá trình đăng ký sau khi Account và site được tạo. Điều này hữu ích từ góc nhìn của khách hàng vì nó cho phép họ chọn lại mẫu nếu sau này họ nhận ra lựa chọn ban đầu không phải là lựa chọn tốt nhất cho nhu cầu cụ thể của họ.

#### Cho phép người dùng dùng site của họ làm mẫu

Vì người dùng subsite đã dành thời gian xây dựng và thiết kế site của riêng họ, họ có thể muốn sao chép và dùng nó như một trong các mẫu site khả dụng khi tạo một subsite khác trên mạng của bạn. Tùy chọn này sẽ cho phép họ làm được điều đó.

#### Sao chép media khi nhân bản mẫu

Chọn tùy chọn này sẽ sao chép media đã tải lên trên site mẫu sang site mới được tạo. Điều này có thể được ghi đè trên từng gói.

#### **Ngăn công cụ tìm kiếm lập chỉ mục mẫu site**

Các mẫu site như được thảo luận trong bài viết này là khuôn mẫu có sẵn nhưng vẫn là một phần của mạng của bạn, nghĩa là chúng vẫn có thể được công cụ tìm kiếm tìm thấy. Tùy chọn này sẽ cho phép bạn ẩn các mẫu site để công cụ tìm kiếm có thể lập chỉ mục chúng.

## Điền sẵn mẫu site bằng tự động tìm kiếm và thay thế

Một trong những tính năng mạnh mẽ nhất của Ultimate Multisite là khả năng thêm các trường văn bản, màu sắc và lựa chọn tùy ý vào biểu mẫu đăng ký. Sau khi đã thu thập dữ liệu đó, chúng ta có thể dùng nó để điền sẵn nội dung vào một số phần nhất định của mẫu site đã chọn. Sau đó, khi site mới được xuất bản, Ultimate Multisite sẽ thay thế các placeholder bằng thông tin thực tế đã nhập trong quá trình đăng ký.

Ví dụ, nếu bạn muốn lấy tên công ty của người dùng cuối trong quá trình đăng ký và tự động đặt tên công ty trên trang chủ. Trên trang chủ site mẫu của bạn, bạn cần thêm các placeholder, như trong hình bên dưới (placeholder nên được thêm trong cặp dấu ngoặc nhọn kép - {{placeholder_name}}).

![Trang chủ có văn bản placeholder trong dấu ngoặc nhọn](/img/config/site-templates-list.png)

Sau đó, bạn chỉ cần thêm một trường đăng ký tương ứng trên biểu mẫu checkout để thu thập dữ liệu đó. Cùng trình chỉnh sửa biểu mẫu checkout được dùng để chọn mẫu cũng cho phép bạn đặt các trường tùy chỉnh bên cạnh bộ chọn mẫu:

![Chọn mẫu và các trường đăng ký trong trình chỉnh sửa biểu mẫu checkout](/img/config/checkout-form-template-step.png)

Khách hàng của bạn sau đó sẽ có thể điền trường đó trong quá trình đăng ký.

![Biểu mẫu checkout frontend có bộ chọn mẫu](/img/config/frontend-template-chooser.png)

Ultimate Multisite sau đó sẽ tự động thay thế các placeholder bằng dữ liệu do khách hàng cung cấp.

![Placeholder được thay thế bằng dữ liệu khách hàng trên site](/img/config/site-templates-list.png)

### Giải quyết vấn đề "mẫu đầy placeholder"

Tất cả điều đó đều rất tuyệt, nhưng chúng ta sẽ gặp một vấn đề khó coi: giờ đây các mẫu site của chúng ta - có thể được khách hàng truy cập - lại đầy những placeholder khó coi và không truyền tải được nhiều thông tin.

Để giải quyết điều đó, chúng tôi cung cấp tùy chọn thiết lập các giá trị giả cho placeholder, và chúng tôi dùng các giá trị đó để tìm kiếm và thay thế nội dung của chúng trên các site mẫu trong khi khách hàng của bạn đang truy cập.

Bạn có thể truy cập trình chỉnh sửa placeholder của mẫu bằng cách đi tới **Ultimate Multisite > Settings > Sites**, rồi trên sidebar, nhấp vào liên kết **Edit Placeholders**.

![Cài đặt mẫu site trong trang cài đặt Sites](/img/config/settings-sites-templates-section.png)

Điều đó sẽ đưa bạn đến trình chỉnh sửa nội dung của placeholder, nơi bạn có thể thêm placeholder và nội dung tương ứng của chúng.

![Điểm vào trình chỉnh sửa nội dung placeholder của mẫu](/img/config/settings-sites-templates-section.png)
