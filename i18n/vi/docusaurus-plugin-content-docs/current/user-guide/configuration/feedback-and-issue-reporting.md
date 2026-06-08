---
title: Phản hồi và Báo cáo Sự cố của Khách hàng
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Phản hồi và Báo cáo Sự cố của Khách hàng

Gratis AI Agent v1.5.0 giới thiệu hệ thống phản hồi và báo cáo sự cố tích hợp, cho phép người dùng cuối đánh dấu các phản hồi không hữu ích và báo cáo các vấn đề trực tiếp từ giao diện chat. Hệ thống này bao gồm quản lý sự đồng ý (consent management), lệnh báo cáo tự động, và phân loại sự cố (triage) bằng AI ở phía backend.

## Nút Thích/Không Thích (Thumbs-Down Button)

Mọi tin nhắn do trợ lý AI gửi đều hiển thị một nút **thích/không thích** (👎). Khi người dùng nhấp vào nút này, họ có thể đánh dấu một phản hồi là không hữu ích hoặc không chính xác.

- Nút này sẽ xuất hiện khi di chuột qua bên cạnh mỗi tin nhắn của trợ lý.
- Nhấp vào nó sẽ mở **Modal Đồng ý Phản hồi (Feedback Consent Modal)**.
- Phản hồi được liên kết với luồng hội thoại và tin nhắn cụ thể.

## Modal Đồng ý Phản hồi (Feedback Consent Modal)

Khi người dùng nhấp vào nút thích/không thích, một modal đồng ý sẽ xuất hiện trước khi bất kỳ dữ liệu nào được gửi đi. Modal này:

- Giải thích loại thông tin nào sẽ được thu thập (trích đoạn hội thoại, ngữ cảnh trình duyệt).
- Yêu cầu người dùng xác nhận rằng họ đồng ý chia sẻ dữ liệu này.
- Cung cấp một ô văn bản tự do để người dùng mô tả vấn đề đã xảy ra.
- Cung cấp tùy chọn **Hủy (Cancel)** để đóng mà không cần gửi.

Sẽ không có phản hồi nào được ghi lại cho đến khi người dùng xác nhận rõ ràng.

## Banner Phản hồi Tự động (Auto-Prompt Feedback Banner)

Khi kết thúc một cuộc trò chuyện, trợ lý có thể hiển thị một **banner phản hồi tự động** — một thông báo không gây gián đoạn hỏi xem phiên làm việc đó có hữu ích hay không.

Banner này xuất hiện tự động dựa trên độ dài và các quy tắc kinh nghiệm về kết quả của cuộc trò chuyện. Nó liên kết đến quy trình phản hồi tương tự như nút thích/không thích. Người dùng có thể bỏ qua banner mà không cần cung cấp phản hồi.

## Lệnh Gạch chéo /report-issue (Slash Command)

Người dùng có thể kích hoạt quy trình phản hồi trực tiếp bằng cách gõ `/report-issue` vào ô nhập chat. Lệnh này:

- Mở Modal Đồng ý Phản hồi ngay lập tức.
- Tự động điền vào ô mô tả bằng ngữ cảnh về cuộc trò chuyện hiện tại.
- Cho phép người dùng thêm chi tiết bổ sung trước khi gửi.

Lệnh `/report-issue` khả dụng trong tất cả các chế độ chat (inline, floating widget, full-screen).

## Phân loại Sự cố bằng AI (AI-Assisted Triage)

Phản hồi được gửi đi sẽ được chuyển đến lớp phân loại sự cố bằng AI, nơi nó sẽ:

- Phân loại báo cáo (lỗi thực tế, câu trả lời không hữu ích, nội dung không phù hợp, v.v.).
- Đính kèm siêu dữ liệu (metadata) liên quan của cuộc trò chuyện.
- Chuyển bản tóm tắt phân loại sự cố đến **Feedback Endpoint** được cấu hình (xem [Settings > Advanced](#settings-advanced)).

Điều này giúp giảm thời gian xem xét thủ công bằng cách đưa ra các vấn đề quan trọng nhất trước.

## Settings > Advanced {#settings-advanced}

Để bật backend phản hồi, hãy cấu hình các trường sau trong **Gratis AI Agent → Settings → Advanced**:

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | URL nhận các yêu cầu POST với tải trọng phản hồi (JSON). |
| **Feedback API Key** | Bearer token được gửi trong header `Authorization` để xác thực các lần gửi phản hồi. |

Để vô hiệu hóa việc thu thập phản hồi, hãy để trống cả hai trường. Các nút phản hồi cá nhân vẫn hiển thị với người dùng, nhưng các lần gửi sẽ không được chuyển tiếp.

:::tip
Feedback endpoint phải chấp nhận một body JSON với ít nhất các trường `message_id`, `conversation_id`, `feedback_text`, và `triage_category`. Vui lòng xem tài liệu của nhà cung cấp endpoint của bạn để biết schema mong đợi.
:::
