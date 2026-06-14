---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Nhìn Lần Đầu Về Webhooks (v2)

_**LƯU Ý: Tính năng hoặc bài viết này dành cho người dùng nâng cao.**_

Một **webhook** là cách để một ứng dụng hoặc phần mềm như Ultimate Multisite cung cấp thông tin theo thời gian thực cho các ứng dụng khác. Webhook sẽ gửi dữ liệu hoặc gói dữ liệu đến các ứng dụng khác ngay khi sự kiện xảy ra, nghĩa là bạn **nhận được dữ liệu ngay lập tức.**

Điều này hữu ích nếu bạn cần tích hợp hoặc truyền một số dữ liệu nhất định từ Ultimate Multisite sang một CRM hoặc hệ thống khác mỗi khi có một sự kiện nào đó được kích hoạt. Ví dụ, bạn cần gửi tên và địa chỉ email của người dùng đến danh sách gửi thư mỗi khi một tài khoản người dùng mới được tạo.

## Cách tạo webhook

Để tạo một webhook, hãy vào bảng điều khiển quản trị mạng (network admin dashboard) của bạn. Nhấp vào **Ultimate Multisite > Webhooks > Add New Webhook.**

![Trang danh sách Webhooks trống với nút Thêm Webhook](/img/admin/webhooks-list-empty.png)

Sau đó, bạn có thể chỉnh sửa cấu hình webhook:

![Biểu mẫu Thêm Webhook với các trường Tên (Name), Sự kiện (Event) và URL (URL)](/img/admin/webhook-add-modal.png)

Khi tạo một webhook mới, bạn sẽ được yêu cầu cung cấp thông tin như **Tên (Name), URL** và **Sự kiện (Event)**. Bạn có thể dùng bất kỳ tên nào bạn muốn cho webhook của mình. Các trường quan trọng nhất là URL và Event.

![Giao diện chỉnh sửa Webhook hiển thị trường URL và bản xem trước payload](/img/admin/webhook-url-field.png)

URL là **điểm cuối hoặc đích đến** mà Ultimate Multisite sẽ gửi **payload hoặc dữ liệu**. Đây là ứng dụng sẽ nhận dữ liệu đó.

Zapier là giải pháp phổ biến nhất mà người dùng sử dụng để việc tích hợp với các ứng dụng bên thứ ba trở nên dễ dàng hơn. Nếu không có một nền tảng như Zapier, bạn sẽ cần tự tạo một hàm tùy chỉnh thủ công để bắt dữ liệu và xử lý nó. Xem bài viết này về **cách sử dụng webhook Ultimate Multisite với Zapier.**

N trong bài viết này, chúng ta sẽ xem qua khái niệm cơ bản về cách một webhook hoạt động và các sự kiện có sẵn trong Ultimate Multisite. Chúng ta sẽ sử dụng một trang bên thứ ba tên là [requestbin.com](https://requestbin.com/). Trang này sẽ cho phép chúng ta tạo một endpoint và nhận dữ liệu (payload) mà không cần viết bất kỳ đoạn code nào. _**Tuyên bố miễn trừ trách nhiệm: tất cả những gì nó làm là cho chúng ta thấy rằng dữ liệu đã được nhận.**_ Sẽ không có bất kỳ quá trình xử lý hay hành động nào đối với payload.

Truy cập [requestbin.com](https://requestbin.com/) và nhấn Create Request Bin (Tạo Hộp Yêu Cầu).

Sau khi nhấn nút đó, nó sẽ hỏi bạn đăng nhập nếu bạn đã có tài khoản hoặc đăng ký. Nếu bạn đã có tài khoản thì nó sẽ dẫn bạn thẳng đến dashboard của họ. Trên dashboard của họ, bạn sẽ ngay lập tức thấy endpoint hoặc URL mà bạn có thể dùng để tạo webhook cho Ultimate Multisite của mình.

Hãy sao chép URL đó và quay lại Ultimate Multisite. Đặt endpoint vào ô URL và chọn một sự kiện từ danh sách thả xuống. Trong ví dụ này, chúng ta sẽ chọn **Payment Received** (Thanh toán đã nhận).

Sự kiện này được kích hoạt bất cứ khi nào người dùng thực hiện thanh toán. Tất cả các sự kiện có sẵn, mô tả của chúng và payload đều được liệt kê ở cuối trang. Nhấn nút **Add New Webhook** (Thêm Webhook Mới) để lưu webhook.

![Dropdown sự kiện Webhook với Payment Received đã được chọn](/img/admin/webhook-event-picker.png)

Bây giờ chúng ta có thể gửi một sự kiện thử nghiệm đến endpoint để xem liệu webhook mà chúng ta tạo có hoạt động không. Chúng ta có thể làm điều này bằng cách nhấn **Send Test Event** (Gửi Sự Kiện Thử Nghiệm) bên dưới webhook mà chúng ta đã tạo.

![Danh sách Webhooks hiển thị một webhook được cấu hình và hành động Gửi Thử nghiệm](/img/admin/webhooks-list-populated.png)

Điều này sẽ hiển thị một cửa sổ xác nhận rằng bài kiểm tra đã thành công.

![Kết quả sự kiện thử nghiệm Webhook sau khi gửi payload thử nghiệm](/img/admin/webhook-test-result.png)

Ọ bụ ma anyị geri n' _Requestbin_ site ahụ, ọ ga-arị ịhụ na payload ahụ jikọta, ọ ga-anọchịrị ihe nwere test data.

Ọ bụ ihe a na-eme ka webhook na endpoints ebe ndị ahụ iji lebe. Ka ọ bụrụ na ị chụrụ endpoint eze, ị ga-eji chụrụ function eze maka ịgbanwe data ị chọrọ nwere n'Ultimate Multisite.
