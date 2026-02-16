---
title: Thiết Lập Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Thiết lập cổng thanh toán Stripe (v2)

_**LƯU Ý QUAN TRỌNG: Bài viết này áp dụng cho Ultimate Multisite phiên bản 2.x.**_

Bạn có thể kích hoạt tối đa bốn phương thức thanh toán trên trang cài đặt thanh toán: Stripe, Stripe Checkout, PayPal và Thủ công. Trong bài viết này, chúng ta sẽ tìm hiểu cách tích hợp với **Stripe**.

## Bật Stripe

Để bật Stripe làm cổng thanh toán khả dụng trên mạng lưới của bạn, hãy vào **Ultimate Multisite > Settings > Payments** và bật công tắc bên cạnh **Stripe** hoặc **Stripe Checkout** trong phần Active Payment Gateways.

![Bật Stripe trong danh sách cổng thanh toán](/img/config/settings-payment-gateways.png)

### Stripe và Stripe Checkout:

**Stripe:** Phương thức này sẽ hiển thị ô nhập số thẻ tín dụng ngay trong quá trình thanh toán.

![Ô nhập thẻ tín dụng Stripe hiển thị trực tiếp khi thanh toán](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Phương thức này sẽ chuyển hướng khách hàng đến trang Stripe Checkout trong quá trình thanh toán.

![Trang chuyển hướng Stripe Checkout khi thanh toán](/img/config/settings-payment-gateways.png)

Lấy API key của Stripe

Sau khi bật Stripe làm cổng thanh toán, bạn cần điền các trường **Stripe Publishable Key** và **Stripe Secret Key**. Bạn có thể lấy thông tin này bằng cách đăng nhập vào tài khoản Stripe của mình.

_**Lưu ý:** bạn có thể bật **Sandbox mode** để kiểm tra xem phương thức thanh toán có hoạt động không._

![Các trường API key của Stripe và công tắc sandbox mode](/img/config/settings-payment-gateways.png)

Trên bảng điều khiển Stripe, nhấp vào **Developers** ở góc trên bên phải, sau đó chọn **API Keys** trong menu bên trái.

![Phần Developers trên bảng điều khiển Stripe với API Keys](/img/config/settings-payment-gateways.png)

Bạn có thể sử dụng **Test Data** (để kiểm tra xem tích hợp có hoạt động trên trang web chính thức của bạn không) hoặc không. Để thay đổi, hãy bật/tắt công tắc **Viewing test data**.

![Công tắc Viewing test data của Stripe](/img/config/settings-payment-gateways.png)

Sao chép giá trị từ **Publishable key** và **Secret key** trong cột **Token** rồi dán vào các trường Stripe Gateway của Ultimate Multisite. Sau đó nhấp **Save Changes**.

![Giá trị publishable key và secret key của Stripe](/img/config/settings-payment-gateways.png)

![Dán các key Stripe vào cài đặt Ultimate Multisite](/img/config/settings-payment-gateways.png)

## Thiết lập Stripe Webhook

Stripe gửi các sự kiện webhook để thông báo cho Ultimate Multisite mỗi khi có sự kiện xảy ra trên **tài khoản Stripe của bạn**.

Nhấp vào **Developers** rồi chọn mục **Webhooks** trong menu bên trái. Sau đó ở phía bên phải, nhấp **Add endpoint**.

![Trang Webhooks của Stripe với nút Add endpoint](/img/config/settings-payment-gateways.png)

Bạn sẽ cần một **Endpoint URL**. Ultimate Multisite tự động tạo endpoint URL mà bạn có thể tìm thấy ngay bên dưới trường **Webhook Listener URL** trong phần **Ultimate Multisite Stripe Gateway**.

![Trường Webhook Listener URL trong cài đặt cổng thanh toán Stripe](/img/config/settings-payment-gateways.png)

**Sao chép** endpoint URL và **dán** vào trường **Endpoint URL** trên Stripe.

![Dán endpoint URL khi thiết lập webhook Stripe](/img/config/settings-payment-gateways.png)

Tiếp theo là chọn **Event**. Trong tùy chọn này, bạn chỉ cần đánh dấu vào ô **Select all events** và nhấp **Add events**. Sau đó nhấp **Add Endpoint** để lưu thay đổi.

![Chọn tất cả sự kiện và thêm endpoint Stripe](/img/config/settings-payment-gateways.png)

Vậy là xong, việc tích hợp thanh toán Stripe của bạn đã hoàn tất!
