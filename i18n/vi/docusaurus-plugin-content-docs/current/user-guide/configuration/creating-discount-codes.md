---
title: Tạo mã giảm giá
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Tạo mã giảm giá (v2) {#creating-discount-codes-v2}

_**LƯU Ý QUAN TRỌNG: Bài viết này đề cập đến Ultimate Multisite phiên bản 2.x.**_

Với Ultimate Multisite, bạn có thể tạo mã giảm giá để giảm giá cho khách hàng của mình trên các gói đăng ký của họ. Và việc tạo chúng rất dễ dàng!

## Tạo và chỉnh sửa mã giảm giá {#creating-and-editing-discount-codes}

Để tạo hoặc chỉnh sửa mã giảm giá, hãy đi tới **Ultimate Multisite > Discount Codes**.

![Danh sách mã giảm giá — trạng thái trống trước khi có bất kỳ mã nào](/img/config/discount-codes-empty.png)

Tại đó, bạn sẽ có danh sách các mã giảm giá mà bạn đã tạo.

Bạn có thể nhấp vào **Add Discount** **Code** để tạo phiếu giảm giá mới hoặc bạn có thể chỉnh sửa các mã hiện có bằng cách di chuột lên chúng và nhấp **Edit**.

![Danh sách mã giảm giá với các hành động khi di chuột hiển thị liên kết Edit và Delete](/img/config/discount-codes-list-hover.png)

![Nút Add Discount Code trong tiêu đề trang](/img/config/discount-codes-add-button.png)

Bạn sẽ được chuyển hướng đến trang nơi bạn sẽ tạo hoặc chỉnh sửa mã phiếu giảm giá của mình. Trong ví dụ này, chúng ta sẽ tạo một mã mới.

![Trang chỉnh sửa mã giảm giá với tất cả các phần hiển thị](/img/config/discount-code-edit.png)

Hãy cùng xem các cài đặt có sẵn tại đây:

**Enter Discount Code:** Đây chỉ là tên của mã giảm giá của bạn. Đây không phải là mã mà khách hàng của bạn sẽ cần dùng trên biểu mẫu thanh toán.

**Description:** Tại đây, bạn có thể mô tả ngắn gọn phiếu giảm giá này dùng cho mục đích gì.

![Các trường tên và mô tả mã giảm giá ở đầu trang chỉnh sửa](/img/config/discount-code-description.png)

Bạn cũng có thể xem mã giảm giá ở trạng thái đang hoạt động hoặc không hoạt động:

![Trạng thái hoạt động của mã giảm giá](/img/config/discount-code-active.png)

**Coupon code:** Đây là nơi bạn xác định mã mà khách hàng của bạn sẽ cần nhập trong quá trình thanh toán.

![Trường mã phiếu giảm giá nơi khách hàng nhập mã khi thanh toán](/img/config/discount-code-coupon-field.png)

**Discount:** Tại đây, bạn có thể đặt mã giảm giá của mình theo **phần trăm** hoặc **số tiền cố định**.

![Cài đặt số tiền giảm giá với menu thả xuống phần trăm hoặc số tiền cố định](/img/config/discount-code-amount.png)

**Apply to renewals:** Nếu tùy chọn này được tắt, mã giảm giá này sẽ chỉ được áp dụng cho **khoản thanh toán đầu tiên**. Tất cả các khoản thanh toán khác sẽ không có giảm giá. Nếu tùy chọn này được bật, mã giảm giá sẽ có hiệu lực cho tất cả các khoản thanh toán trong tương lai.

**Setup fee discount:** Nếu tùy chọn này được tắt, mã phiếu giảm giá sẽ **không giảm giá cho phí thiết lập** của đơn hàng. Nếu tùy chọn này được bật, bạn có thể đặt mức giảm giá (phần trăm hoặc số tiền cố định) mà mã phiếu giảm giá này sẽ áp dụng cho phí thiết lập của các gói của bạn.

![Các tùy chọn bật/tắt áp dụng cho gia hạn và giảm giá phí thiết lập](/img/config/discount-code-renewals.png)

**Active:** Kích hoạt hoặc vô hiệu hóa mã phiếu giảm giá này theo cách thủ công.

![Nút bật/tắt Active để bật hoặc tắt mã giảm giá theo cách thủ công](/img/config/discount-code-active.png)

Trong **Advanced Options**, chúng ta có các cài đặt sau:

![Tùy chọn nâng cao của mã giảm giá](/img/config/discount-code-advanced.png)

**Limit uses:**

  * **Uses:** Tại đây, bạn có thể xem mã giảm giá đã được sử dụng bao nhiêu lần.

  * **Max uses:** Cài đặt này sẽ giới hạn số lần người dùng có thể sử dụng mã giảm giá này. Ví dụ, nếu bạn nhập 10 tại đây, phiếu giảm giá chỉ có thể được sử dụng 10 lần. Sau giới hạn này, mã phiếu giảm giá không thể được sử dụng nữa.

![Cài đặt giới hạn lượt sử dụng với số lượt sử dụng hiện tại và trường số lượt sử dụng tối đa](/img/config/discount-code-limit-uses.png)

**Start & expiration dates:** Tại đây, bạn sẽ có tùy chọn thêm ngày bắt đầu và/hoặc ngày hết hạn cho phiếu giảm giá của mình.

![Các trường ngày bắt đầu và ngày hết hạn để lên lịch cho mã giảm giá](/img/config/discount-code-dates.png)

**Limit products:** Nếu bạn bật **Select products**, tất cả sản phẩm của bạn sẽ được hiển thị cho bạn. Bạn sẽ có tùy chọn chọn thủ công (bằng cách bật hoặc tắt) sản phẩm nào có thể chấp nhận mã phiếu giảm giá này. Các sản phẩm bị tắt tại đây sẽ không hiển thị bất kỳ thay đổi nào nếu khách hàng của bạn cố gắng sử dụng mã phiếu giảm giá này cho chúng.

![Phần giới hạn sản phẩm với các công tắc bật/tắt theo từng sản phẩm](/img/config/discount-code-limit-products.png)

Sau khi thiết lập tất cả các tùy chọn này, hãy nhấp vào **Save Discount Code** để lưu phiếu giảm giá của bạn và thế là xong!

![Nút Save Discount Code ở cuối trang chỉnh sửa](/img/config/discount-code-save.png)

Phiếu giảm giá hiện đã có trong danh sách của bạn và từ đó, bạn có thể nhấp để **chỉnh sửa hoặc xóa** nó.

![Hàng mã giảm giá trong danh sách với các hành động Edit và Delete khi di chuột](/img/config/discount-codes-list-hover.png)

###

### Sử dụng tham số URL: {#using-url-parameters}

Nếu bạn muốn tùy chỉnh bảng giá hoặc xây dựng một trang mã phiếu giảm giá đẹp cho website của mình và muốn tự động áp dụng mã giảm giá vào biểu mẫu thanh toán, bạn có thể thực hiện việc này thông qua tham số URL.

Trước tiên, bạn cần lấy liên kết có thể chia sẻ cho gói của mình. Để làm điều này, hãy đi tới **Ultimate Multisite > Products** và chọn một gói.

Nhấp vào nút **Click to Copy Shareable Link**. Nút này sẽ cung cấp cho bạn liên kết có thể chia sẻ tới gói cụ thể này. Trong trường hợp của chúng tôi, liên kết có thể chia sẻ được cung cấp là [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Trang sản phẩm với nút liên kết có thể chia sẻ](/img/config/products-list.png)

Để áp dụng mã giảm giá của bạn cho gói cụ thể này, chỉ cần thêm tham số **?discount_code=XXX** vào URL. Trong đó **XXX** là mã phiếu giảm giá.

Trong ví dụ của chúng tôi ở đây, chúng ta sẽ áp dụng mã phiếu giảm giá **50OFF** cho sản phẩm cụ thể này.

URL cho gói cụ thể này và với mã giảm giá 50OFF được áp dụng sẽ có dạng: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
