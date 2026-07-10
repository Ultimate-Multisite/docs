---
title: Feedback Ọnụrụ Ụta na Ihe Ọ dị Ọzọ
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Feedback & Báo Cáo Vấn Đề Khách Hàng {#customer-feedback--issue-reporting}

Gratis AI Agent v1.5.0 mang đến một hệ thống báo cáo phản hồi và vấn đề tích hợp sẵn, cho phép người dùng cuối đánh dấu những câu trả lời không hữu ích và báo cáo các sự cố trực tiếp từ giao diện trò chuyện. Hệ thống này bao gồm quản lý sự đồng ý (consent management), lệnh báo cáo tự động, và phân loại ưu tiên bằng AI ở phía sau (backend).

## Nút Thumbs-Down (Không Hợp Lý) {#thumbs-down-button}

Mỗi tin nhắn mà trợ lý AI gửi đi đều hiển thị một nút **thumbs-down** (👎). Khi người dùng nhấp vào đó, họ có thể đánh dấu phản hồi là không hữu ích hoặc sai.

- Nút này xuất hiện khi di chuột qua mỗi tin nhắn của trợ lý.
- Nhấp vào nó sẽ mở **Feedback Consent Modal**.
- Phản hồi được liên kết với luồng trò chuyện và tin nhắn cụ thể đó.

## Feedback Consent Modal (Cửa Sổ Đồng Ý Phản Hồi) {#feedback-consent-modal}

Khi người dùng nhấp vào nút thumbs-down, một cửa sổ đồng ý (consent modal) sẽ hiện ra trước khi bất kỳ dữ liệu nào được gửi đi. Cửa sổ này:

- Giải thích thông tin nào sẽ được thu thập (đoạn hội thoại, ngữ cảnh trình duyệt).
- Hỏi người dùng xác nhận rằng họ đồng ý chia sẻ dữ liệu này.
- Cung cấp một ô nhập văn bản tự do để người dùng mô tả những gì đã sai.
- Đưa ra tùy chọn **Cancel** để đóng mà không cần gửi đi.

Không có phản hồi nào được ghi lại cho đến khi người dùng xác nhận rõ ràng.

## Auto-Prompt Feedback Banner (Biểu ngữ Phản Hồi Tự động) {#auto-prompt-feedback-banner}

Ở cuối một cuộc trò chuyện, trợ lý có thể hiển thị một **auto-prompt feedback banner** — một thông báo không gây phiền nhiễu hỏi liệu phiên làm việc đó có hữu ích hay không.

Biểu ngữ này xuất hiện tự động dựa trên độ dài và kết quả của cuộc trò chuyện. Nó liên kết đến cùng luồng phản hồi như nút thumbs-down. Người dùng có thể đóng biểu ngữ mà không cần cung cấp phản hồi.

## Lệnh /report-issue (Slash Command) {#report-issue-slash-command}

Người dùng có thể kích hoạt luồng phản hồi trực tiếp bằng cách gõ `/report-issue` vào ô nhập liệu trò chuyện. Lệnh này:

- Abre Modal Consent Feedback ngay lập tức.
- Điền sẵn mô tả với thông tin về cuộc trò chuyện hiện tại.
- Cho phép người dùng thêm chi tiết trước khi gửi.

Lệnh `/report-issue` có sẵn trong tất cả các chế độ chat (inline, floating widget, full-screen).

## AI-Assisted Triage (Phân loại hỗ trợ bởi AI) {#ai-assisted-triage}

Phản hồi được gửi sẽ đi qua một lớp phân loại AI (AI triage layer) mà nó:

- Phân loại báo cáo (lỗi thực tế, câu trả lời không hữu ích, nội dung không phù hợp, v.v.).
- Gắn các siêu dữ liệu cuộc trò chuyện liên quan.
- Chuyển bản tóm tắt phân loại đến **Feedback Endpoint** đã được cấu hình (xem [Settings > Advanced](#settings-advanced)).

Điều này giúp giảm thời gian xem xét thủ công bằng cách đưa ra những vấn đề quan trọng nhất trước.

## Settings > Advanced {#settings-advanced} (Cài đặt > Nâng cao) {#settings--advanced}

Để bật backend phản hồi, hãy cấu hình các trường sau dưới **Gratis AI Agent → Settings → Advanced**:

| Field | Mô tả |
|---|---|
| **Feedback Endpoint URL** | Địa chỉ URL nhận các yêu cầu POST với dữ liệu phản hồi (JSON). |
| **Feedback API Key** | Token Bearer được gửi trong header `Authorization` để xác thực việc gửi phản hồi. |

Để vô hiệu hóa việc thu thập phản hồi, hãy để cả hai trường này trống. Các nút phản hồi riêng lẻ vẫn hiển thị cho người dùng, nhưng các bản gửi sẽ không được chuyển tiếp đi.

:::tip
Endpoint phản hồi phải chấp nhận một body JSON với ít nhất các trường `message_id`, `conversation_id`, `feedback_text` và `triage_category`. Xem tài liệu của nhà cung cấp endpoint để biết lược đồ (schema) mong đợi.
