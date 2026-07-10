---
title: Nkwado Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Ndem Nkwado Stripe Gateway (v2) {#setting-up-the-stripe-gateway-v2}

_**LƯU Ý QUAN TRỌNG: Bài viết này đề cập đến Ultimate Multisite phiên bản 2.x.**_

Bạn có thể bật tới bốn phương thức thanh toán trên trang cài đặt thanh toán của chúng tôi: Stripe, Stripe Checkout, PayPal và Thủ công. Trong bài viết này, chúng ta sẽ xem cách tích hợp với **Stripe**.

## Bật Stripe {#enabling-stripe}

Để bật Stripe làm cổng thanh toán có sẵn trên mạng của bạn, hãy vào **Ultimate Multisite > Settings > Payments** và đánh dấu vào nút chuyển đổi bên cạnh **Stripe** hoặc **Stripe Checkout** trong phần Active Payment Gateways.

![Bật Stripe trong các cổng thanh toán đang hoạt động](/img/config/settings-payment-gateways.png)

### Stripe so với Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Phương thức này sẽ hiển thị một chỗ để bạn nhập số thẻ tín dụng trong quá trình thanh toán.

![Trường thẻ tín dụng trực tuyến của Stripe trong quá trình thanh toán](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Phương thức này sẽ chuyển hướng khách hàng đến trang Stripe Checkout trong quá trình thanh toán.

![Trang chuyển hướng Stripe Checkout trong quá trình thanh toán](/img/config/settings-payment-gateways.png)

Lấy các khóa API Stripe của bạn

Sau khi đã bật Stripe làm cổng thanh toán, bạn sẽ cần điền vào các ô cho **Stripe Publishable Key** và **Stripe Secret Key**. Bạn có thể lấy chúng bằng cách đăng nhập vào tài khoản Stripe của mình.

_**Lưu ý:** bạn có thể bật **Sandbox mode** để kiểm tra xem phương thức thanh toán có hoạt động không._

![Các trường khóa API Stripe và nút chuyển đổi chế độ sandbox](/img/config/settings-payment-gateways.png)

Trên bảng điều khiển Stripe của bạn, hãy nhấp vào **Developers** ở góc trên bên phải, sau đó là **API Keys** trong menu bên trái.

![Phần Developers trên bảng điều khiển Stripe với API Keys](/img/config/settings-payment-gateways.png)

Ka ị chọrọ ịgbanwe, ị ga rụma toggle **Viewing test data**.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Kopi giá trị n'ụ **Publishable key** na **Secret key**, na ndụ column **Token**, sonra jikọrọ (paste) ọkụkọ ahụ n'ịru Stripe Gateway fields nke Ultimate Multisite. Ka ọkụkọ ahụ, jikọrọ (click) ịgbanwe **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Ịgbanwe Stripe Webhook {#setting-up-stripe-webhook}

Stripe ga nwere webhook events nke na-akwụsị Ultimate Multisite ọ bụrụ na ebe ihe ọ bụla na **account stripe** ha na-eme.

Jikọrọ **Developers** a, sonra chọrọ item **Webhooks** na menu abụọ (left menu). Ka ọkụkọ ahụ, jikọrọ **Add endpoint** tupu (on the right hand side) *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Ị ga-agba **Endpoint URL** *.* Ultimate Multisite ga-agbanwe Endpoint URL ahụ ọkụkọ ahụ, na ị ga-eme ka ị chọrọ ọkụkọ ahụ a na-akpọ n'ịru field **Webhook Listener URL** na section **Ultimate Multisite Stripe Gateway**._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

Kopi endpoint URL ahụ, sonra jikọrọ (paste) ọkụkọ ahụ n'ịru field **Endpoint URL** na Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Tupu, ị ga chọrọ **Event** *.* Ọnụ option a, ị jikọrọ (check) box **Select all events** ma ọ bụrụ na ị chọrọ, sonra jikọrọ (click) **Add events**. Tupu ahụ, jikọrọ **Add Endpoint** tupu (to save the changes).

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Ebe ya, ịgbanwe na Stripe payment integration-nne gị bụrụ!
