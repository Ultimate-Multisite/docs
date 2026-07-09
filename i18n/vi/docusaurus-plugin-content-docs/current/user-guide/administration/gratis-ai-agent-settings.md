---
title: Cài đặt Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Cài đặt Gratis AI Agent

Màn hình **Settings → Advanced** trong Gratis AI Agent cung cấp cấu hình cấp quản trị viên cho các tích hợp backend. Trang này ghi lại việc chuyển tiếp phản hồi, khóa nhà cung cấp tìm kiếm, thiết lập dịch vụ Superdav được quản lý, điều khiển Google Calendar, cài đặt SMS TextBee và các cờ tính năng trên toàn mạng.

## Truy cập Settings

1. Trong quản trị WordPress, đi tới **Gratis AI Agent → Settings**.
2. Nhấp vào tab **Advanced**.

## Cấu hình endpoint phản hồi

Endpoint phản hồi nhận các yêu cầu POST từ AI agent mỗi khi người dùng gửi phản hồi qua nút không hài lòng, banner nhắc tự động hoặc lệnh `/report-issue`.

| Trường | Mô tả |
|---|---|
| **Feedback Endpoint URL** | URL nhận các lượt gửi phản hồi dưới dạng yêu cầu HTTP POST với phần thân JSON. |
| **Feedback API Key** | Một bearer token được gửi trong `Authorization` header của mỗi yêu cầu phản hồi. Để trống nếu endpoint của bạn không yêu cầu xác thực. |

### Payload JSON dự kiến

Endpoint phản hồi của bạn phải chấp nhận phần thân JSON với ít nhất các trường sau:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Các trường bổ sung có thể xuất hiện trong payload tùy theo ngữ cảnh cuộc trò chuyện.

### Giá trị `triage_category`

Lớp phân loại AI gán một trong các giá trị sau cho `triage_category` trước khi chuyển tiếp payload:

| Giá trị | Ý nghĩa |
|---|---|
| `factual_error` | Trợ lý đã cung cấp thông tin thực tế không chính xác. |
| `unhelpful_answer` | Phản hồi đúng về mặt kỹ thuật nhưng không hữu ích. |
| `inappropriate_content` | Phản hồi chứa nội dung không nên hiển thị cho người dùng. |
| `other` | Phản hồi không khớp với một danh mục đã biết. |

### Xác thực

Nếu endpoint của bạn yêu cầu xác thực, hãy đặt trường **Feedback API Key** thành bearer token của bạn. Agent gửi:

```
Authorization: Bearer <your-api-key>
```

Nếu trường **Feedback API Key** trống, không có `Authorization` header nào được gửi.

### Tắt thu thập phản hồi

Để trống cả hai trường **Feedback Endpoint URL** và **Feedback API Key**. Nút không hài lòng và giao diện phản hồi vẫn hiển thị với người dùng, nhưng các lượt gửi sẽ không được chuyển tiếp đến bất kỳ dịch vụ bên ngoài nào.

## Brave Search API Key

Cũng trên tab **Advanced**, trường **Brave Search API Key** bật khả năng [Tìm kiếm Internet](../configuration/internet-search).

| Trường | Mô tả |
|---|---|
| **Brave Search API Key** | API key của bạn từ dashboard nhà phát triển Brave Search. Bắt buộc để bật tìm kiếm internet trong trợ lý AI. |

Nhãn trường bao gồm một liên kết có thể nhấp đến trang đăng ký Brave Search API. Để trống để tắt tìm kiếm internet.

Xem [Tìm kiếm Internet](../configuration/internet-search) để biết tài liệu dành cho người dùng cuối về tính năng này.

## Dịch vụ Superdav được quản lý

Superdav AI Agent v1.18.0 bổ sung các endpoint dịch vụ Superdav được quản lý và cấp phát kết nối tự động cho các site được hỗ trợ. Sử dụng các điều khiển này khi site của bạn nên kết nối với nhà cung cấp được lưu trữ thay vì một endpoint dịch vụ được cấu hình thủ công.

| Trường | Mô tả |
|---|---|
| **Managed Superdav Service** | Bật kết nối dịch vụ Superdav được lưu trữ cho các site được hỗ trợ. |
| **Provision Connection** | Bắt đầu cấp phát endpoint và thông tin xác thực tự động. Sử dụng mục này sau khi xác nhận site nên dùng nhà cung cấp được quản lý. |
| **Service Endpoint / Connection Status** | Hiển thị endpoint hiện tại hoặc trạng thái kết nối sau khi cấp phát. |

Sau khi cấp phát, hãy lưu cài đặt và xác minh trạng thái kết nối trước khi dựa vào các quy trình làm việc của dịch vụ được quản lý. Nếu cấp phát thất bại, hãy xem lại hướng dẫn thử lại được hiển thị và xác nhận site có quyền sử dụng nhà cung cấp được lưu trữ.

## Cấu hình Google Calendar

Khi các tính năng lịch của Superdav AI Agent v1.18.0 được bật, agent có thể đọc các lịch đã cấu hình và chi tiết sự kiện. Công cụ lịch thiên về đọc và hữu ích cho nhắc nhở theo lịch trình, theo dõi người tham dự và khớp liên hệ.

| Trường | Mô tả |
|---|---|
| **Google Calendar Credentials** | Lưu trữ thông tin xác thực hoặc kết nối token cần thiết để đọc dữ liệu lịch. |
| **Calendar Selection** | Giới hạn những lịch đã cấu hình mà agent có thể kiểm tra. |
| **Calendar Connection Status** | Xác nhận liệu thông tin xác thực hiện tại có thể đọc lịch và sự kiện hay không. |

Giữ thông tin xác thực lịch chỉ giới hạn ở các lịch mà agent cần. Kết nối lại hoặc xoay vòng thông tin xác thực nếu trạng thái cho biết token đã hết hạn.

## Thông báo SMS TextBee

Superdav AI Agent v1.18.0 bổ sung TextBee làm nhà cung cấp SMS cho các quy trình thông báo đã cấu hình. Thông báo SMS nên được kết hợp với các cổng phê duyệt của con người đối với tin nhắn nhạy cảm hoặc hướng đến người dùng.

| Trường | Mô tả |
|---|---|
| **TextBee API Key** | Xác thực các yêu cầu đến nhà cung cấp SMS TextBee. |
| **TextBee Device / Sender** | Chọn người gửi hoặc thiết bị TextBee được dùng cho tin nhắn gửi đi, khi nhà cung cấp yêu cầu. |
| **SMS Notifications Enabled** | Cho phép các quy trình đã được phê duyệt gửi thông báo bằng tin nhắn văn bản. Để tắt để ngăn gửi SMS. |

Chỉ gửi tin nhắn thử nghiệm đến số thuộc sở hữu của quản trị viên, sau đó xác nhận hành vi cổng phê duyệt trước khi bật nhắc nhở theo lịch hoặc hướng đến người tham dự.

## Cờ tính năng

Cũng được giới thiệu trong v1.9.0, tab **Settings → Feature Flags** cung cấp các công tắc bật/tắt cho chức năng tùy chọn. Mỗi cờ được bật hoặc tắt trên toàn mạng; hiện tại không có ghi đè theo từng site.

### Truy cập Feature Flags

1. Trong quản trị WordPress, đi tới **Gratis AI Agent → Settings**.
2. Nhấp vào tab **Feature Flags**.

### Cờ kiểm soát truy cập

| Cờ | Mặc định | Mô tả |
|---|---|---|
| **Chỉ giới hạn cho Quản trị viên** | Tắt | Khi được bật, chỉ người dùng có vai trò `administrator` mới có thể mở bảng trò chuyện AI Agent. Tất cả các vai trò khác sẽ thấy thông báo "Liên hệ quản trị viên của bạn" thay vào đó. |
| **Chỉ giới hạn cho Quản trị viên mạng** | Tắt | Khi được bật trên mạng multisite, chỉ Super Admins mới có thể dùng agent. Quản trị viên của từng site sẽ bị chặn. Có mức ưu tiên cao hơn "Chỉ giới hạn cho Quản trị viên" nếu cả hai đều được bật. |
| **Cho phép Subscriber truy cập** | Tắt | Khi được bật, người dùng có vai trò `subscriber` có thể dùng giao diện trò chuyện nhưng bị giới hạn ở các khả năng chỉ đọc (không tạo bài viết hoặc thay đổi cài đặt). |
| **Tắt cho người không phải thành viên** | Tắt | Tích hợp với trạng thái thành viên Ultimate Multisite. Khi được bật, trò chuyện sẽ bị ẩn đối với các site không có gói thành viên đang hoạt động. |

### Cờ thương hiệu

| Cờ | Mặc định | Mô tả |
|---|---|---|
| **Ẩn chân trang "Powered by Gratis AI Agent"** | Tắt | Xóa dòng ghi nhận thương hiệu được hiển thị ở cuối tiện ích trò chuyện. Được khuyến nghị cho các triển khai white-label. |
| **Tên agent tùy chỉnh** | *(trống)* | Thay nhãn "Gratis AI Agent" mặc định trong tiêu đề trò chuyện và menu quản trị bằng tên sản phẩm của riêng bạn. Để trống để dùng mặc định. |
| **Ẩn bộ chọn agent** | Tắt | Khi được bật, người dùng không thể chuyển đổi giữa năm agent tích hợp sẵn. Agent hiện tại được cố định theo bất cứ cấu hình nào được đặt làm mặc định trong Cài đặt → Chung. |
| **Dùng biểu tượng site làm avatar trò chuyện** | Tắt | Thay biểu tượng AI mặc định trong tiêu đề tiện ích trò chuyện bằng biểu tượng site WordPress (được đặt trong Giao diện → Tùy chỉnh → Nhận diện site). |

### Cờ an toàn tự động hóa

Superdav AI Agent v1.18.0 giới thiệu các cổng phê duyệt của con người và bản ghi nhắc nhở để chạy tự động hóa an toàn hơn. Các điều khiển này có thể xuất hiện trong cờ tính năng hoặc cài đặt tự động hóa nâng cao, tùy thuộc vào gói đã cài đặt.

| Cờ | Mặc định | Mô tả |
|---|---|---|
| **Yêu cầu phê duyệt của con người** | Khuyến nghị bật | Tạm dừng các tự động hóa nhạy cảm cho đến khi người dùng được ủy quyền xem xét và xác nhận hành động được đề xuất. |
| **Chống trùng lặp nhắc nhở** | Bật | Ghi lại các nhắc nhở đã gửi để các lần thử lại hoặc lần chạy theo lịch không gửi thông báo trùng lặp. |
| **Bật công cụ lịch** | Tắt cho đến khi được cấu hình | Cho phép agent đọc các lịch và sự kiện Google đã cấu hình. |
| **Bật thông báo SMS** | Tắt cho đến khi được cấu hình | Cho phép các quy trình làm việc đã được phê duyệt gửi thông báo SMS TextBee sau khi thông tin xác thực được lưu. |

### Áp dụng thay đổi

Nhấp **Lưu cài đặt** sau khi bật/tắt bất kỳ cờ nào. Thay đổi có hiệu lực ngay lập tức — không cần xóa bộ nhớ đệm hoặc kích hoạt lại plugin.
