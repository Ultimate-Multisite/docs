---
title: Webhooks
sidebar_position: 15
_i18n_hash: b4ccc66ecddbe88bc85f562e32e5dca8
---
# Giới thiệu về Webhooks (v2)

_**CHÚ Ý: Tính năng hoặc bài viết này dành cho người dùng nâng cao.**_

**Webhook** là cách để một ứng dụng hoặc phần mềm như Ultimate Multisite cung cấp thông tin theo thời gian thực cho các ứng dụng khác. Webhook gửi dữ liệu hoặc payload đến các ứng dụng khác ngay khi sự kiện xảy ra, nghĩa là bạn **nhận được dữ liệu ngay lập tức.**

Điều này rất hữu ích khi bạn cần tích hợp hoặc truyền dữ liệu nhất định từ Ultimate Multisite sang một CRM hoặc hệ thống khác mỗi khi có sự kiện được kích hoạt. Ví dụ, bạn cần gửi tên và địa chỉ email của người dùng đến danh sách gửi thư mỗi khi có tài khoản người dùng mới được tạo.

## Cách tạo webhook

Để tạo webhook, hãy vào trang quản trị mạng của bạn. Nhấp vào **Ultimate Multisite > Webhooks > Add New Webhook.**

![Trang danh sách Webhooks với nút Add New Webhook](/img/admin/webhooks-list.png)

Khi tạo webhook mới, bạn sẽ được yêu cầu cung cấp thông tin như **Name, URL,** và **Event**. Bạn có thể đặt tên bất kỳ cho webhook của mình. Các trường quan trọng nhất là URL và Event.

![Form tạo webhook mới với các trường Name, URL, và Event](/img/admin/webhooks-list.png)

URL là **endpoint hay điểm đến** mà Ultimate Multisite sẽ gửi **payload hoặc dữ liệu** đến. Đây là ứng dụng sẽ nhận dữ liệu.

Zapier là giải pháp phổ biến nhất mà người dùng sử dụng để tích hợp với ứng dụng bên thứ ba dễ dàng hơn. Nếu không có nền tảng như Zapier, bạn sẽ cần tự tạo một hàm tùy chỉnh để bắt và xử lý dữ liệu. Xem bài viết này về **cách sử dụng webhook của Ultimate Multisite với Zapier.**

Trong bài viết này, chúng ta sẽ tìm hiểu khái niệm cơ bản về cách webhook hoạt động và các sự kiện có sẵn trong Ultimate Multisite. Chúng ta sẽ sử dụng một trang web bên thứ ba là [requestbin.com](https://requestbin.com/). Trang này cho phép chúng ta tạo endpoint và bắt payload mà không cần viết code. _**Lưu ý: trang này chỉ cho chúng ta thấy dữ liệu đã được nhận.**_ Sẽ không có xử lý hay bất kỳ hành động nào được thực hiện với payload.

Truy cập [requestbin.com](https://requestbin.com/) và nhấp vào Create Request Bin.

![Trang RequestBin với nút Create Request Bin](/img/admin/webhooks-list.png)

Sau khi nhấp vào nút đó, trang sẽ yêu cầu bạn đăng nhập nếu đã có tài khoản hoặc đăng ký mới. Nếu bạn đã có tài khoản, trang sẽ đưa bạn thẳng đến dashboard. Trên dashboard, bạn sẽ thấy ngay endpoint hoặc URL mà bạn có thể sử dụng để tạo webhook Ultimate Multisite.

![Dashboard của RequestBin hiển thị URL endpoint](/img/admin/webhooks-list.png)

Hãy sao chép URL và quay lại Ultimate Multisite. Dán endpoint vào trường URL và chọn một sự kiện từ dropdown. Trong ví dụ này, chúng ta sẽ chọn **Payment Received**.

Sự kiện này được kích hoạt mỗi khi người dùng thực hiện thanh toán. Tất cả các sự kiện có sẵn, mô tả và payload của chúng được liệt kê ở cuối trang. Nhấp vào nút **Add New Webhook** để lưu webhook.

![Webhook đã được cấu hình với sự kiện Payment Received](/img/admin/webhooks-list.png)

Bây giờ chúng ta có thể gửi một sự kiện thử nghiệm đến endpoint để xem webhook vừa tạo có hoạt động không. Chúng ta có thể làm điều này bằng cách nhấp vào **Send Test Event** dưới webhook vừa tạo.

![Tùy chọn Send Test Event dưới webhook](/img/admin/webhooks-list.png)

Một cửa sổ xác nhận sẽ hiện lên cho biết việc thử nghiệm đã thành công.

![Xác nhận sự kiện thử nghiệm webhook thành công](/img/admin/webhooks-list.png)

Bây giờ nếu quay lại trang _Requestbin_, chúng ta sẽ thấy payload đã được nhận với một số dữ liệu thử nghiệm.

![RequestBin hiển thị dữ liệu payload webhook đã nhận](/img/admin/webhooks-list.png)

Đây là nguyên lý cơ bản về cách webhook và endpoint hoạt động. Nếu bạn muốn tạo endpoint tùy chỉnh, bạn sẽ cần tạo một hàm tùy chỉnh để xử lý dữ liệu nhận được từ Ultimate Multisite.
