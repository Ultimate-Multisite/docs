---
title: Nkwado PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Thiết Lập Cổng Thanh Toán PayPal (v2)

_**LƯU Ý QUAN TRỌNG: Bài viết này đề cập đến Ultimate Multisite phiên bản 2.x.**_

Bạn có thể kích hoạt tới bốn phương thức thanh toán trên trang cài đặt thanh toán của chúng tôi: Stripe, Stripe Checkout, PayPal và Thủ công (Manual). Trong bài viết này, chúng ta sẽ xem cách tích hợp với **PayPal**.

Giống như Stripe, PayPal được sử dụng rộng rãi cho các khoản thanh toán trực tuyến, đặc biệt là trên các trang web WordPress. Bài viết này sẽ hướng dẫn bạn cách sử dụng PayPal như một phương thức thanh toán có sẵn trong mạng lưới của bạn.

Lưu ý rằng bạn cần có một **tài khoản Kinh doanh PayPal (PayPal Business account)** để lấy thông tin API cần thiết cho việc tích hợp này.

## Kích hoạt PayPal trên mạng lưới của bạn {#enabling-paypal-on-your-network}

Để bật PayPal làm phương thức thanh toán có sẵn trên mạng lưới của bạn, hãy vào **Ultimate Multisite > Settings > Payments** và đánh dấu vào ô bên cạnh PayPal.

![Kích hoạt PayPal trong các cổng thanh toán đang hoạt động](/img/config/settings-payment-gateways.png)

## Sử dụng trình hướng dẫn thiết lập có hướng dẫn (guided setup wizard) {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 bổ sung một trình hướng dẫn thiết lập PayPal có hướng dẫn vào cài đặt cổng thanh toán. Sau khi bạn bật PayPal, hãy sử dụng trình hướng dẫn trên **Ultimate Multisite > Settings > Payments** để chọn cách bạn muốn kết nối với cổng và xác nhận những thông tin đăng nhập nào vẫn cần thiết trước khi lưu lại.

Trình hướng dẫn này hỗ trợ hai đường thiết lập:

* **Nhập thông tin xác thực thủ công**: Dùng đường dẫn này khi bạn đã có thông tin API của PayPal rồi, hoặc khi không có tùy chọn OAuth cho tài khoản của bạn, hoặc khi bạn muốn tự sao chép thông tin từ PayPal. Hãy nhập Tên người dùng API (API Username), Mật khẩu API (API Password) và Chữ ký API (API Signature) vào các ô của PayPal, sau đó lưu cài đặt thanh toán.
* **Cổng kết nối OAuth**: Chỉ sử dụng đường dẫn này khi tùy chọn OAuth có sẵn và được bật cho bản cài đặt của bạn. Trình hướng dẫn hiển thị luồng OAuth đằng sau một cờ tính năng (feature flag), vì vậy các mạng không có cờ đó sẽ tiếp tục sử dụng các trường nhập thông tin xác thực thủ công.

Nếu bạn không thấy tùy chọn OAuth trong trình hướng dẫn, hãy hoàn tất quy trình nhập thông tin xác thực thủ công bên dưới. Cổng thanh toán này hoạt động với cùng thông tin API Kinh doanh PayPal như các bản phát hành Ultimate Multisite 2.x trước đó.

## Lấy thông tin xác thực API của PayPal {#getting-the-paypal-api-credentials}

Sau khi bạn đã bật PayPal làm cổng thanh toán, bạn sẽ cần điền vào các ô cho **Tên người dùng API** (PayPal API Username), **Mật khẩu API** (PayPal API Password) và **Chữ ký API** (PayPal API Signature).

Bạn có thể lấy thông tin này bằng cách đăng nhập vào tài khoản [Trực tuyến](https://www.paypal.com/home) hoặc [Sandbox](https://www.sandbox.paypal.com/home) của mình.

(Hãy nhớ rằng bạn có thể sử dụng **chế độ sandbox** để kiểm tra các giao dịch và xem cổng thanh toán đã được thiết lập đúng chưa. Chỉ cần bật phần tương ứng.)

![Các trường thông tin xác thực API PayPal và công tắc chế độ sandbox](/img/config/settings-payment-gateways.png)

Để yêu cầu Chữ ký API (API Signature) hoặc thông tin Chứng chỉ (Certificate credentials) cho tài khoản PayPal của bạn:

  1. Truy cập vào [Cài đặt Tài khoản](https://www.paypal.com/businessmanage/account/accountAccess) của bạn.

  2. Trong mục **Truy cập API** (API access), hãy nhấp vào **Cập nhật** (Update).

3. Apụta **NVP/SOAP API integration (Classic)**, klik **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Ka ị bụrụka jụrụ API Signature ma Certificate, ọ ga-arị gbanwa n'ụlọ ọrụ (page) onye maka n'ebe ị chọpụta ihe ndị a.

     * _**Note:** Ka ọ bụrụ na ọ ga-eji gị ịchekwa aka PayPal, ka jiji ma mee ihe ndị dị n'ụlọ ọrụ._

  4. Ndịka ọkụ **ọdịdo** (one) n'ime ndị a, sonrai klik **Agree and Submit**.

     * **Request API Signature** – Chọpụta nke a ka ị chọpụta API Signature authentication.

     * **Request API Certificate** – Chọpụta nke a ka ị chọpụta API Certificate authentication.

  5. PayPal ga-eji ihe ndị a bụ:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** ga-anọchịrị Username API, Password API, na Signature, nke a dịghị gbanwa (does not expire). Ihe ndị a dịghị eji n'ụlọ ọrụ (hidden by default) maka ịnwale ihe a na-agba ọsọ. Klik **Show/Hide** ka ị chọpụta ya ma ka ị chọpụta ya. Mgbe ị chụrụ, klik **Done**.

     * **API Certificate credentials** ga-anọchịrị Username API, Password API, na Certificate, nke a ga-gbanwa (expires) mgbe ọ bụrụ ọ bụ na ọ bụrụ ọtụtụaka ọdịika (three years). Klik **Download Certificate** ka ị chụrụ API Certificate ahụ n'ụlọ ọrụ gị.

Ọ bụ ihe mere, ịntoghe PayPal payment-nwa gị bụrụ!

Ka ọ bụrụ ka ị nwere ajụjụ maka settings PayPal, ị ga-arị ịkọwa [Help Center](https://www.paypal.com/br/smarthelp/home) na PayPal.
