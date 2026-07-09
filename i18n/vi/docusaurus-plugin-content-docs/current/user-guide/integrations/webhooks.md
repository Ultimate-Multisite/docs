---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Cái nhìn đầu tiên về Webhooks (v2)

_**CHÚ Ý: Lưu ý rằng tính năng hoặc bài viết này dành cho người dùng nâng cao.**_

**webhook** là một cách để một ứng dụng hoặc phần mềm như Ultimate Multisite cung cấp thông tin theo thời gian thực cho các ứng dụng khác. Webhook gửi dữ liệu hoặc payload đến các ứng dụng khác ngay khi sự kiện xảy ra, nghĩa là bạn **nhận dữ liệu ngay lập tức.**

Điều này hữu ích nếu bạn cần tích hợp hoặc chuyển một số dữ liệu nhất định từ Ultimate Multisite sang một CRM hoặc hệ thống khác mỗi khi một sự kiện được kích hoạt. Ví dụ, bạn cần gửi tên và địa chỉ email của người dùng đến một danh sách gửi thư mỗi khi một tài khoản người dùng mới được tạo.

## Cách tạo webhook

Để tạo webhook, hãy vào dashboard quản trị mạng của bạn. Nhấp vào **Ultimate Multisite > Webhooks > Add New Webhook.**

![Trang danh sách Webhooks trống với nút Add New Webhook](/img/admin/webhooks-list-empty.png)

Sau đó, bạn có thể chỉnh sửa cấu hình webhook:

![Biểu mẫu Add New Webhook với các trường Name, Event và URL](/img/admin/webhook-add-modal.png)

Khi tạo một webhook mới, bạn sẽ được yêu cầu cung cấp thông tin như **Name, URL,** và **Event**. Bạn có thể dùng bất kỳ tên nào bạn muốn cho webhook của mình. Các trường quan trọng nhất là URL và Event.

![Giao diện chỉnh sửa webhook hiển thị trường URL và bản xem trước payload](/img/admin/webhook-url-field.png)

URL là **endpoint hoặc đích đến** mà Ultimate Multisite sẽ gửi **payload hoặc dữ liệu** tới. Đây là ứng dụng sẽ nhận dữ liệu.

Zapier là giải pháp phổ biến nhất mà người dùng sử dụng để giúp việc tích hợp với ứng dụng bên thứ 3 dễ dàng hơn. Nếu không có một nền tảng như Zapier, bạn sẽ cần tự tạo một hàm tùy chỉnh để bắt dữ liệu và xử lý nó. Xem bài viết này về **cách sử dụng webhook của Ultimate Multisite với Zapier.**

Trong bài viết này, chúng ta sẽ xem xét khái niệm cơ bản về cách webhook hoạt động và các sự kiện có sẵn trong Ultimate Multisite. Chúng ta sẽ sử dụng một site bên thứ 3 có tên [requestbin.com](https://requestbin.com/). Site này sẽ cho phép chúng ta tạo một endpoint và bắt payload mà không cần viết bất kỳ code nào. _**Tuyên bố miễn trừ trách nhiệm: tất cả những gì nó làm là cho chúng ta thấy rằng dữ liệu đã được nhận.**_ Sẽ không có việc xử lý hoặc bất kỳ loại hành động nào được thực hiện đối với payload.

Truy cập [requestbin.com](https://requestbin.com/) và nhấp vào Create Request Bin.

Sau khi nhấp vào nút đó, nó sẽ yêu cầu bạn đăng nhập nếu bạn đã có tài khoản hoặc đăng ký. Nếu bạn đã có tài khoản, nó sẽ đưa bạn thẳng đến dashboard của họ. Trên dashboard của họ, bạn sẽ ngay lập tức thấy endpoint hoặc URL mà bạn có thể sử dụng khi tạo webhook Ultimate Multisite của mình.

Hãy sao chép URL và quay lại Ultimate Multisite. Đặt endpoint vào trường URL và chọn một sự kiện từ menu thả xuống. Trong ví dụ này, chúng ta sẽ chọn **Payment Received**.

Sự kiện này được kích hoạt bất cứ khi nào người dùng thực hiện thanh toán. Tất cả các sự kiện có sẵn, mô tả của chúng và payload đều được liệt kê ở cuối trang. Nhấp vào nút **Add New Webhook** để lưu webhook.

![Menu thả xuống sự kiện webhook với Payment Received được chọn](/img/admin/webhook-event-picker.png)

Bây giờ chúng ta có thể gửi một sự kiện thử nghiệm đến endpoint để xem webhook mà chúng ta đã tạo có hoạt động hay không. Chúng ta có thể thực hiện việc này bằng cách nhấp vào **Send Test Event** bên dưới webhook mà chúng ta đã tạo.

![Danh sách Webhooks hiển thị một webhook đã được cấu hình và hành động Send Test](/img/admin/webhooks-list-populated.png)

Điều này hiển thị một cửa sổ xác nhận cho biết thử nghiệm đã thành công.

![Kết quả sự kiện thử nghiệm webhook sau khi gửi một payload thử nghiệm](/img/admin/webhook-test-result.png)

Bây giờ nếu chúng ta quay lại site _Requestbin_, chúng ta sẽ thấy rằng payload đã được nhận và chứa một số dữ liệu thử nghiệm.

Đây là nguyên tắc cơ bản về cách webhook và endpoint hoạt động. Nếu bạn tạo một endpoint tùy chỉnh, bạn sẽ cần tạo một hàm tùy chỉnh để xử lý dữ liệu bạn nhận được từ Ultimate Multisite.
