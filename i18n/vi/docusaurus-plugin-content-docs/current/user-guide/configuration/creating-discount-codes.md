---
title: Tạo Mã Giảm Giá
sidebar_position: 19
_i18n_hash: 66179a52645793d48bb6cb9a9e47c016
---
# Tạo mã giảm giá (v2)

_**LƯU Ý QUAN TRỌNG: Bài viết này đề cập đến Ultimate Multisite phiên bản 2.x.**_

Với Ultimate Multisite, bạn có thể tạo mã giảm giá để giảm giá cho khách hàng khi họ đăng ký gói dịch vụ. Và việc tạo mã cũng rất đơn giản!

## Tạo và chỉnh sửa mã giảm giá

Để tạo hoặc chỉnh sửa mã giảm giá, hãy vào **Ultimate Multisite > Discount Codes**.

![](/img/config/discount-codes-list.png)

Tại đây, bạn sẽ thấy danh sách các mã giảm giá đã tạo trước đó.

Bạn có thể nhấp vào **Add Discount Code** để tạo mã mới, hoặc chỉnh sửa mã hiện có bằng cách di chuột qua và nhấp **Edit**.

![Danh sách mã giảm giá với các thao tác khi di chuột](/img/config/discount-codes-list.png)

![Nút Add Discount Code](/img/config/discount-codes-list.png)

Bạn sẽ được chuyển đến trang tạo hoặc chỉnh sửa mã giảm giá. Trong ví dụ này, chúng ta sẽ tạo một mã mới.

![Trang chỉnh sửa mã giảm giá](/img/config/discount-codes-list.png)

Hãy cùng xem các tùy chọn có sẵn tại đây:

**Enter Discount Code:** Đây chỉ là tên của mã giảm giá. Đây không phải là mã mà khách hàng sẽ nhập trong form thanh toán.

**Description:** Tại đây, bạn có thể mô tả ngắn gọn mục đích của mã giảm giá này.

![Các trường tên và mô tả mã giảm giá](/img/config/discount-codes-list.png)

**Coupon code:** Đây là nơi bạn định nghĩa mã mà khách hàng cần nhập khi thanh toán.

![Trường nhập mã coupon](/img/config/discount-codes-list.png)

**Discount:** Tại đây, bạn có thể thiết lập mức giảm giá theo **phần trăm** hoặc **số tiền cố định**.

![Thiết lập giảm giá theo phần trăm hoặc số tiền cố định](/img/config/discount-codes-list.png)

**Apply to renewals:** Nếu tùy chọn này tắt, mã giảm giá sẽ chỉ áp dụng cho **lần thanh toán đầu tiên**. Các lần thanh toán sau sẽ không được giảm giá. Nếu bật tùy chọn này, mã giảm giá sẽ có hiệu lực cho tất cả các lần thanh toán trong tương lai.

**Setup fee discount:** Nếu tùy chọn này tắt, mã giảm giá sẽ **không áp dụng cho phí cài đặt** của đơn hàng. Nếu bật tùy chọn này, bạn có thể thiết lập mức giảm (phần trăm hoặc số tiền cố định) mà mã giảm giá sẽ áp dụng cho phí cài đặt của các gói dịch vụ.

![Tùy chọn áp dụng cho gia hạn và giảm giá phí cài đặt](/img/config/discount-codes-list.png)

**Active:** Kích hoạt hoặc vô hiệu hóa mã giảm giá này theo cách thủ công.

![Nút bật/tắt kích hoạt mã giảm giá](/img/config/discount-codes-list.png)

Trong phần **Advanced Options**, chúng ta có các thiết lập sau:

**Limit uses:**

  * **Uses:** Tại đây, bạn có thể xem số lần mã giảm giá đã được sử dụng.

  * **Max uses:** Giới hạn số lần người dùng có thể sử dụng mã giảm giá này. Ví dụ, nếu bạn nhập 10, mã chỉ có thể được sử dụng 10 lần. Sau khi đạt giới hạn, mã sẽ không thể sử dụng được nữa.

![Thiết lập giới hạn sử dụng với các trường số lần đã dùng và số lần tối đa](/img/config/discount-codes-list.png)

**Start & expiration dates:** Tại đây, bạn có thể thêm ngày bắt đầu và/hoặc ngày hết hạn cho mã giảm giá.

![Các trường ngày bắt đầu và ngày hết hạn](/img/config/discount-codes-list.png)

**Limit products:** Nếu bạn bật **Select products**, tất cả sản phẩm của bạn sẽ được hiển thị. Bạn có thể chọn thủ công (bằng cách bật hoặc tắt) sản phẩm nào được phép sử dụng mã giảm giá này. Những sản phẩm bị tắt sẽ không áp dụng được mã giảm giá dù khách hàng có nhập mã.

![Các nút chọn giới hạn sản phẩm](/img/config/discount-codes-list.png)

Sau khi thiết lập xong tất cả các tùy chọn, nhấp vào **Save Discount Code** để lưu mã giảm giá và hoàn tất!

![Nút Save Discount Code](/img/config/discount-codes-list.png)

Mã giảm giá giờ đã có trong danh sách và từ đó, bạn có thể nhấp để **chỉnh sửa hoặc xóa** mã.

![Mã giảm giá trong danh sách với tùy chọn chỉnh sửa và xóa](/img/config/discount-codes-list.png)

### 

### Sử dụng tham số URL:

Nếu bạn muốn tùy chỉnh bảng giá hoặc xây dựng trang mã giảm giá đẹp mắt cho website và muốn tự động áp dụng mã giảm giá vào form thanh toán, bạn có thể thực hiện điều này thông qua tham số URL.

Đầu tiên, bạn cần lấy liên kết chia sẻ cho gói dịch vụ của mình. Để làm điều này, vào **Ultimate Multisite > Products** và chọn một gói.

Nhấp vào nút **Click to Copy Shareable Link**. Thao tác này sẽ cung cấp cho bạn liên kết chia sẻ đến gói dịch vụ cụ thể này. Trong trường hợp của chúng ta, liên kết chia sẻ nhận được là [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Trang sản phẩm với nút liên kết chia sẻ](/img/config/products-list.png)

Để áp dụng mã giảm giá cho gói dịch vụ cụ thể này, chỉ cần thêm tham số **?discount_code=XXX** vào URL. Trong đó **XXX** là mã giảm giá.

Trong ví dụ này, chúng ta sẽ áp dụng mã giảm giá **50OFF** cho sản phẩm cụ thể này.

URL cho gói dịch vụ này với mã giảm giá 50OFF được áp dụng sẽ có dạng: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

### 
