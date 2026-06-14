---
title: Agensi na-eme
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agents Có Sẵn

Gratis AI Agent v1.9.0 đi kèm với năm agent có sẵn, mỗi agent đều được thiết lập sẵn một bộ công cụ tập trung, một hướng dẫn hệ thống (system prompt) phù hợp và các gợi ý khởi đầu khớp với các tác vụ phổ biến trong lĩnh vực đó. Việc chuyển đổi giữa các agent sẽ thay đổi những gì trợ lý có thể làm và cách nó phản hồi — mà không cần bạn phải cấu hình gì cả.

## Agent là gì?

Mỗi agent là một hồ sơ cấu hình được đặt tên, kết hợp:

- **Tools (Công cụ)** — khả năng mà agent được phép sử dụng (ví dụ: một Content Writer có quyền tạo bài viết; một Design Studio có quyền truy cập vào CSS và theme.json).
- **System prompt (Hướng dẫn hệ thống)** — những chỉ dẫn thiết lập giọng điệu, ưu tiên và giới hạn của agent.
- **Suggestions (Gợi ý)** — các câu lệnh được viết sẵn hiển thị trong giao diện chat để giúp bạn bắt đầu nhanh chóng.

## Truy cập Bộ chọn Agent (Agent Picker)

1. Mở bảng điều khiển **Gratis AI Agent** trong thanh bên quản trị WordPress.
2. Nhấp vào **biểu tượng agent** ở góc trên bên trái của tiêu đề chat (biểu tượng sẽ thay đổi để phản ánh agent đang hoạt động).
3. **Agent Picker** sẽ mở ra dưới dạng một lớp phủ bảng biểu (form-table overlay). Mỗi agent được liệt kê với biểu tượng, tên và mô tả một dòng ngắn gọn.
4. Nhấp vào một hàng agent để kích hoạt nó. Tiêu đề chat sẽ cập nhật ngay lập tức.

Bạn cũng có thể chuyển đổi agent giữa cuộc trò chuyện — hướng dẫn hệ thống của agent mới sẽ có hiệu lực từ tin nhắn tiếp theo.

## Năm Agent Có Sẵn

### Content Writer (Người Viết Nội dung)

**Trọng tâm:** Tạo và chỉnh sửa bài viết, trang và biểu mẫu liên hệ.

**Các công cụ khả dụng:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**Ndi ọrụ ọma:**
- Ọkụzi na pubblic post blog n'ụmụ akụkọ (brief) ma ọ bụ outline
- Ṣietụ ụdị landing pages (landing pages) ndị dị ukwuu maka site ọhụrụ
- Ṣietụ amami contact na enquiry forms
- Ịkpọ image featured (featured images) n'ụmụ akụkọ nwere URL ma ọ bụ search

**Nchịkọta ọrụ:**
- *Kọ blog post nke 500 kata maka ihe ndị dị mkpa nke WordPress multisite.*
- *Ṣietụ About, Services, na Contact page ma ọ bụ create ha.*
- *Jụ form booking enquiry n'Contact page.*

---

### Site Builder (Nkwupụta Site)

**Fokus:** Ịkọwa site nchebe n'ụlọ (end-to-end website creation) n'ụzọ ọkụ maka prompt Ọ dị.

**Ihe ndị dị n'ime:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**Ndi ọrụ ọma:**
- Ịkọwa site nchebe n'ụlọ (multi-phase site build plan) maka uri dị nwere ike ịkpọ, ma ọ bụ ihe ndị dị mkpa.
- Ịkpọ mụmụ ọ bụla — structure, content, navigation, design — n'ụzọ ọkụ.
- Ịkpọ ahụ (recover from errors) mgbe ọrụ na-akpọ site anọ n'ụlọ ma ọ bụ ị chọrọ ịrụ ihe ọ bụla.
- Ṣietụ plugins ndị dị mma maka site anọ n'ime akụkọ site.
- Ịkpọ contact forms mgbe ọ bụla n'chat interface (Superdav AI Agent v1.10.0+).

**Nchịkọta ọrụ:**
- *Ṣietụ site portfolio pụrụ ego na post type gallery, booking page, na form contact.*
- *Create website maka restaurant nke mere online menu, akụkọ akụkọ (opening hours), na form enquiry table-booking.*
- *Set up site maka freelance consulting nwere service pages, section portfolio, na blog.*
- *Jụ form contact n'Contact page mgbe ọrụ Site Builder ahụ dị.*

---

### Design Studio (Atụmatụ Design)

**Fokus:** Ịkpọ ihe ndị dị ukwuu nke vizual — colour, typography, CSS, na block patterns.

**Nunọị tòò:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**Nke ọrụ iyi:**
- Ứbịka cácụ theme (như minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Nchebe typography na colour palettes global via theme.json
- Injecting custom CSS n'ụzọ ndị dị mma maka brand-specific overrides
- Ọrụ screenshot nke page na ịkọwa ya maka ihe ọ bụ design issues

**Nchịkọta ọrụ (Starter suggestions):**
- *Apply the warm-editorial preset and then set the primary colour to #2d6a4f.*
- *Take a screenshot of the homepage and tell me what you'd improve.*
- *Create a reusable hero block pattern with a full-width background image and centred heading.*

---

### Plugin Manager

**Fokus:** Ịkụzi, ịnweta, na ịgwara WordPress plugins.

**Nke ọrụ iyi:**
- Ọrụ plugin mgbe ọ dị mma maka ihe ị chọrọ
- Ịkụzi ability packs n'registry
- Ịgụ catalogue ability available by category

**Nchịkọta ọrụ (Starter suggestions):**
- *What's the best plugin for a membership directory?*
- *Install the WooCommerce abilities pack.*
- *Show me all available ecommerce ability packs.*

---

### Support Assistant

**Fokus:** Ịjawab ndị bụ ihe nkwado maka site content, settings, na WordPress configuration.

**Nke ọrụ iyi:**
- `get_option`
- `list_options`
- `list_post_types`
- `list_taxonomies`
- `list_menus`
- `list_available_abilities`

**Ndi nwere ike:**
- Na-eme ihe ndị a na-akọwa site (site settings) na maara.
- Na-eme ihe post types, taxonomies, na menus na-configure na site.
- Na-eme ihe "setting a ma ọ bụ ihe" na-eme ka ị chere giá trịa na-akụkọ (live values).
- Na-eme ihe na-eme ka ọ dị ka layer đọc-only (chỉ đọc) ọ bụrụ na ị ga-eme zmwarị.

**Ihe-ihe nwere ike ịgbanwe:**
- *Nke plugin na settings ndị a na-akụkọ site?*
- *Nri onye post types na taxonomies na-register na site.*
- *Nke navigation menus na-ere, ma ọ bụ ebe ndị a na-eme ka ha na-ere?*

---

## Ọrụ na Agent (Customising Agents)

Ka ọ bụ agent na-eme ka ị chụkwa (built-in), ị ga-akpọ (extend) ma ị ga-gbanwe ya dwụ (replace) ebe `gratis_ai_agent_agents` filter.

### Ịchịkwa system prompt ọhụrụ na agent onye na-eme ka o na-existence

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Ị-register agent ọhụrụ

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

Agent mới xuất hiện ngay sau khi bộ lọc chạy trong trình chọn Agent.

### Xóa một agent tích hợp sẵn

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
