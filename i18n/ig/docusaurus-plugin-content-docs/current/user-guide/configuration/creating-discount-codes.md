---
title: Nkwado Kodide
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Tạo Mã Giảm Giá (v2)

_**LƯU Ý QUAN TRỌNG: Bài viết này đề cập đến Ultimate Multisite phiên bản 2.x.**_

Với Ultimate Multisite, bạn có thể tạo mã giảm giá để tặng khách hàng của mình các khoản chiết khấu cho gói đăng ký của họ. Và việc tạo chúng rất dễ!

## Tạo và Chỉnh Sửa Mã Giảm Giá {#creating-and-editing-discount-codes}

Để tạo hoặc chỉnh sửa một mã giảm giá, hãy vào **Ultimate Multisite > Discount Codes**.

![Danh sách mã giảm giá — trạng thái trống trước khi có bất kỳ mã nào tồn tại](/img/config/discount-codes-empty.png)

Ở đó bạn sẽ thấy danh sách các mã giảm giá mà bạn đã tạo.

Bạn có thể nhấp vào **Add Discount Code** (Thêm Mã Giảm Giá) để tạo một coupon mới hoặc bạn có thể chỉnh sửa những cái bạn đã có bằng cách di chuột qua chúng và nhấp vào **Edit** (Chỉnh Sửa).

![Danh sách mã giảm giá với các hành động di chuột hiển thị liên kết Edit và Delete](/img/config/discount-codes-list-hover.png)

![Nút Thêm Mã Giảm Giá trên thanh tiêu đề trang](/img/config/discount-codes-add-button.png)

Bạn sẽ được chuyển hướng đến trang nơi bạn tạo hoặc chỉnh sửa mã coupon của mình. Trong ví dụ này, chúng ta sẽ tạo một cái mới.

![Trang chỉnh sửa mã giảm giá với tất cả các phần hiển thị](/img/config/discount-code-edit.png)

Hãy cùng xem những cài đặt có sẵn ở đây:

**Enter Discount Code:** Đây chỉ là tên của mã giảm giá của bạn thôi. Đây không phải là mã mà khách hàng của bạn sẽ cần dùng trên biểu mẫu thanh toán (checkout form).

**Description:** Ở đây, bạn có thể mô tả ngắn gọn coupon này dùng để làm gì.

![Các trường tên và mô tả mã giảm giá ở đầu trang chỉnh sửa](/img/config/discount-code-description.png)

Bạn cũng có thể xem mã giảm giá là đang hoạt động (active) hay không hoạt động (inactive):

![Trạng thái hoạt động của mã giảm giá](/img/config/discount-code-active.png)

**Coupon code:** Đây là nơi bạn định nghĩa mã mà khách hàng sẽ cần nhập trong quá trình thanh toán.

![Coupon code field where customers enter the code at checkout](/img/config/discount-code-coupon-field.png)

**Kupon:** Ahere, ị chụrụ ọ bụ **percentage** ma ọ bụ **ebụta akụkọ** (fixed amount) na-akọwa maka kodin kuwe discount.

![Discount amount setting with percentage or fixed-amount dropdown](/img/config/discount-code-amount.png)

**Apply to renewals:** Ma ọ bụrụ na ị chọrọ a option ahụ, coupon code a ga-e apply karị m ga-e **ikpe anyị (first payment)** karị m. Ehi ọkụ anyị dị n'ime ikpe anyị ndị ọzọ ga-e mere ma ọ bụ la dị discount. Ma ọ bụrụ na ị chọrọ option ahụ, coupon code a ga-e gbaa maka iji ikpe anyị ndị ọzọ.

**Discount setup fee:** Ma ọ bụrụ na ị chọrọ a option ahụ, coupon code a **echeghị anyị discount maka ebe nkwupụ (setup fee)** nke order ahụ. Ma ọ bụrụ na ị chọrọ option ahụ, ị ga-e kọwa discount (percentage ma ọ bụ ebụta akụkọ) nke coupon code a ga-e apply maka ebe nkwupụ nke iji anyị.

![Apply to renewals and setup fee discount toggle options](/img/config/discount-code-renewals.png)

**Active:** Jiji dị ka ị chọrọ a coupon code ahụ karị m ma ọ bụ ga-e mere (deactivate).

![Active toggle to manually enable or disable the discount code](/img/config/discount-code-active.png)

N'ime **Advanced Options**, anyị na-enwe ike iche nche gị ndị a:

![Discount code advanced options](/img/config/discount-code-advanced.png)

**Limit uses:**

  * **Uses (Iji):** Ahere, ị ga-e chụrụ ọ bụ kaçị kodin ahụ na-agbanwe.

  * **Max uses (Maka iji):** A ga-e nche kaçị a ndị mmadụ ga-e mere maka kodin discount ahụ. Ọ bụrụ na ị kọwa 10 hie ahere, coupon ahụ ga-e mere kaçị 10 gganwa. Ma ọ bụrụ na ị chọrọ kaçị ahụ, coupon code ahụ ga-e mere karị m.

![Limit uses setting with current uses count and max uses field](/img/config/discount-code-limit-uses.png)

**Tarihin Bắt đầu và Kết thúc:** Ở đây bạn sẽ có lựa chọn thêm ngày bắt đầu và/hoặc ngày hết hạn cho mã giảm giá của mình.

![Các trường ngày bắt đầu và kết thúc để lên lịch mã giảm giá](/img/config/discount-code-dates.png)

**Giới hạn sản phẩm:** Nếu bạn bật **Select products**, tất cả các sản phẩm của bạn sẽ được hiển thị. Bạn sẽ có tùy chọn tự chọn (bằng cách bật hoặc tắt) sản phẩm nào có thể chấp nhận mã giảm giá này. Các sản phẩm bị tắt ở đây sẽ không thay đổi nếu khách hàng của bạn cố gắng sử dụng mã giảm giá này cho chúng.

![Phần Giới hạn sản phẩm với các công tắc chuyển đổi theo từng sản phẩm](/img/config/discount-code-limit-products.png)

Sau khi thiết lập tất cả các tùy chọn này, hãy nhấp vào **Save Discount Code** để lưu mã giảm giá của bạn và hoàn tất!

![Nút Lưu Mã Giảm Giá ở cuối trang chỉnh sửa](/img/config/discount-code-save.png)

Mã giảm giá bây giờ đã nằm trong danh sách của bạn và từ đó, bạn có thể nhấp vào để **chỉnh sửa hoặc xóa** nó.

![Hàng mã giảm giá trong danh sách với các hành động di chuột Chỉnh sửa và Xóa](/img/config/discount-codes-list-hover.png)

###

### Sử dụng Tham số URL: {#using-url-parameters}

Nếu bạn muốn tùy chỉnh bảng giá của mình hoặc xây dựng một trang mã giảm giá đẹp cho website của bạn và muốn áp dụng mã giảm giá vào biểu mẫu thanh toán của bạn một cách tự động, bạn có thể làm điều này thông qua các tham số URL.

Đầu tiên, bạn cần lấy liên kết chia sẻ được cho gói của mình. Để làm điều này, hãy vào **Ultimate Multisite > Products** và chọn một gói.

Nhấp vào nút **Click to Copy Shareable Link**. Điều này sẽ cung cấp cho bạn liên kết chia sẻ cho gói cụ thể này. Trong trường hợp của chúng tôi, liên kết chia sẻ được cung cấp là [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Trang sản phẩm với nút liên kết chia sẻ](/img/config/products-list.png)

Ọ bụrụ na ị chọrọ apply mã discount-nwa ahụ n'ụmọdụ ọkụkọ a, ka ị chọrọ jikọ parameter **?discount_code=XXX** n'URL. nde **XXX** bụ mã coupon-nwa ahụ.

N'ụzọ anyị na-eghị, anyị ga-anọ mã coupon-nwa **50OFF** n'ụmọdụ ọkụkọ a.

URL-nwa ahụ tupu ụmọdụ ọkụkọ a na-anọ mã 50OFF discount code ga-gbanwe dị: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
