---
title: Settings na-agba AI Agent
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Cài Đặt Tự Động AI Miễn Phí

Màn hình **Settings → Advanced** trong Gratis AI Agent cho phép bạn cấu hình cấp quản trị cho các tích hợp backend được giới thiệu từ phiên bản v1.5.0 trở lên. Trang này mô tả các trường của **Feedback Endpoint** và định dạng mong đợi của chúng.

## Truy Cập Cài Đặt

1. Trong admin WordPress, hãy vào **Gratis AI Agent → Settings**.
2. Nhấn vào tab **Advanced**.

## Cấu Hình Feedback Endpoint

Feedback endpoint sẽ nhận các yêu cầu POST từ agent AI bất cứ khi nào người dùng gửi phản hồi qua nút thumbs-down (giảm thích), banner gợi ý tự động, hoặc lệnh `/report-issue`.

| Trường | Mô tả |
|---|---|
| **Feedback Endpoint URL** | URL mà nơi nhận các phản hồi dưới dạng yêu cầu HTTP POST với nội dung JSON. |
| **Feedback API Key** | Một bearer token được gửi trong header `Authorization` của mỗi yêu cầu phản hồi. Hãy để trống nếu endpoint của bạn không yêu cầu xác thực. |

### Payload JSON Mong Đợi

Endpoint phản hồi của bạn phải chấp nhận một body JSON với ít nhất các trường sau:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "Câu trả lời không chính xác về giá cả.",
  "triage_category": "factual_error"
}
```

Các trường bổ sung có thể xuất hiện trong payload tùy thuộc vào ngữ cảnh của cuộc trò chuyện.

### Các Giá Trị `triage_category`

Lớp phân loại (triage layer) của AI sẽ gán một trong các giá trị sau cho `triage_category` trước khi chuyển tiếp payload:

| Giá Trị | Ý Nghĩa |
|---|---|
| `factual_error` | Trợ lý đã cung cấp thông tin sai về sự thật. |
| `unhelpful_answer` | Phản hồi đúng về mặt kỹ thuật nhưng không hữu ích. |
| `inappropriate_content` | Phản hồi chứa nội dung không nên hiển thị cho người dùng. |
| `other` | Phản hồi không khớp với bất kỳ danh mục nào đã biết. |

### Xác Thực

Ka ọkụ, ma ọ bụrụ na endpoint ọ bụla na-agba otu nkwado (authentication), ri dịghị **Feedback API Key** field ruo nkwado tupu. Agent ahụ ga-anọ:

```
Authorization: Bearer <your-api-key>
```

Ọ bụrụ na **Feedback API Key** field ahụ ọkụ, a ga-anọghị anyị anọ `Authorization` header.

### Azoghị Ihe Feedback Collection

Rị dịghị **Feedback Endpoint URL** na **Feedback API Key** fields ruo nkwado. Button thumbs-down na UI feedback bụrụ ihe ndị mmadụ na-agba, ma ọ bụ na-anọghị anyị anọ submissions ahụ n'ime ndụ anyị.

## Brave Search API Key

Ọ dị n'ebe **Advanced** tab ahụ, **Brave Search API Key** field ahụ ga-anọchi ike [Internet Search](../configuration/internet-search).

| Field | Description |
|---|---|
| **Brave Search API Key** | API key ahụ nwere n'ime dashboard developer Brave Search. Ọ dị mkpa maka ịgbanwe internet search na AI assistant. |

Label field ahụ ga-anọchi link a na akụkọ ọrụ ndị mmadụ na shiger Brave Search API sign-up page. Rị dịghị ruo nkwado iji gbanwe internet search.

See [Internet Search](../configuration/internet-search) maka akụkọ ọrụ ndị mmadụ ma ọ bụ ihe a na feature ahụ.

## Feature Flags

Ọ dị nwere n'ime v1.9.0, **Settings → Feature Flags** tab ahụ ga-anọchi toggle switches (on/off) maka ike ndị dị mma. Ogni flag bụ either enabled (on) ma ọ bụ disabled (off) na gbogho ndụ; a dịghị override per-site (na site ọ bụla) n'ebe a ọ bụla.

### Ọkụ Feature Flags

1. Na WordPress admin, jikọ ya **Gratis AI Agent → Settings**.
2. Jikọya tab **Feature Flags**.

### Access Control Flags

| Flag | Default | Mô tả |
|---|---|---|
| **Hạn chế cho Quản trị viên** | Tắt | Khi bật, chỉ những người dùng có vai trò `administrator` mới có thể mở bảng chat AI Agent. Các vai trò khác sẽ thấy thông báo "Liên hệ với quản trị viên của bạn". |
| **Hạn chế cho Quản trị viên Mạng** | Tắt | Khi được bật trên mạng multisite, chỉ Super Admin mới có thể sử dụng agent. Quản trị viên trang riêng bị chặn. Nó sẽ ưu tiên hơn "Hạn chế cho Quản trị viên" nếu cả hai đều được bật. |
| **Cho phép Người đăng ký Truy cập** | Tắt | Khi được bật, người dùng có vai trò `subscriber` có thể sử dụng giao diện chat nhưng chỉ giới hạn ở khả năng đọc (không tạo bài viết hay thay đổi cài đặt). |
| **Tắt cho Người không phải Thành viên** | Tắt | Tích hợp với trạng thái thành viên của Ultimate Multisite. Khi được bật, chat sẽ bị ẩn đối với các trang web chưa có tư cách thành viên đang hoạt động. |

### Cờ Thương hiệu (Branding Flags)

| Flag | Default | Mô tả |
|---|---|---|
| **Ẩn chân trang "Được cung cấp bởi Gratis AI Agent"** | Tắt | Loại bỏ dòng ghi nhận thương hiệu được hiển thị ở cuối widget chat. Khuyến nghị cho các triển khai nhãn trắng (white-label). |
| **Tên Agent Tùy chỉnh** | *(trống)* | Thay thế nhãn mặc định "Gratis AI Agent" trong tiêu đề chat và menu admin bằng tên sản phẩm của bạn. Để trống để sử dụng mặc định. |
| **Ẩn Bộ chọn Agent** | Tắt | Khi được bật, người dùng không thể chuyển đổi giữa năm agent tích hợp sẵn. Agent hiện tại sẽ được cố định theo bất cứ thứ gì được cấu hình làm mặc định trong Settings → General. |
| **Sử dụng Biểu tượng Trang web làm Ảnh đại diện Chat** | Tắt | Thay thế biểu tượng AI mặc định trong tiêu đề widget chat bằng biểu tượng trang web WordPress (được đặt dưới Appearance → Customize → Site Identity). |

### Áp dụng Thay đổi

Nhấn **Save Settings** sau khi chuyển đổi bất kỳ cờ nào. Các thay đổi có hiệu lực ngay lập tức — không cần xóa cache hay kích hoạt lại plugin.
