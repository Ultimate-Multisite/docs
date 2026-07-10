---
title: Thiết lập PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Thiết lập PayPal Gateway (v2) {#setting-up-the-paypal-gateway-v2}

_**LƯU Ý QUAN TRỌNG: Bài viết này đề cập đến Ultimate Multisite phiên bản 2.x.**_

Bạn có thể kích hoạt tối đa bốn phương thức thanh toán trên trang cài đặt thanh toán của chúng tôi: Stripe, Stripe Checkout, PayPal và Thủ công. Trong bài viết này, chúng ta sẽ xem cách tích hợp với **PayPal**.

Cũng như Stripe, PayPal được sử dụng rộng rãi cho thanh toán trực tuyến, đặc biệt là trên các website WordPress. Bài viết này sẽ hướng dẫn bạn cách sử dụng PayPal làm phương thức thanh toán có sẵn trên mạng của bạn.

Lưu ý rằng bạn cần có **PayPal Business account** để lấy thông tin xác thực API cần thiết cho tích hợp này.

## Bật PayPal trên mạng của bạn {#enabling-paypal-on-your-network}

Để bật PayPal làm phương thức thanh toán có sẵn trên mạng của bạn, hãy đi tới tab **Ultimate Multisite > Settings > Payments** và đánh dấu vào ô bên cạnh PayPal.

![Bật PayPal trong các cổng thanh toán đang hoạt động](/img/config/settings-payment-gateways.png)

## Sử dụng trình hướng dẫn thiết lập có hướng dẫn {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 thêm trình hướng dẫn thiết lập PayPal có hướng dẫn vào cài đặt cổng thanh toán. Sau khi bạn bật PayPal, hãy sử dụng trình hướng dẫn trên **Ultimate Multisite > Settings > Payments** để chọn cách bạn muốn kết nối cổng và xác nhận những thông tin xác thực nào vẫn cần trước khi lưu.

Trình hướng dẫn hỗ trợ hai lộ trình thiết lập:

* **Nhập thông tin xác thực thủ công**: Sử dụng lộ trình này khi bạn đã có thông tin xác thực PayPal API, khi thiết lập OAuth không khả dụng cho Account của bạn, hoặc khi bạn muốn tự sao chép thông tin xác thực từ PayPal. Nhập API Username, API Password và API Signature vào các trường PayPal, sau đó lưu cài đặt thanh toán.
* **Cổng kết nối OAuth**: Chỉ sử dụng lộ trình này khi tùy chọn OAuth khả dụng và được bật cho bản cài đặt của bạn. Trình hướng dẫn hiển thị luồng OAuth phía sau một cờ tính năng, vì vậy các mạng không có cờ này tiếp tục sử dụng các trường nhập thông tin xác thực thủ công.

Nếu bạn không thấy tùy chọn OAuth trong trình hướng dẫn, hãy hoàn tất luồng nhập thông tin xác thực thủ công bên dưới. Cổng hoạt động với cùng thông tin xác thực PayPal Business API như các bản phát hành Ultimate Multisite 2.x trước đó.

## Lấy thông tin xác thực PayPal API {#getting-the-paypal-api-credentials}

Khi PayPal được bật làm cổng thanh toán, bạn sẽ cần điền các trường cho PayPal API **Username** , PayPal API **Password** và PayPal API **Signature**.

Bạn có thể lấy thông tin này bằng cách đăng nhập vào Account PayPal [Live](https://www.paypal.com/home) hoặc [Sandbox](https://www.sandbox.paypal.com/home) của bạn.

(Hãy nhớ rằng bạn có thể sử dụng **chế độ sandbox** để kiểm tra thanh toán và xem cổng đã được thiết lập đúng chưa. Chỉ cần bật phần tương ứng.)

![Các trường thông tin xác thực PayPal API và nút bật/tắt chế độ sandbox](/img/config/settings-payment-gateways.png)

Để yêu cầu thông tin xác thực API Signature hoặc Certificate cho Account PayPal của bạn:

  1. Đi tới [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) của bạn.

  2. Trong phần **API access**, nhấp vào **Update**.
![PayPal Account Settings với phần API access](/img/config/settings-payment-gateways.png)

  3. Trong **NVP/SOAP API integration (Classic)** , nhấp vào **Manage API credentials**.
![Tích hợp PayPal NVP/SOAP API Manage API credentials](/img/config/settings-payment-gateways.png)

     * Nếu bạn đã tạo API Signature hoặc Certificate, bạn sẽ được chuyển hướng đến một trang nơi bạn có thể tìm thấy thông tin xác thực của mình.

     * _**Lưu ý:** Nếu bạn được nhắc xác minh Account PayPal của mình, hãy làm theo hướng dẫn trên màn hình._

  4. Chọn _một_ trong các tùy chọn sau, sau đó nhấp vào **Agree and Submit**.

     * **Request API Signature** – Chọn để xác thực bằng API Signature.

     * **Request API Certificate** – Chọn để xác thực bằng API Certificate.

  5. PayPal tạo thông tin xác thực API của bạn như sau:
![Thông tin xác thực API do PayPal tạo](/img/config/settings-payment-gateways.png)

     * **Thông tin xác thực API Signature** bao gồm API Username, API Password và Signature, không hết hạn. Các giá trị này được ẩn theo mặc định để tăng cường bảo mật. Nhấp vào **Show/Hide** để bật và tắt hiển thị chúng. Khi hoàn tất, nhấp vào **Done**.

     * **Thông tin xác thực API Certificate** bao gồm API Username, API Password và Certificate, tự động hết hạn sau ba năm. Nhấp vào **Download Certificate** để lưu API Certificate vào máy tính của bạn.

Vậy là xong, tích hợp thanh toán PayPal của bạn đã hoàn tất!

Nếu bạn có bất kỳ câu hỏi nào liên quan đến cài đặt PayPal, bạn có thể tham khảo [Help Center](https://www.paypal.com/br/smarthelp/home) của PayPal.
