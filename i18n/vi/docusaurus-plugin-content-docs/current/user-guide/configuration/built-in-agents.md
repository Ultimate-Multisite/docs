---
title: Tác nhân tích hợp sẵn
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# Tác nhân tích hợp sẵn {#built-in-agents}

Gratis AI Agent v1.9.0 đi kèm năm tác nhân tích hợp sẵn, mỗi tác nhân được cấu hình sẵn với một bộ công cụ tập trung, một system prompt được điều chỉnh riêng, và các gợi ý khởi đầu phù hợp với những tác vụ phổ biến trong lĩnh vực đó. Việc chuyển đổi giữa các tác nhân sẽ thay đổi những gì trợ lý có thể làm và cách trợ lý phản hồi — mà bạn không cần cấu hình gì cả. Superdav AI Agent v1.18.0 có thể bổ sung các công cụ nhận biết lịch trình, bản ghi nhắc nhở, cổng phê duyệt, và thông báo SMS vào các quy trình làm việc này khi các tích hợp liên quan được cấu hình.

## Tác nhân là gì? {#what-is-an-agent}

Mỗi tác nhân là một hồ sơ cấu hình có tên, kết hợp:

- **Công cụ** — những khả năng mà tác nhân được phép gọi (ví dụ: Content Writer có quyền truy cập các khả năng tạo bài viết; Design Studio có quyền truy cập các khả năng CSS và theme.json)
- **System prompt** — các hướng dẫn thiết lập giọng điệu, mức ưu tiên, và ràng buộc của tác nhân
- **Gợi ý** — các prompt viết sẵn được hiển thị trong giao diện trò chuyện để giúp bạn bắt đầu nhanh chóng

## Truy cập Agent Picker {#accessing-the-agent-picker}

1. Mở bảng **Gratis AI Agent** trong thanh bên quản trị WordPress.
2. Nhấp vào **biểu tượng tác nhân** ở góc trên bên trái của tiêu đề trò chuyện (biểu tượng thay đổi để phản ánh tác nhân đang hoạt động).
3. **Agent Picker** mở dưới dạng lớp phủ bảng biểu mẫu. Mỗi tác nhân được liệt kê kèm biểu tượng, tên, và mô tả một dòng.
4. Nhấp vào một hàng tác nhân để kích hoạt. Tiêu đề trò chuyện cập nhật ngay lập tức.

Bạn cũng có thể chuyển tác nhân giữa cuộc trò chuyện — system prompt của tác nhân mới sẽ có hiệu lực từ tin nhắn tiếp theo.

## Năm tác nhân tích hợp sẵn {#the-five-built-in-agents}

### Content Writer {#content-writer}

**Trọng tâm:** Tạo và chỉnh sửa bài viết, trang, và biểu mẫu liên hệ.

**Công cụ có sẵn:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Khi bật các tích hợp Superdav AI Agent v1.18.0, ngữ cảnh lịch đã cấu hình, cổng phê duyệt, lời nhắc, và công cụ thông báo SMS cũng có thể khả dụng cho các quy trình làm việc đã được phê duyệt.

**Làm tốt việc gì:**
- Soạn thảo và xuất bản bài viết blog từ bản tóm tắt hoặc dàn ý
- Tạo hàng loạt trang đích cho một trang web mới
- Xây dựng biểu mẫu liên hệ và yêu cầu thông tin
- Đặt ảnh đại diện cho bài viết từ URL hoặc tìm kiếm
- Soạn thảo tin nhắn theo dõi sau sự kiện từ ngữ cảnh Google Calendar đã cấu hình, sau đó tạm dừng để phê duyệt trước khi gửi thông báo

**Gợi ý khởi đầu:**
- *Viết một bài blog 500 từ về lợi ích của WordPress multisite.*
- *Tạo trang Giới thiệu, Dịch vụ, và Liên hệ rồi xuất bản chúng.*
- *Thêm một biểu mẫu yêu cầu đặt lịch vào trang Liên hệ.*
- *Soạn lời nhắc cho người tham dự sự kiện lịch đã cấu hình vào ngày mai và chờ phê duyệt trước khi gửi.*

---

### Site Builder {#site-builder}

**Trọng tâm:** Tạo trang web từ đầu đến cuối chỉ bằng một prompt.

**Công cụ có sẵn:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Với Superdav AI Agent v1.18.0, các công cụ dịch vụ được quản lý, phê duyệt, nhắc nhở, lịch, và SMS đã cấu hình có thể khả dụng ở nơi quản trị viên bật chúng.

**Làm tốt việc gì:**
- Tạo kế hoạch xây dựng trang web nhiều giai đoạn cho một loại hình kinh doanh được mô tả
- Tự động thực thi từng giai đoạn — cấu trúc, nội dung, điều hướng, thiết kế
- Khôi phục sau lỗi giữa kế hoạch mà không cần can thiệp thủ công
- Cài đặt các plugin được đề xuất như một phần của quá trình xây dựng
- Tạo biểu mẫu liên hệ trực tiếp từ giao diện trò chuyện (Superdav AI Agent v1.10.0+)
- Điều phối lời nhắc ra mắt hoặc theo dõi người tham dự mà không gửi thông báo trùng lặp khi cổng phê duyệt và bản ghi nhắc nhở được bật

**Gợi ý khởi đầu:**
- *Xây dựng một trang web portfolio nhiếp ảnh với loại bài viết thư viện ảnh, trang đặt lịch, và biểu mẫu liên hệ.*
- *Tạo một trang web nhà hàng với thực đơn trực tuyến, giờ mở cửa, và biểu mẫu yêu cầu đặt bàn.*
- *Thiết lập một trang web tư vấn tự do với các trang dịch vụ, phần portfolio, và blog.*
- *Thêm biểu mẫu liên hệ vào trang Liên hệ bằng trình tạo trang web.*
- *Sau khi danh sách kiểm tra ra mắt trang web được phê duyệt, gửi lời nhắc SMS đến liên hệ bên liên quan đã cấu hình.*

---

### Design Studio {#design-studio}

**Trọng tâm:** Tùy chỉnh trực quan — màu sắc, kiểu chữ, CSS, và mẫu khối.

**Công cụ có sẵn:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Làm tốt việc gì:**
- Áp dụng các preset theme có tên (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Tinh chỉnh kiểu chữ toàn cục và bảng màu thông qua theme.json
- Chèn CSS tùy chỉnh cho các ghi đè theo thương hiệu
- Chụp ảnh màn hình của một trang và xem xét các vấn đề thiết kế

**Gợi ý khởi đầu:**
- *Áp dụng preset warm-editorial rồi đặt màu chính thành #2d6a4f.*
- *Chụp ảnh màn hình trang chủ và cho tôi biết bạn sẽ cải thiện gì.*
- *Tạo một mẫu khối hero có thể tái sử dụng với ảnh nền toàn chiều rộng và tiêu đề căn giữa.*

### Plugin Manager {#plugin-manager}

**Trọng tâm:** Khám phá, cài đặt, và quản lý plugin WordPress.

**Công cụ có sẵn:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**Làm tốt việc gì:**
- Đề xuất plugin tốt nhất cho một trường hợp sử dụng được mô tả
- Cài đặt các gói khả năng từ registry
- Duyệt danh mục khả năng có sẵn theo danh mục

**Gợi ý khởi đầu:**
- *Plugin tốt nhất cho một thư mục thành viên là gì?*
- *Cài đặt gói khả năng WooCommerce.*
- *Hiển thị cho tôi tất cả các gói khả năng thương mại điện tử có sẵn.*

---

### Support Assistant {#support-assistant}

**Trọng tâm:** Trả lời câu hỏi về nội dung trang web, cài đặt, và cấu hình WordPress.

**Công cụ có sẵn:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**Những việc nó làm tốt:**
- Tra cứu các cài đặt và tùy chọn hiện tại của trang
- Giải thích các loại bài viết, taxonomy và menu nào được cấu hình trên trang
- Trả lời các câu hỏi “cài đặt này làm gì?” bằng cách đọc các giá trị trực tiếp
- Đóng vai trò như một lớp chẩn đoán chỉ đọc trước khi thực hiện thay đổi

**Gợi ý khởi đầu:**
- *Những plugin và cài đặt nào hiện đang hoạt động trên trang này?*
- *Liệt kê tất cả các loại bài viết tùy chỉnh được đăng ký trên trang này.*
- *Những menu điều hướng nào tồn tại và chúng được gán ở đâu?*

---

## Tích hợp tự động hóa Superdav {#superdav-automation-integrations}

Khi các tích hợp Superdav AI Agent v1.18.0 được cấu hình, các tác nhân tích hợp sẵn có thể tham gia vào các quy trình tự động hóa an toàn hơn và có nhận biết lịch trình:

- **Công cụ đọc Google Calendar** cho phép tác nhân kiểm tra các lịch và sự kiện đã cấu hình trước khi soạn thảo công việc tiếp theo.
- **Ánh xạ liên hệ và người tham dự** giúp khớp người tham gia sự kiện với người dùng WordPress hoặc các liên hệ đã biết.
- **Cổng phê duyệt của con người** tạm dừng các hành động nhạy cảm cho đến khi người dùng được ủy quyền xem xét và xác nhận chúng.
- **Bản ghi nhắc nhở** ngăn thông báo trùng lặp khi các tác vụ đã lên lịch thử lại hoặc lặp lại.
- **Thông báo SMS TextBee** chỉ gửi tin nhắn văn bản đã cấu hình khi thông tin xác thực SMS và quyền của quy trình làm việc được bật.

Quy trình được khuyến nghị: yêu cầu tác nhân chuẩn bị tin nhắn hoặc hành động, xem lại lời nhắc phê duyệt, sau đó cho phép hành động đã được phê duyệt tiếp tục. Đối với các lời nhắc định kỳ, hãy giữ bật tính năng loại bỏ trùng lặp lời nhắc để cùng một sự kiện hoặc liên hệ không bị thông báo lặp lại.

---

## Tùy chỉnh tác nhân {#customising-agents}

Mỗi tác nhân tích hợp sẵn có thể được mở rộng hoặc thay thế thông qua filter `gratis_ai_agent_agents`.

### Thêm system prompt tùy chỉnh vào một tác nhân hiện có {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Đăng ký một tác nhân mới {#registering-a-new-agent}

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

Tác nhân mới xuất hiện trong Bộ chọn tác nhân ngay sau khi filter chạy.

### Xóa một tác nhân tích hợp sẵn {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
