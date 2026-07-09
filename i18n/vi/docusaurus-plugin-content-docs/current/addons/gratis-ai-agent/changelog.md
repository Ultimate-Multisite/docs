---
title: Nhật ký thay đổi
sidebar_position: 5
_i18n_hash: 59cb5f1cda2a3e8a789dcd3d67db33db
---
# Nhật ký thay đổi (Changelog) {#changelog}

## 1.9.0 — Phát hành ngày 2026-04-28 {#190--released-on-2026-04-28}

### Tính năng mới {#new}

- **Khả năng `create_contact_form`** — tạo biểu mẫu liên hệ bằng plugin form đang hoạt động (Contact Form 7, WPForms, Fluent Forms, hoặc Gravity Forms) và trả về một shortcode sẵn sàng nhúng vào bất kỳ bài viết hoặc trang nào.
- **Khả năng `set_featured_image`** — gán ảnh đại diện (featured image) cho bài viết hoặc trang từ một ID đính kèm có sẵn trong Media Library hoặc một URL từ xa; tự động nhập ảnh khi được cung cấp URL.
- **Khả năng `batch_create_posts`** — tạo nhiều bài viết chỉ bằng một lệnh gọi ability. Hỗ trợ các tham số tương tự như `create_post`, báo cáo thành công/thất bại cho từng bài viết, và có chế độ tùy chọn `stop_on_error`.
- **Tham số `page_template`** — được thêm vào `create_post` và `update_post`. Gán một tệp mẫu trang PHP (ví dụ: `page-full-width.php`) khi tạo hoặc cập nhật. Truyền chuỗi rỗng vào `update_post` để quay lại mẫu mặc định của theme.
- **Khả năng chụp ảnh màn hình phía client** — `capture_screenshot`, `compare_screenshots`, và `review_page_design`. Chụp ảnh màn hình toàn bộ hoặc theo viewport của các trang trực tiếp thông qua trình duyệt headless phía server, so sánh hai ảnh chụp màn hình, và nhận đánh giá thiết kế do AI tạo ra, bao gồm bố cục, kiểu chữ, màu sắc và khả năng truy cập.
- **Năm agent tích hợp sẵn** — Content Writer, Site Builder, Design Studio, Plugin Manager, và Support Assistant. Mỗi agent có một bộ công cụ chuyên dụng, một system prompt được điều chỉnh riêng, và các gợi ý khởi đầu. Có thể chuyển đổi qua **Agent Picker** mới ở tiêu đề chat. Xem [Built-in Agents](../../user-guide/configuration/built-in-agents).
- **Cờ tính năng (Feature flags)** — tab **Settings → Feature Flags** mới với các công tắc kiểm soát truy cập (giới hạn cho quản trị viên, giới hạn cho quản trị viên mạng, quyền truy cập thành viên, vô hiệu hóa cho người không phải thành viên) và các tùy chọn thương hiệu (ẩn nguồn footer, tên agent tùy chỉnh, ẩn agent picker, sử dụng icon trang web làm avatar chat). Xem [Gratis AI Agent Settings](../../user-guide/administration/gratis-ai-agent-settings).
- **Khôi phục phiên làm việc cuối cùng** — bảng chat giờ đây tự động tải lại cuộc trò chuyện gần nhất khi tải trang và khi mở widget, do đó ngữ cảnh sẽ không bao giờ bị mất qua các lần điều hướng trang.
- **Liên kết hành động của Plugin** — các liên kết nhanh đến Settings và Abilities Registry giờ đây xuất hiện trên màn hình **Plugins → Installed Plugins** của WordPress, ngay bên dưới mô tả plugin.

### Cải tiến {#improved}

- **Thử lại nguồn ảnh** — agent hiện giờ sẽ thử lại tất cả các nguồn ảnh miễn phí đã cấu hình trước khi chuyển sang ảnh do AI tạo ra khi tải xuống thất bại.
- **Bảng thông tin Model** — luôn hiển thị ở tiêu đề chat; không còn bị ẩn sau tin nhắn đầu tiên.
- **Hành vi tự cuộn (Auto-scroll)** — tự cuộn sẽ tạm dừng khi người dùng cuộn lên để đọc; một nút **Scroll to bottom** nổi sẽ xuất hiện và tự động biến mất khi người dùng đến tin nhắn mới nhất.
- **Giao diện Agent Picker** — được thiết kế lại thành lớp phủ dạng form-table với các icon riêng cho từng agent, giúp dễ dàng nhận diện và chuyển đổi agent ngay lập tức.
- **Các khối JS tải lười (Lazy-loaded JS chunks)** — gói JavaScript ban đầu của widget chat hiện được chia thành các khối tải lười, giảm kích thước gói ban đầu từ 75–90%.
- **Thiết kế lại widget chat** — icon AI thống nhất thay thế cho avatar tùy chỉnh trước đây; nhất quán với hệ thống agent tích hợp sẵn.
- **Liên kết hóa URL** — Các URL xuất hiện trong tin nhắn hệ thống và bong bóng tin nhắn lỗi giờ được hiển thị dưới dạng liên kết có thể nhấp.

### Sửa lỗi {#fixed}

- **Khả năng khám phá Ability** — đã sửa các mô tả, tham chiếu system prompt và căn chỉnh namespace để tất cả các ability hiển thị đáng tin cậy trong danh sách công cụ của agent.
- **Bộ nhớ đệm Provider** — các provider hiện được lưu vào bộ nhớ đệm toàn trang thông qua bộ đếm phiên bản, ngăn chặn các vấn đề về provider cũ trên mạng multisite.
- **`ability_invalid_output`** — đã được khắc phục trên 12 handler ability; tất cả đều trả về các phản hồi JSON có cấu trúc đúng.
- **Pipeline `pending_client_tool_calls`** — đã được kết nối từ đầu đến cuối để các lệnh gọi công cụ phía client hoàn thành chính xác và trả kết quả về model.
- **Ngăn kéo lịch sử (History drawer)** — các thay đổi không thể hoàn tác đã được loại trừ khỏi danh sách hoàn tác; liên kết **View full history** giờ hoạt động chính xác.
- **Hệ thống Thay đổi/Hoàn tác** — năm lỗi riêng biệt đã được sửa và hợp nhất dưới giao diện quản trị mới.
- **Thông báo Lưu Settings** — thông báo snackbar giờ xuất hiện đáng tin cậy sau khi nhấp vào **Save Settings**.
- **Menu ngữ cảnh Thùng rác** — thêm tùy chọn **Delete Permanently** để các mục có thể bị xóa cứng mà không cần ở trong chế độ xem thùng rác.
- **Chỉnh sửa & Gửi lại** — nhấp vào icon chỉnh sửa giờ chỉ đưa vào chế độ chỉnh sửa cho tin nhắn được nhấp, chứ không phải tất cả các tin nhắn trong luồng.
- **Chiều cao bố cục Chat** — bảng chat tự điều chỉnh chiều cao khi nội dung được plugin chèn (thông báo admin, banner) xuất hiện phía trên trang, ngăn khu vực nhập liệu bị đẩy ra khỏi màn hình.

---

## 1.4.0 — Phát hành ngày 2026-04-09 {#140--released-on-2026-04-09}

### Tính năng mới {#new-1}

- **Lệnh benchmark WP-CLI** (`wp gratis-ai-agent benchmark`) — chạy bộ kiểm tra (benchmark suite) Agent Capabilities v1 từ dòng lệnh cho các quy trình CI và quy trình đánh giá model. Hỗ trợ chạy theo từng câu hỏi, ghi đè provider/model, và xuất kết quả JSON/CSV.
- **Bộ kiểm tra Agent Capabilities v1** — một bộ prompts phức tạp, có cấu trúc, nhiều bước để kiểm tra toàn bộ bề mặt ability, kèm theo tính điểm và báo cáo token/thời gian.
- **Khả năng Custom Post Type** — `register_post_type`, `list_post_types`, `delete_post_type`. Các đăng ký này được duy trì qua các lần khởi động bằng cách lưu vào bảng options.
- **Khả năng Custom Taxonomy** — `register_taxonomy`, `list_taxonomies`, `delete_taxonomy`. Hỗ trợ taxonomy phân cấp và phẳng với các rewrite slug tùy chọn.
- **Khả năng Design System** — `inject_custom_css`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `apply_theme_json_preset`. Bao gồm năm preset được tuyển chọn: `minimal-dark`, `warm-editorial`, `corporate-blue`, `vibrant-startup`, `classic-blog`.
- **Khả năng Global Styles** — `get_global_styles`, `set_global_styles`, `reset_global_styles`. Đọc và ghi các giá trị theme.json thông qua WordPress Global Styles API.
- **Khả năng quản lý Menu điều hướng** — `create_menu`, `update_menu`, `add_menu_item`, `remove_menu_item`, `list_menus`. Hỗ trợ menu lồng nhau và gán vị trí theme.
- **Khả năng quản lý Options** — `get_option`, `set_option`, `delete_option`, `list_options`. Bao gồm một khối danh sách đen an toàn tích hợp bảo vệ các tùy chọn WordPress quan trọng khỏi bị sửa đổi.
- **Registry Abilities có thể cài đặt** — `list_available_abilities`, `install_ability`, `recommend_plugin`. Khám phá và kích hoạt các gói ability được phân phối dưới dạng plugin WordPress.
- **Site Builder Orchestration v2** — `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`. Các kế hoạch xây dựng trang web đa giai đoạn với khám phá plugin, tham chiếu đầu ra bước, theo dõi tiến độ và tự động phục hồi lỗi.
- **Câu hỏi benchmark trang web nhà hàng** (`q-restaurant-website`) — kiểm tra end-to-end bao gồm đăng ký CPT, design system, navigation, và khám phá plugin.
- **Các plugin kết nối AI provider** được thêm vào các blueprint của WordPress Playground để thiết lập môi trường phát triển cục bộ nhanh hơn.

### Cải tiến {#improved-1}

- README được cập nhật với tài liệu và hướng dẫn thiết lập AI provider connector.

### Sửa lỗi {#fixed-1}

- 25 lỗi kiểm thử PHPUnit trên nhánh `main` đã được giải quyết.
- Định dạng URL GitHub releases trong `blueprint.json` đã được sửa.
- Đánh số lại Task ID để tránh xung đột với các ID cũ.

---

## 1.3.x {#13x}

_Các ghi chú phát hành trước đó được duy trì trong kho lưu trữ plugin._
