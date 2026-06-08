---
title: Cài đặt AI Agent Miễn phí
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Cài đặt Gratis AI Agent

Màn hình **Settings → Advanced** (Cài đặt → Nâng cao) trong Gratis AI Agent cung cấp các cấu hình cấp quản trị viên cho các tính năng tích hợp backend được giới thiệu từ phiên bản v1.5.0. Trang này mô tả các trường của **Feedback Endpoint** (Điểm cuối phản hồi) và định dạng dữ liệu mong đợi.

## Truy cập Cài đặt

1. Trong trang quản trị WordPress, truy cập **Gratis AI Agent → Settings**.
2. Nhấp vào tab **Advanced**.

## Cấu hình Feedback Endpoint

Điểm cuối phản hồi này sẽ nhận các yêu cầu POST từ AI agent bất cứ khi nào người dùng gửi phản hồi thông qua nút giơ ngón tay cái xuống, banner gợi ý tự động, hoặc lệnh `/report-issue`.

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | URL nhận các bài gửi phản hồi dưới dạng yêu cầu HTTP POST với nội dung JSON. |
| **Feedback API Key** | Một bearer token được gửi trong tiêu đề `Authorization` của mỗi yêu cầu phản hồi. Hãy để trống nếu endpoint của bạn không yêu cầu xác thực. |

### Expected JSON Payload (Nội dung JSON mong đợi)

Điểm cuối phản hồi của bạn phải chấp nhận một nội dung JSON với ít nhất các trường sau:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Câu trả lời về giá cả là không chính xác.",
  "triage_category": "factual_error"
}
```

Các trường bổ sung có thể có trong payload tùy thuộc vào ngữ cảnh cuộc trò chuyện.

### `triage_category` Values (Các giá trị của `triage_category`)

Lớp phân loại (triage layer) của AI sẽ gán một trong các giá trị sau cho `triage_category` trước khi chuyển tiếp payload:

| Value | Meaning |
|---|---|
| `factual_error` | Trợ lý đã cung cấp thông tin thực tế không chính xác. |
| `unhelpful_answer` | Phản hồi về mặt kỹ thuật là đúng nhưng không hữu ích. |
| `inappropriate_content` | Phản hồi chứa nội dung không nên hiển thị cho người dùng. |
| `other` | Phản hồi không khớp với bất kỳ danh mục nào đã biết. |

### Authentication (Xác thực)

Nếu endpoint của bạn yêu cầu xác thực, hãy đặt trường **Feedback API Key** bằng bearer token của bạn. Agent sẽ gửi:

```
Authorization: Bearer <your-api-key>
```

Nếu trường **Feedback API Key** trống, sẽ không gửi tiêu đề `Authorization` nào.

### Disabling Feedback Collection (Tắt thu thập phản hồi)

Hãy để cả hai trường **Feedback Endpoint URL** và **Feedback API Key** trống. Nút giơ ngón tay cái xuống và giao diện phản hồi vẫn hiển thị với người dùng, nhưng các bài gửi sẽ không được chuyển tiếp đến bất kỳ dịch vụ bên ngoài nào.

## Brave Search API Key

Cũng trên tab **Advanced**, trường **Brave Search API Key** cho phép tính năng [Internet Search](../configuration/internet-search).

| Field | Description |
|---|---|
| **Brave Search API Key** | Khóa API của bạn từ bảng điều khiển nhà phát triển Brave Search. Bắt buộc để bật tìm kiếm internet trong trợ lý AI. |

Nhãn trường bao gồm một liên kết có thể nhấp đến trang đăng ký API của Brave Search. Để tắt tìm kiếm internet, hãy để trống trường này.

Xem [Internet Search](../configuration/internet-search) để biết tài liệu dành cho người dùng cuối về tính năng này.

## Feature Flags (Cờ tính năng)

Cũng được giới thiệu trong v1.9.0, tab **Settings → Feature Flags** cung cấp các công tắc bật/tắt cho các chức năng tùy chọn. Mỗi cờ tính năng được bật hoặc tắt trên toàn mạng; hiện tại chưa có tùy chọn ghi đè ở cấp độ từng trang web.

### Accessing Feature Flags (Truy cập Cờ tính năng)

1. Trong trang quản trị WordPress, truy cập **Gratis AI Agent → Settings**.
2. Nhấp vào tab **Feature Flags**.

### Access Control Flags (Cờ kiểm soát truy cập)

| Flag | Default | Description |
|---|---|---|
| **Restrict to Administrators** | Off | Khi bật, chỉ người dùng có vai trò `administrator` mới có thể mở bảng trò chuyện AI Agent. Tất cả các vai trò khác sẽ thấy thông báo "Liên hệ quản trị viên của bạn". |
| **Restrict to Network Admins** | Off | Khi bật trên mạng lưới đa trang (multisite network), chỉ Super Admins mới có thể sử dụng agent. Quản trị viên trang web riêng lẻ sẽ bị chặn. Ưu tiên hơn "Restrict to Administrators" nếu cả hai đều được bật. |
| **Allow Subscriber Access** | Off | Khi bật, người dùng có vai trò `subscriber` có thể sử dụng giao diện trò chuyện nhưng bị giới hạn ở khả năng chỉ đọc (không thể tạo bài viết hoặc thay đổi cài đặt). |
| **Disable for Non-Members** | Off | Tích hợp với trạng thái thành viên của Ultimate Multisite. Khi bật, trò chuyện sẽ bị ẩn đối với các trang web không có tư cách thành viên đang hoạt động. |

### Branding Flags (Cờ thương hiệu)

| Flag | Default | Description |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | Loại bỏ dòng ghi nhận thương hiệu hiển thị ở cuối widget trò chuyện. Được khuyến nghị cho các triển khai thương hiệu riêng (white-label). |
| **Custom Agent Name** | *(blank)* | Thay thế nhãn mặc định "Gratis AI Agent" trong tiêu đề trò chuyện và menu quản trị bằng tên sản phẩm của bạn. Để trống để sử dụng mặc định. |
| **Hide Agent Picker** | Off | Khi bật, người dùng không thể chuyển đổi giữa năm agent tích hợp sẵn. Agent hiện tại sẽ cố định ở bất cứ thứ gì được cấu hình làm mặc định trong Settings → General. |
| **Use Site Icon as Chat Avatar** | Off | Thay thế biểu tượng AI mặc định trong tiêu đề widget trò chuyện bằng biểu tượng trang web WordPress (được đặt tại Appearance → Customize → Site Identity). |

### Applying Changes (Áp dụng thay đổi)

Nhấp vào **Save Settings** sau khi bật/tắt bất kỳ cờ tính năng nào. Các thay đổi có hiệu lực ngay lập tức — không cần xóa bộ nhớ đệm (cache flush) hoặc kích hoạt lại plugin.
