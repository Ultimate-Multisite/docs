---
title: Xử lý thuế
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Xử lý thuế

Ultimate Multisite có một mô-đun thu thuế được tích hợp trong plugin lõi của chúng tôi, vì vậy nếu bạn cần thu thuế bán hàng trên các gói, gói dịch vụ và dịch vụ của mình, bạn có thể dễ dàng thực hiện mà không cần cài đặt bất kỳ tiện ích bổ sung nào.

Đối với các công ty đặt tại châu Âu, chúng tôi cung cấp một **tiện ích bổ sung** thêm các công cụ và tính năng để **hỗ trợ VAT** tốt hơn cho việc tuân thủ.

Ultimate Multisite không kê khai hoặc nộp thuế thay mặt bạn cho chính phủ; chúng tôi chỉ giúp bạn thu các khoản thuế phù hợp tại thời điểm giao dịch. **Bạn vẫn cần tự nộp thuế.**

## Bật thu thuế {#enabling-tax-collection}

Thu thuế không được bật theo mặc định. Để bật, bạn cần đi tới **Ultimate Multisite > Cài đặt > Thuế** và bật cài đặt Bật thuế.

![Nút bật Bật thuế ở đầu trang cài đặt Thuế](/img/config/settings-taxes-enable.png)

Đây là chế độ xem đầy đủ của trang cài đặt thuế:

![Toàn bộ trang cài đặt thuế](/img/config/settings-taxes-full.png)

Bạn cũng có thể xem cài đặt thuế cho từng sản phẩm:

![Cài đặt thuế cho sản phẩm](/img/config/settings-taxes.png)

### Chưa bao gồm thuế so với Đã bao gồm thuế {#tax-excluded-vs-tax-included}

Theo mặc định, tất cả giá sản phẩm của bạn đều chưa bao gồm thuế, nghĩa là thuế **không được bao gồm** trong giá của sản phẩm. Nếu chúng tôi xác định rằng khách hàng phải trả thuế cho một giao dịch mua cụ thể, chúng tôi sẽ cộng thuế **lên trên** tổng phụ.

Nếu bạn muốn thuế được bao gồm trong giá sản phẩm, bạn có thể làm điều đó bằng cách bật cài đặt **Thuế bao gồm**.

![Hàng bật Thuế bao gồm bên dưới cài đặt Bật thuế](/img/config/settings-taxes-inclusive.png)

Đừng quên **lưu** các thay đổi bạn đã thực hiện.

###

## Tạo mức thuế {#creating-tax-rates}

Sau khi bật Thu thuế, bạn sẽ cần tạo các mức thuế cho những địa điểm cụ thể bằng trình chỉnh sửa mức thuế của chúng tôi.

Bạn có thể truy cập trình chỉnh sửa bằng cách nhấp vào nút **Quản lý mức thuế** trên thanh bên của trang cài đặt Thuế.

![Liên kết Quản lý mức thuế trong bảng Mức thuế trên trang cài đặt](/img/config/settings-taxes-manage-rates.png)

Trên trang trình chỉnh sửa mức thuế, bạn có thể thêm Mức thuế mới bằng cách nhấp vào nút **Thêm hàng mới**.

![Bảng trình chỉnh sửa mức thuế với nút Thêm hàng mới ở phía trên](/img/config/tax-rates-editor.png)

Bạn sẽ cần đặt cho mỗi mức thuế một **tiêu đề** (được dùng trên hóa đơn). Sau đó, bạn có thể chọn **quốc gia** (bắt buộc), **tiểu bang,** và **thành phố** (cả hai đều tùy chọn) nơi khoản thuế này sẽ được tính. Cuối cùng, thêm **mức thuế theo phần trăm**.

### Danh mục thuế {#tax-categories}

Bạn cũng có thể tạo nhiều Danh mục thuế, để thêm các mức thuế khác nhau cho các loại sản phẩm khác nhau.

Nhấp để **Thêm danh mục thuế mới** , sau đó viết tên danh mục của bạn và nhấn **Tạo**.

![Nút Thêm danh mục thuế mới ở đầu trình chỉnh sửa mức thuế](/img/config/tax-categories-add.png)

![Trường nhập Tên danh mục thuế trong hộp thoại tạo danh mục](/img/config/tax-categories-create-modal.png)

Để duyệt qua các danh mục, nhấp vào **Chuyển đổi** và chọn danh mục mà bạn muốn thêm các khoản thuế mới.

![Nút thả xuống Chuyển đổi để thay đổi giữa các danh mục thuế](/img/config/tax-categories-switch.png)

![Danh sách thả xuống chọn danh mục thuế hiển thị các danh mục có sẵn](/img/config/tax-categories-select.png)

Bạn có thể đặt danh mục thuế cho một sản phẩm cụ thể bằng cách đi tới **trang chỉnh sửa Sản phẩm** rồi đến tab Thuế.

![Tab thuế của Sản phẩm với danh mục thuế và nút bật có chịu thuế](/img/config/product-taxes.png)

Trên cùng màn hình đó, bạn có thể tắt nút bật **Có chịu thuế không?** để cho Ultimate Multisite biết rằng hệ thống không nên thu thuế trên sản phẩm cụ thể đó.

## Hỗ trợ VAT châu Âu {#european-vat-support}

Như đã đề cập trước đó, chúng tôi có một tiện ích bổ sung dành cho khách hàng ở EU, những người có các yêu cầu bổ sung do quy định VAT của châu Âu.

Các công cụ VAT của chúng tôi giúp xử lý một vài việc quan trọng:

  * Dễ dàng tải các mức VAT của EU;

  * Thu thập và xác thực Số VAT - và áp dụng tính phí ngược cho các thực thể được miễn VAT (chẳng hạn như các công ty có số VAT hợp lệ);

Để cài đặt tiện ích bổ sung đó, hãy đi tới **Ultimate Multisite > Cài đặt** rồi nhấp vào liên kết thanh bên **Xem các tiện ích bổ sung của chúng tôi**.

![Thanh bên trang Cài đặt với liên kết Xem các tiện ích bổ sung của chúng tôi](/img/config/settings-taxes-addons-link.png)

Bạn sẽ được chuyển hướng đến trang tiện ích bổ sung của chúng tôi. Tại đó, bạn có thể tìm kiếm **tiện ích bổ sung VAT của Ultimate Multisite** và cài đặt nó.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Sau đó, đi tới **Quản trị mạng > Plugin** và kích hoạt tiện ích bổ sung đó trên toàn mạng.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Nếu bạn quay lại **tab Cài đặt thuế** , bạn sẽ thấy các tùy chọn mới có sẵn. Bật tùy chọn **Bật hỗ trợ VAT** để bật các công cụ VAT mới. Đừng quên **lưu** cài đặt của bạn!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Lấy các mức thuế VAT {#pulling-on-vat-tax-rates}

Một trong những công cụ mà tích hợp của chúng tôi thêm vào là khả năng tải các mức thuế cho các quốc gia thành viên EU. Việc đó có thể được thực hiện bằng cách truy cập trang trình chỉnh sửa mức thuế sau khi bật hỗ trợ VAT của EU.

Ở cuối trang, bạn sẽ thấy các tùy chọn lấy VAT. Chọn một loại mức thuế và nhấp vào nút **Cập nhật mức VAT EU** sẽ lấy và tự động điền bảng với các mức thuế cho từng quốc gia thành viên EU. Sau đó, bạn chỉ cần lưu lại.

![Nút Cập nhật mức VAT EU ở cuối trình chỉnh sửa mức thuế](/img/config/tax-rates-vat-pull.png)

Bạn cũng có thể chỉnh sửa các giá trị sau khi lấy chúng. Để thực hiện, chỉ cần chỉnh sửa dòng bảng bạn cần và nhấp để lưu các giá trị mới.

### Xác thực VAT {#vat-validation}

Khi hỗ trợ VAT được bật, Ultimate Multisite sẽ thêm một trường bổ sung vào biểu mẫu thanh toán, bên dưới trường địa chỉ thanh toán. Trường này sẽ chỉ hiển thị cho khách hàng đặt tại EU.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite sau đó sẽ xác thực Mã số VAT và nếu mã này được trả về là hợp lệ, cơ chế reverse charge sẽ được áp dụng và thuế suất được đặt thành 0% cho đơn hàng đó.
