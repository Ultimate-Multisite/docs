---
title: Thiết Lập PayPal
sidebar_position: 10
_i18n_hash: cb5153acc4c60b39af9d73311a5b3b44
---
# Thiết Lập Cổng Thanh Toán PayPal (v2)

_**LƯU Ý QUAN TRỌNG: Bài viết này áp dụng cho Ultimate Multisite phiên bản 2.x.**_

Bạn có thể kích hoạt tối đa bốn phương thức thanh toán trên trang cài đặt thanh toán: Stripe, Stripe Checkout, PayPal và Manual. Trong bài viết này, chúng ta sẽ tìm hiểu cách tích hợp với **PayPal**.

Cũng giống như Stripe, PayPal được sử dụng rộng rãi cho thanh toán trực tuyến, đặc biệt trên các website WordPress. Bài viết này sẽ hướng dẫn bạn cách sử dụng PayPal làm phương thức thanh toán khả dụng trên mạng lưới của bạn.

Lưu ý rằng bạn cần có **tài khoản PayPal Business** để lấy được thông tin xác thực API cần thiết cho việc tích hợp này.

## Kích hoạt PayPal trên mạng lưới của bạn

Để kích hoạt PayPal làm phương thức thanh toán khả dụng trên mạng lưới của bạn, hãy vào **Ultimate Multisite > Settings > Payments** và đánh dấu vào ô bên cạnh PayPal.

![Kích hoạt PayPal trong các cổng thanh toán](/img/config/settings-payment-gateways.png)

## Lấy thông tin xác thực API của PayPal

Sau khi PayPal được kích hoạt làm cổng thanh toán, bạn sẽ cần điền các trường PayPal API **Username**, PayPal API **Password** và PayPal API **Signature**.

Bạn có thể lấy thông tin này bằng cách đăng nhập vào tài khoản PayPal [Live](https://www.paypal.com/home) hoặc [Sandbox](https://www.sandbox.paypal.com/home) của bạn.

(Hãy nhớ rằng bạn có thể sử dụng **chế độ sandbox** để thử nghiệm thanh toán và kiểm tra xem cổng thanh toán đã được thiết lập đúng chưa. Chỉ cần bật phần tương ứng.)

![Các trường thông tin xác thực API PayPal và nút bật/tắt chế độ sandbox](/img/config/settings-payment-gateways.png)

Để yêu cầu thông tin xác thực API Signature hoặc Certificate cho tài khoản PayPal của bạn:

  1. Vào [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) của bạn.

  2. Trong phần **API access**, nhấp vào **Update**.  
![Trang Account Settings của PayPal với phần API access](/img/config/settings-payment-gateways.png)

  3. Dưới mục **NVP/SOAP API integration (Classic)**, nhấp vào **Manage API credentials**.  
![Phần NVP/SOAP API integration của PayPal - Manage API credentials](/img/config/settings-payment-gateways.png)

     * Nếu bạn đã tạo API Signature hoặc Certificate trước đó, bạn sẽ được chuyển đến trang có thể tìm thấy thông tin xác thực của mình.

     * _**Lưu ý:** Nếu bạn được yêu cầu xác minh tài khoản PayPal, hãy làm theo hướng dẫn trên màn hình._

  4. Chọn _một_ trong các tùy chọn sau, sau đó nhấp vào **Agree and Submit**.

     * **Request API Signature** – Chọn để xác thực bằng API Signature.

     * **Request API Certificate** – Chọn để xác thực bằng API Certificate.

  5. PayPal sẽ tạo thông tin xác thực API của bạn như sau:  
![Thông tin xác thực API được PayPal tạo ra](/img/config/settings-payment-gateways.png)

     * **Thông tin xác thực API Signature** bao gồm API Username, API Password và Signature, không có thời hạn hết hạn. Các giá trị này được ẩn theo mặc định để tăng cường bảo mật. Nhấp vào **Show/Hide** để hiện hoặc ẩn chúng. Khi hoàn tất, nhấp vào **Done**.

     * **Thông tin xác thực API Certificate** bao gồm API Username, API Password và Certificate, sẽ tự động hết hạn sau ba năm. Nhấp vào **Download Certificate** để lưu API Certificate về máy tính của bạn.

Vậy là xong, việc tích hợp thanh toán PayPal của bạn đã hoàn tất!

Nếu bạn có bất kỳ câu hỏi nào về cài đặt PayPal, bạn có thể tham khảo [Trung tâm Trợ giúp](https://www.paypal.com/br/smarthelp/home) của PayPal.
