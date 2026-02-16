---
title: Xử lý Thuế
sidebar_position: 4
_i18n_hash: a50fddb07455f714128e042744ab5859
---
# Xử lý thuế

Ultimate Multisite có tích hợp sẵn module thu thuế trong plugin chính, vì vậy nếu bạn cần thu thuế bán hàng trên các gói dịch vụ, bạn có thể dễ dàng thực hiện mà không cần cài đặt thêm bất kỳ add-on nào.

Đối với các công ty tại Châu Âu, chúng tôi cung cấp một **add-on** bổ sung các công cụ và tính năng để **hỗ trợ tuân thủ VAT** tốt hơn.

Ultimate Multisite không khai báo hoặc nộp thuế thay bạn cho cơ quan chính phủ; chúng tôi chỉ giúp bạn thu đúng số thuế tại thời điểm giao dịch. **Bạn vẫn cần tự nộp thuế.**

## Kích hoạt tính năng thu thuế

Tính năng thu thuế không được bật mặc định. Để kích hoạt, bạn cần vào **Ultimate Multisite > Settings > Taxes** và bật tùy chọn Enable Taxes.

![Nút bật Enable Taxes trong cài đặt thuế](/img/config/settings-taxes.png)

### Giá chưa bao gồm thuế và giá đã bao gồm thuế

Mặc định, tất cả giá sản phẩm của bạn đều chưa bao gồm thuế, nghĩa là thuế **không được tính sẵn** trong giá sản phẩm. Nếu chúng tôi xác định khách hàng cần trả thuế cho một giao dịch, chúng tôi sẽ cộng thêm thuế **vào tổng phụ**.

Nếu bạn muốn giá sản phẩm đã bao gồm thuế, bạn có thể bật tùy chọn **Inclusive Tax**.

![Nút bật Inclusive Tax](/img/config/settings-taxes.png)

Đừng quên **lưu** các thay đổi bạn đã thực hiện.

### 

## Tạo mức thuế suất

Sau khi bật tính năng thu thuế, bạn cần tạo các mức thuế suất cho từng địa điểm cụ thể bằng trình chỉnh sửa thuế suất của chúng tôi.

Bạn có thể truy cập trình chỉnh sửa bằng cách nhấp vào nút **Manage Tax Rates** trên thanh bên của trang cài đặt thuế.

![Nút Manage Tax Rates trên thanh bên](/img/config/settings-taxes.png)

Trên trang chỉnh sửa thuế suất, bạn có thể thêm mức thuế suất mới bằng cách nhấp vào nút **Add new Row**.

![Trình chỉnh sửa thuế suất với nút Add new Row](/img/config/settings-taxes.png)

Bạn cần đặt **tên** cho mỗi mức thuế suất (sẽ hiển thị trên hóa đơn). Sau đó bạn có thể chọn **quốc gia** (bắt buộc), **tỉnh/bang** và **thành phố** (không bắt buộc) nơi thuế này sẽ được áp dụng. Cuối cùng, nhập **thuế suất theo phần trăm**.

### Danh mục thuế

Bạn cũng có thể tạo nhiều danh mục thuế để áp dụng các mức thuế suất khác nhau cho các loại sản phẩm khác nhau.

Nhấp vào **Add new Tax Category**, sau đó nhập tên danh mục và nhấn **Create**.

![Nút Add new Tax Category](/img/config/settings-taxes.png)

![Tạo danh mục thuế mới](/img/config/settings-taxes.png)

Để chuyển đổi giữa các danh mục, nhấp **Switch** và chọn danh mục bạn muốn thêm thuế mới.

![Chuyển đổi giữa các danh mục thuế](/img/config/settings-taxes.png)

![Chọn danh mục thuế để xem](/img/config/settings-taxes.png)

Bạn có thể thiết lập danh mục thuế cho một sản phẩm cụ thể bằng cách vào **trang chỉnh sửa sản phẩm** và chọn tab Taxes.

![Tab thuế sản phẩm với danh mục thuế và nút bật tính thuế](/img/config/product-taxes.png)

Trên cùng màn hình đó, bạn có thể tắt nút **Is Taxable?** để cho Ultimate Multisite biết rằng không cần thu thuế trên sản phẩm đó.

## Hỗ trợ VAT Châu Âu

Như đã đề cập, chúng tôi có một add-on dành cho khách hàng tại EU có các yêu cầu bổ sung do quy định VAT Châu Âu.

Các công cụ VAT của chúng tôi hỗ trợ một số việc quan trọng:

  * Tải nhanh các mức thuế suất VAT của EU;

  * Thu thập và xác thực mã số VAT - và áp dụng cơ chế reverse charge cho các đơn vị được miễn VAT (như các công ty có mã số VAT hợp lệ);

Để cài đặt add-on này, vào **Ultimate Multisite > Settings** và nhấp vào liên kết **Check our Add-ons** trên thanh bên.

![Trang cài đặt với liên kết add-ons trên thanh bên](/img/config/settings-taxes.png)

Bạn sẽ được chuyển đến trang add-ons của chúng tôi. Tại đây, bạn có thể tìm kiếm **Ultimate Multisite VAT add-on** và cài đặt nó.

![VAT add-on trên trang add-ons](/img/config/settings-taxes.png)

![Hộp thoại cài đặt VAT add-on](/img/config/settings-taxes.png)

Sau đó, vào **Network Admin > Plugins** và kích hoạt add-on này trên toàn bộ mạng lưới.

![Kích hoạt VAT add-on trên toàn mạng lưới](/img/config/settings-taxes.png)

Nếu bạn quay lại **tab Tax Settings**, bạn sẽ thấy các tùy chọn mới xuất hiện. Bật tùy chọn **Enable VAT Support** để kích hoạt các công cụ VAT mới. Đừng quên **lưu** cài đặt của bạn!

![Nút bật Enable VAT Support trong cài đặt thuế](/img/config/settings-taxes.png)

### Tải thuế suất VAT

Một trong những công cụ mà tích hợp của chúng tôi bổ sung là khả năng tải các mức thuế suất cho các quốc gia thành viên EU. Bạn có thể thực hiện điều này bằng cách truy cập trang chỉnh sửa thuế suất sau khi đã bật hỗ trợ EU VAT.

Ở cuối trang, bạn sẽ thấy các tùy chọn tải VAT. Chọn loại thuế suất và nhấp nút **Update EU VAT Rates** sẽ tải và tự động điền vào bảng các mức thuế suất cho từng quốc gia thành viên EU. Sau đó, bạn chỉ cần lưu lại.

### ![Tùy chọn tải thuế suất VAT với nút Update EU VAT Rates](/img/config/settings-taxes.png)

Bạn cũng có thể chỉnh sửa các giá trị sau khi tải. Để thực hiện, chỉ cần sửa dòng trong bảng bạn cần và nhấp để lưu các giá trị mới.

### Xác thực VAT

Khi hỗ trợ VAT được bật, Ultimate Multisite sẽ thêm một trường bổ sung vào form thanh toán, bên dưới trường địa chỉ thanh toán. Trường này chỉ hiển thị cho khách hàng ở EU.

![Trường mã số VAT trên form thanh toán](/img/config/settings-taxes.png)

Ultimate Multisite sau đó sẽ xác thực mã số VAT và nếu hợp lệ, cơ chế reverse charge sẽ được áp dụng và thuế suất được đặt thành 0% cho đơn hàng đó.
