---
title: Tác nhân tích hợp sẵn
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Các Agent Tích Hợp

Gratis AI Agent v1.9.0 đi kèm năm agent tích hợp sẵn. Mỗi agent được cấu hình sẵn với một bộ công cụ tập trung, một system prompt được tùy chỉnh, và các gợi ý khởi đầu phù hợp với các tác vụ phổ biến trong lĩnh vực đó. Việc chuyển đổi giữa các agent sẽ thay đổi khả năng và cách phản hồi của trợ lý — mà bạn không cần cấu hình gì cả.

## Agent là gì?

Mỗi agent là một hồ sơ cấu hình có tên, kết hợp các yếu tố sau:

- **Tools (Công cụ)** — các khả năng mà agent được phép gọi (ví dụ: Content Writer có quyền truy cập các khả năng tạo bài viết; Design Studio có quyền truy cập các khả năng CSS và theme.json).
- **System prompt (Lời nhắc hệ thống)** — các hướng dẫn thiết lập giọng điệu, ưu tiên và giới hạn của agent.
- **Suggestions (Gợi ý)** — các lời nhắc được viết sẵn hiển thị trong giao diện chat để giúp bạn bắt đầu nhanh chóng.

## Cách truy cập Agent Picker

1. Mở bảng **Gratis AI Agent** trong thanh sidebar quản trị WordPress.
2. Nhấp vào **biểu tượng agent** ở góc trên bên trái của tiêu đề chat (biểu tượng sẽ thay đổi để phản ánh agent đang hoạt động).
3. **Agent Picker** sẽ mở ra dưới dạng lớp phủ bảng biểu. Mỗi agent được liệt kê cùng với biểu tượng, tên và mô tả một dòng.
4. Nhấp vào một hàng agent để kích hoạt nó. Tiêu đề chat sẽ cập nhật ngay lập tức.

Bạn cũng có thể chuyển đổi agent giữa chừng cuộc trò chuyện — system prompt của agent mới sẽ có hiệu lực từ tin nhắn tiếp theo.

## Năm Agent Tích Hợp

### Content Writer (Người Viết Nội Dung)

**Trọng tâm:** Tạo và chỉnh sửa bài viết, trang và form liên hệ.

**Các công cụ khả dụng:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Làm tốt những việc gì:**
- Soạn thảo và xuất bản bài blog từ một bản tóm tắt hoặc dàn ý.
- Tạo lô các trang đích (landing page) cho một trang web mới.
- Xây dựng các form liên hệ và yêu cầu tư vấn.
- Thiết lập ảnh đại diện (featured image) cho bài viết từ URL hoặc tìm kiếm.

**Gợi ý khởi đầu:**
- *Viết một bài blog dài 500 từ về lợi ích của WordPress multisite.*
- *Tạo trang Giới thiệu, Dịch vụ và Liên hệ và xuất bản chúng.*
- *Thêm một form yêu cầu đặt lịch hẹn vào trang Liên hệ.*

---

### Site Builder (Trình Xây Dựng Trang Web)

**Trọng tâm:** Xây dựng trang web toàn diện từ một lời nhắc duy nhất.

**Các công cụ khả dụng:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Làm tốt những việc gì:**
- Tạo kế hoạch xây dựng trang web đa giai đoạn cho một loại hình kinh doanh được mô tả.
- Thực hiện từng giai đoạn một cách tự chủ — cấu trúc, nội dung, điều hướng, thiết kế.
- Khắc phục lỗi giữa chừng kế hoạch mà không cần can thiệp thủ công.
- Cài đặt các plugin được đề xuất như một phần của quá trình xây dựng.
- Tạo form liên hệ trực tiếp từ giao diện chat (Superdav AI Agent v1.10.0+).

**Gợi ý khởi đầu:**
- *Xây dựng một trang web portfolio nhiếp ảnh với loại bài viết gallery, trang đặt lịch hẹn và form liên hệ.*
- *Tạo một trang web nhà hàng với menu trực tuyến, giờ mở cửa và form yêu cầu đặt bàn.*
- *Thiết lập một trang web tư vấn tự do với các trang dịch vụ, phần portfolio và blog.*
- *Thêm form liên hệ vào trang Liên hệ bằng trình xây dựng trang web.*

---

### Design Studio (Studio Thiết Kế)

**Trọng tâm:** Tùy chỉnh trực quan — màu sắc, kiểu chữ, CSS và các mẫu khối (block patterns).

**Các công cụ khả dụng:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Làm tốt những việc gì:**
- Áp dụng các preset theme có tên (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog).
- Tinh chỉnh kiểu chữ và bảng màu toàn cục thông qua theme.json.
- Tiêm CSS tùy chỉnh để ghi đè các quy tắc dành riêng cho thương hiệu.
- Chụp ảnh màn hình một trang và xem xét các vấn đề về thiết kế.

**Gợi ý khởi đầu:**
- *Áp dụng preset warm-editorial và sau đó đặt màu chính thành #2d6a4f.*
- *Chụp ảnh màn hình trang chủ và cho tôi biết bạn sẽ cải thiện điều gì.*
- *Tạo một mẫu khối hero có thể tái sử dụng với hình nền toàn chiều rộng và tiêu đề ở giữa.*

---

### Plugin Manager (Trình Quản Lý Plugin)

**Trọng tâm:** Khám phá, cài đặt và quản lý các plugin WordPress.

**Các công cụ khả dụng:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Làm tốt những việc gì:**
- Đề xuất plugin tốt nhất cho một trường hợp sử dụng được mô tả.
- Cài đặt các gói khả năng (ability packs) từ registry.
- Duyệt qua danh mục khả năng có sẵn theo danh mục.

**Gợi ý khởi đầu:**
- *Plugin nào tốt nhất cho một thư mục thành viên (membership directory)?*
- *Cài đặt gói khả năng WooCommerce.*
- *Hiển thị tất cả các gói khả năng thương mại điện tử có sẵn.*

---

### Support Assistant (Trợ Lý Hỗ Trợ)

**Trọng tâm:** Trả lời các câu hỏi về nội dung trang web, cài đặt và cấu hình WordPress.

**Các công cụ khả dụng:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Làm tốt những việc gì:**
- Tra cứu các cài đặt và tùy chọn hiện tại của trang web.
- Giải thích các loại bài viết (post types), phân loại (taxonomies) và menu nào đã được cấu hình trên trang web.
- Trả lời các câu hỏi "cài đặt này dùng để làm gì?" bằng cách đọc các giá trị trực tiếp.
- Đóng vai trò là lớp chẩn đoán chỉ đọc (read-only) trước khi thực hiện thay đổi.

**Gợi ý khởi đầu:**
- *Hiện tại trang web này đang kích hoạt những plugin và cài đặt nào?*
- *Liệt kê tất cả các loại bài viết tùy chỉnh đã đăng ký trên trang web này.*
- *Các menu điều hướng nào tồn tại và chúng được gán ở đâu?*

---

## Tùy Chỉnh Agent

Mỗi agent tích hợp sẵn đều có thể được mở rộng hoặc thay thế thông qua bộ lọc `gratis_ai_agent_agents`.

### Thêm system prompt tùy chỉnh cho một agent hiện có

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Đăng ký một agent mới

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimises posts and pages for search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'You are an SEO specialist. Focus on keyword optimisation, meta descriptions, and structured data.',
        'suggestions'   => [
            'Review the homepage title and meta description.',
            'Suggest title tag improvements for the five most recent posts.',
        ],
    ];
    return $agents;
} );
```

Agent mới sẽ xuất hiện trong Agent Picker ngay sau khi bộ lọc chạy.

### Xóa một agent tích hợp sẵn

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
