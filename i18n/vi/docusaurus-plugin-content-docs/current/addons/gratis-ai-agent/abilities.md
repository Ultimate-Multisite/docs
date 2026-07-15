---
title: Tham khảo Khả năng
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Tham chiếu Abilities

Abilities là các hành động nguyên tử mà Gratis AI Agent có thể gọi trên bản cài đặt WordPress của bạn. Mỗi ability là một lớp PHP đã đăng ký, hiển thị một schema JSON — agent đọc schema này lúc chạy để hiểu những tham số nào là bắt buộc và ability trả về gì.

Trang này ghi lại tất cả abilities đi kèm Gratis AI Agent v1.9.0.

---

## Loại bài viết tùy chỉnh {#custom-post-types}

Các abilities này quản lý các loại bài viết tùy chỉnh (CPT) được đăng ký thông qua agent. Các đăng ký được lưu vào bảng tùy chọn của WordPress để chúng vẫn tồn tại sau khi tắt và kích hoạt lại tiện ích mở rộng.

### `register_post_type` {#registerposttype}

Đăng ký một loại bài viết tùy chỉnh mới.

**Tham số**

| Tham số | Loại | Bắt buộc | Mô tả |
|---|---|---|---|
| `slug` | string | Có | Khóa loại bài viết (tối đa 20 ký tự, không chữ hoa, không khoảng trắng) |
| `singular_label` | string | Có | Tên số ít dễ đọc, ví dụ `Portfolio Item` |
| `plural_label` | string | Có | Tên số nhiều dễ đọc, ví dụ `Portfolio Items` |
| `public` | boolean | Không | Loại bài viết có thể được truy cập công khai hay không. Mặc định `true` |
| `supports` | array | Không | Các tính năng cần hỗ trợ: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Mặc định `["title","editor"]` |
| `has_archive` | boolean | Không | Trang lưu trữ của loại bài viết có được bật hay không. Mặc định `false` |
| `menu_icon` | string | Không | Lớp Dashicons hoặc URL cho biểu tượng menu quản trị. Mặc định `"dashicons-admin-post"` |
| `rewrite_slug` | string | Không | URL slug cho loại bài viết. Mặc định là `slug` |

**Ví dụ**

```json
{
  "slug": "portfolio",
  "singular_label": "Portfolio Item",
  "plural_label": "Portfolio Items",
  "public": true,
  "supports": ["title", "editor", "thumbnail"],
  "has_archive": true,
  "menu_icon": "dashicons-portfolio"
}
```

**Trả về** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Trả về tất cả các loại bài viết tùy chỉnh được agent đăng ký.

**Tham số** — không có

**Trả về**

```json
{
  "post_types": [
    {
      "slug": "portfolio",
      "singular_label": "Portfolio Item",
      "plural_label": "Portfolio Items",
      "public": true
    }
  ]
}
```

---

### `delete_post_type` {#deleteposttype}

Hủy đăng ký một loại bài viết tùy chỉnh đã được agent đăng ký trước đó. Các bài viết hiện có thuộc loại đó vẫn còn trong cơ sở dữ liệu nhưng không còn có thể truy cập thông qua loại bài viết.

**Tham số**

| Tham số | Loại | Bắt buộc | Mô tả |
|---|---|---|---|
| `slug` | string | Có | Khóa loại bài viết cần xóa |

**Trả về** `{ "success": true, "slug": "portfolio" }`

---

## Phân loại tùy chỉnh {#custom-taxonomies}

Các abilities này quản lý các phân loại tùy chỉnh. Giống như CPT, các đăng ký phân loại được lưu lại.

### `register_taxonomy` {#registertaxonomy}

Đăng ký một phân loại tùy chỉnh mới.

**Tham số**

| Tham số | Loại | Bắt buộc | Mô tả |
|---|---|---|---|
| `slug` | string | Có | Khóa phân loại (tối đa 32 ký tự) |
| `singular_label` | string | Có | Tên số ít dễ đọc, ví dụ `Project Category` |
| `plural_label` | string | Có | Tên số nhiều dễ đọc, ví dụ `Project Categories` |
| `post_types` | array | Có | Các slug loại bài viết mà phân loại này nên được gắn vào |
| `hierarchical` | boolean | Không | `true` cho kiểu danh mục, `false` cho kiểu thẻ. Mặc định `true` |
| `public` | boolean | Không | Các term có thể được truy cập công khai hay không. Mặc định `true` |
| `rewrite_slug` | string | Không | URL slug cho phân loại. Mặc định là `slug` |

**Ví dụ**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Trả về** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Trả về tất cả các phân loại tùy chỉnh được agent đăng ký.

**Tham số** — không có

**Trả về**

```json
{
  "taxonomies": [
    {
      "slug": "project-category",
      "singular_label": "Project Category",
      "post_types": ["portfolio"],
      "hierarchical": true
    }
  ]
}
```

---

### `delete_taxonomy` {#deletetaxonomy}

Hủy đăng ký một phân loại tùy chỉnh đã được agent đăng ký trước đó.

**Tham số**

| Tham số | Loại | Bắt buộc | Mô tả |
|---|---|---|---|
| `slug` | string | Có | Khóa phân loại cần xóa |

**Trả về** `{ "success": true, "slug": "project-category" }`

---

## Hệ thống thiết kế {#design-system}

Các abilities của hệ thống thiết kế sửa đổi phần trình bày trực quan của site WordPress — từ CSS tùy chỉnh đến các mẫu block và logo của site.

### `inject_custom_css` {#injectcustomcss}

Nối CSS vào `<head>` của site thông qua `wp_add_inline_style`. CSS được lưu trong tùy chọn `gratis_ai_agent_custom_css` và được bỏ khỏi hàng đợi một cách sạch sẽ khi ability được đặt lại.

**Tham số**

| Tham số | Loại | Bắt buộc | Mô tả |
|---|---|---|---|
| `css` | string | Có | CSS hợp lệ để chèn vào |
| `label` | string | Không | Nhãn dễ đọc cho khối CSS này, được dùng trong nhật ký gỡ lỗi. Mặc định `"agent-injected"` |
| `replace` | boolean | Không | Nếu `true`, thay thế tất cả CSS đã chèn trước đó. Mặc định `false` (nối thêm) |

**Ví dụ**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Trả về** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Đăng ký một mẫu block có thể tái sử dụng trong thư viện mẫu WordPress.

**Tham số**

| Tham số | Loại | Bắt buộc | Mô tả |
|---|---|---|---|
| `slug` | string | Có | Mã định danh mẫu, ví dụ `gratis/hero-dark` |
| `title` | string | Có | Tên mẫu dễ đọc được hiển thị trong trình chỉnh sửa |
| `content` | string | Có | Đánh dấu block đã tuần tự hóa (HTML) cho mẫu |
| `categories` | array | Không | Các slug danh mục mẫu, ví dụ `["featured", "hero"]` |
| `description` | string | Không | Mô tả ngắn được hiển thị trong bộ chọn mẫu |
| `keywords` | array | Không | Từ khóa tìm kiếm |

**Trả về** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Liệt kê tất cả các mẫu block được agent đăng ký.

**Tham số** — không có

**Trả về**

```json
{
  "patterns": [
    {
      "slug": "gratis/hero-dark",
      "title": "Dark Hero",
      "categories": ["hero"]
    }
  ]
}
```

---

### `set_site_logo` {#setsitelogo}

Đặt logo trang WordPress thành một attachment ID đã cho hoặc một URL hình ảnh từ xa. Khi cung cấp URL, hình ảnh sẽ được tải xuống và nhập vào Media Library.

**Tham số**

| Tham số | Kiểu | Bắt buộc | Mô tả |
|---|---|---|---|
| `attachment_id` | integer | Không | ID của một tệp đính kèm Media Library hiện có |
| `url` | string | Không | URL hình ảnh từ xa để nhập và đặt làm logo |

Phải cung cấp một trong hai `attachment_id` hoặc `url`.

**Trả về** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Áp dụng một preset màu sắc/kiểu chữ có tên cho `theme.json` (hoặc `global-styles`) của theme đang hoạt động. Các preset là những gói được tuyển chọn do đội ngũ Gratis AI Agent duy trì.

**Tham số**

| Tham số | Kiểu | Bắt buộc | Mô tả |
|---|---|---|---|
| `preset` | string | Có | Tên preset, ví dụ `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Không | Nếu là `true`, hợp nhất với các giá trị hiện có thay vì thay thế. Mặc định là `false` |

**Preset có sẵn**

| Preset | Mô tả |
|---|---|
| `minimal-dark` | Nền gần như đen, chữ trắng, một màu nhấn duy nhất |
| `warm-editorial` | Nền trắng ngà ấm, tiêu đề serif, các màu nhấn tông đất |
| `corporate-blue` | Bảng màu xanh navy và trắng với kiểu chữ chuyên nghiệp |
| `vibrant-startup` | Gradient tươi sáng, góc bo tròn, kiểu chữ sans-serif hiện đại |
| `classic-blog` | Xám trung tính, chiều cao dòng dễ đọc, khoảng cách bố cục truyền thống |

**Trả về** `{ "success": true, "preset": "minimal-dark" }`

---

## Kiểu toàn cục {#global-styles}

Các khả năng Kiểu toàn cục đọc và ghi các giá trị theme.json thông qua WordPress Global Styles API, ảnh hưởng đến tất cả các block và template trên toàn trang.

### `get_global_styles` {#getglobalstyles}

Trả về cấu hình kiểu toàn cục hiện tại.

**Tham số**

| Tham số | Kiểu | Bắt buộc | Mô tả |
|---|---|---|---|
| `path` | string | Không | Con trỏ JSON đến một giá trị cụ thể, ví dụ `/color/palette` hoặc `/typography/fontSizes`. Trả về toàn bộ đối tượng nếu bỏ qua. |

**Trả về** toàn bộ đối tượng kiểu toàn cục hoặc giá trị tại `path`.

---

### `set_global_styles` {#setglobalstyles}

Cập nhật một hoặc nhiều giá trị trong cấu hình kiểu toàn cục.

**Tham số**

| Tham số | Kiểu | Bắt buộc | Mô tả |
|---|---|---|---|
| `path` | string | Có | Con trỏ JSON đến giá trị cần đặt, ví dụ `/color/palette` |
| `value` | any | Có | Giá trị mới |

**Ví dụ** — thêm một màu vào bảng màu

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Trả về** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Đặt lại tất cả thay đổi kiểu toàn cục do agent áp dụng, khôi phục mặc định của theme.

**Tham số** — không có

**Trả về** `{ "success": true }`

---

## Menu điều hướng {#navigation-menus}

Các khả năng Menu điều hướng tạo và quản lý menu điều hướng WordPress cùng các mục của chúng.

### `create_menu` {#createmenu}

Tạo một menu điều hướng WordPress mới.

**Tham số**

| Tham số | Kiểu | Bắt buộc | Mô tả |
|---|---|---|---|
| `name` | string | Có | Tên menu, ví dụ `Primary Navigation` |
| `location` | string | Không | Vị trí theme để gán menu này vào, ví dụ `primary` |

**Trả về** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Đổi tên một menu hoặc gán lại nó vào một vị trí theme.

**Tham số**

| Tham số | Kiểu | Bắt buộc | Mô tả |
|---|---|---|---|
| `menu_id` | integer | Có | ID của menu cần cập nhật |
| `name` | string | Không | Tên menu mới |
| `location` | string | Không | Vị trí theme để gán hoặc gán lại |

**Trả về** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Thêm một mục vào menu điều hướng hiện có.

**Tham số**

| Tham số | Kiểu | Bắt buộc | Mô tả |
|---|---|---|---|
| `menu_id` | integer | Có | ID của menu đích |
| `type` | string | Có | Kiểu mục: `custom`, `post_type`, hoặc `taxonomy` |
| `title` | string | Không | Nhãn cho mục menu (bắt buộc đối với kiểu `custom`) |
| `url` | string | Không | URL cho các mục `custom` |
| `object_id` | integer | Không | Post ID hoặc term ID cho các mục `post_type`/`taxonomy` |
| `parent_id` | integer | Không | ID mục menu để lồng mục này bên dưới |
| `position` | integer | Không | Vị trí bắt đầu từ số không trong menu |

**Trả về** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Xóa một mục khỏi menu điều hướng.

**Tham số**

| Tham số | Kiểu | Bắt buộc | Mô tả |
|---|---|---|---|
| `item_id` | integer | Có | ID mục menu cần xóa |

**Trả về** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Liệt kê tất cả menu điều hướng WordPress, bao gồm các vị trí theme đã được gán của chúng.

**Tham số** — không có

**Trả về**

```json
{
  "menus": [
    {
      "menu_id": 7,
      "name": "Primary Navigation",
      "location": "primary",
      "item_count": 5
    }
  ]
}
```

---

## Quản lý tùy chọn {#options-management}

Các khả năng tùy chọn đọc và ghi tùy chọn WordPress thông qua `get_option` / `update_option`. Một danh sách chặn an toàn tích hợp ngăn việc vô tình sửa đổi các cài đặt quan trọng.

### `get_option` {#getoption}

Đọc một tùy chọn WordPress.

**Tham số**

| Tham số | Kiểu | Bắt buộc | Mô tả |
|---|---|---|---|
| `option_name` | string | Có | Khóa tùy chọn, ví dụ `blogname` |

**Trả về** `{ "option_name": "blogname", "value": "My Site" }`

Trả về lỗi nếu `option_name` nằm trong danh sách chặn an toàn.

---

### `set_option` {#setoption}

Ghi một tùy chọn WordPress.

**Tham số**

| Tham số | Kiểu | Bắt buộc | Mô tả |
|---|---|---|---|
| `option_name` | string | Có | Khóa tùy chọn |
| `value` | any | Có | Giá trị mới (được tuần tự hóa tự động cho mảng/đối tượng) |
| `autoload` | string | Không | `"yes"` hoặc `"no"`. Mặc định giữ nguyên cài đặt autoload hiện có |

Trả về lỗi nếu `option_name` nằm trong danh sách chặn an toàn.

**Trả về** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Xóa một tùy chọn WordPress.

**Tham số**

| Tham số | Kiểu | Bắt buộc | Mô tả |
|---|---|---|---|
| `option_name` | string | Có | Khóa tùy chọn cần xóa |

Trả về lỗi nếu `option_name` nằm trong danh sách chặn an toàn.

**Trả về** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Liệt kê các tùy chọn WordPress khớp với một mẫu.

**Tham số**

| Tham số | Kiểu | Bắt buộc | Mô tả |
|---|---|---|---|
| `pattern` | string | Không | Mẫu SQL LIKE để lọc tên tùy chọn, ví dụ `gratis_%`. Trả về tất cả tùy chọn nếu bị bỏ qua (hãy thận trọng khi dùng trên cơ sở dữ liệu lớn). |
| `limit` | integer | Không | Số lượng kết quả tối đa. Mặc định `50`, tối đa `500` |

**Trả về**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Quản lý nội dung {#content-management}

Các khả năng Quản lý nội dung tạo và chỉnh sửa bài viết và trang WordPress. ID bài viết được trả về để các bước tiếp theo trong kế hoạch nhiều khả năng có thể tham chiếu nội dung đã tạo.

### `create_post` {#createpost}

Tạo một bài viết WordPress, trang hoặc mục kiểu bài viết tùy chỉnh mới.

**Tham số**

| Tham số | Kiểu | Bắt buộc | Mô tả |
|---|---|---|---|
| `title` | string | Có | Tiêu đề bài viết |
| `content` | string | Không | Nội dung bài viết — chấp nhận văn bản thuần, HTML hoặc đánh dấu block đã tuần tự hóa |
| `status` | string | Không | `draft`, `publish`, `pending`, `private`. Mặc định `draft` |
| `post_type` | string | Không | Slug kiểu bài viết, ví dụ `post`, `page`, hoặc bất kỳ CPT đã đăng ký nào. Mặc định `post` |
| `excerpt` | string | Không | Tóm tắt ngắn hiển thị trong lưu trữ và kết quả tìm kiếm |
| `categories` | array | Không | Mảng tên hoặc ID danh mục để gán |
| `tags` | array | Không | Mảng tên hoặc ID thẻ để gán |
| `author` | integer | Không | ID người dùng WordPress để đặt làm tác giả bài viết. Mặc định là người dùng hiện tại |
| `date` | string | Không | Ngày xuất bản ở định dạng ISO 8601, ví dụ `2026-05-01T09:00:00` |
| `page_template` | string | Không | Tệp mẫu để gán cho bài viết hoặc trang này, ví dụ `page-full-width.php`. Chỉ có ý nghĩa khi `post_type` là `page` hoặc một CPT hỗ trợ mẫu trang. |

**Ví dụ**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Trả về** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Cập nhật một bài viết hoặc trang WordPress hiện có.

**Tham số**

| Tham số | Kiểu | Bắt buộc | Mô tả |
|---|---|---|---|
| `post_id` | integer | Có | ID của bài viết cần cập nhật |
| `title` | string | Không | Tiêu đề bài viết mới |
| `content` | string | Không | Nội dung bài viết mới |
| `status` | string | Không | Trạng thái mới: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Không | Đoạn trích mới |
| `categories` | array | Không | Thay thế toàn bộ danh sách danh mục bằng mảng tên hoặc ID này |
| `tags` | array | Không | Thay thế toàn bộ danh sách thẻ bằng mảng tên hoặc ID này |
| `page_template` | string | Không | Tệp mẫu mới để gán cho bài viết hoặc trang này, ví dụ `page-full-width.php`. Truyền một chuỗi rỗng để xóa việc gán mẫu và hoàn nguyên về mặc định của theme. |

**Ví dụ** — thay đổi mẫu sau khi tạo

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Trả về** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Tạo nhiều bài viết trong một lần gọi khả năng duy nhất, giảm số lượt trao đổi trong quá trình xây dựng site hoặc nhập nội dung hàng loạt. Các bài viết được tạo theo thứ tự; nếu một bài viết thất bại, các bài viết khác vẫn tiếp tục và lỗi được báo cáo trong mảng kết quả.

**Tham số**

| Tham số | Kiểu | Bắt buộc | Mô tả |
|---|---|---|---|
| `posts` | array | Có | Mảng các đối tượng bài viết, mỗi đối tượng chấp nhận cùng các tham số như `create_post` |
| `stop_on_error` | boolean | Không | Nếu `true`, dừng xử lý sau lỗi đầu tiên. Mặc định `false` |

**Ví dụ**

```json
{
  "posts": [
    {
      "title": "About Us",
      "post_type": "page",
      "status": "publish",
      "page_template": "page-full-width.php"
    },
    {
      "title": "Services",
      "post_type": "page",
      "status": "publish"
    },
    {
      "title": "Contact",
      "post_type": "page",
      "status": "publish"
    }
  ]
}
```

**Trả về**

```json
{
  "created": 3,
  "failed": 0,
  "results": [
    { "success": true, "post_id": 42, "title": "About Us" },
    { "success": true, "post_id": 43, "title": "Services" },
    { "success": true, "post_id": 44, "title": "Contact" }
  ]
}
```

---

### `set_featured_image` {#setfeaturedimage}

Gán ảnh đại diện (ảnh thu nhỏ bài viết) cho một bài viết hoặc trang hiện có. Chấp nhận ID tệp đính kèm Media Library hiện có hoặc URL ảnh từ xa; khi cung cấp URL, ảnh sẽ được tải xuống và nhập tự động.

**Tham số**

| Tham số | Kiểu | Bắt buộc | Mô tả |
|---|---|---|---|
| `post_id` | integer | Có | ID của bài viết hoặc trang cần cập nhật |
| `attachment_id` | integer | Không | ID của tệp đính kèm Media Library hiện có |
| `url` | string | Không | URL ảnh từ xa để nhập và đặt làm ảnh đại diện |
| `alt_text` | string | Không | Văn bản thay thế để áp dụng cho tệp đính kèm nếu nó được nhập từ URL |

Phải cung cấp một trong hai `attachment_id` hoặc `url`.

**Trả về** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Tạo biểu mẫu liên hệ bằng plugin biểu mẫu đang hoạt động (Contact Form 7, WPForms, Fluent Forms hoặc Gravity Forms, tùy thuộc vào plugin nào được cài đặt). Trả về một shortcode có thể được nhúng vào bất kỳ bài viết hoặc trang nào.

**Tham số**

| Tham số | Kiểu | Bắt buộc | Mô tả |
|---|---|---|---|
| `title` | string | Có | Tên biểu mẫu hiển thị trong phần quản trị plugin biểu mẫu |
| `fields` | array | Có | Danh sách có thứ tự các trường biểu mẫu (xem đối tượng Trường bên dưới) |
| `recipient` | string | Không | Địa chỉ email để nhận các lượt gửi. Mặc định là email quản trị WordPress |
| `subject` | string | Không | Dòng chủ đề email. Hỗ trợ các placeholder `[your-name]` và `[your-subject]` khi dùng Contact Form 7 |
| `confirmation_message` | string | Không | Thông báo hiển thị sau khi gửi thành công. Mặc định: `"Thank you for your message. We'll be in touch soon."` |

**Đối tượng trường**

| Khóa | Kiểu | Bắt buộc | Mô tả |
|---|---|---|---|
| `name` | string | Có | Tên trường nội bộ / khóa máy |
| `label` | string | Có | Nhãn dễ đọc hiển thị trên biểu mẫu |
| `type` | string | Có | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Không | Trường có bắt buộc phải được điền trước khi gửi hay không. Mặc định `false` |
| `options` | array | Không | Tùy chọn cho các trường `select`, `checkbox` và `radio` |
| `placeholder` | string | Không | Văn bản placeholder cho các ô nhập kiểu văn bản |

**Ví dụ**

```json
{
  "title": "Restaurant Booking Enquiry",
  "fields": [
    { "name": "your-name",    "label": "Name",             "type": "text",     "required": true },
    { "name": "your-email",   "label": "Email",            "type": "email",    "required": true },
    { "name": "party-size",   "label": "Party size",       "type": "select",   "options": ["1–2", "3–5", "6–10", "10+"] },
    { "name": "your-message", "label": "Special requests", "type": "textarea", "required": false }
  ],
  "recipient": "bookings@example.com",
  "subject": "New booking enquiry from [your-name]"
}
```

**Trả về**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Visual Review {#visual-review}

Các khả năng Visual Review cho phép agent chụp ảnh màn hình các trang trực tiếp và phân tích chúng, hỗ trợ đánh giá thiết kế tự động, so sánh trước/sau và kiểm tra hồi quy trực quan mà không cần bất kỳ tiện ích mở rộng trình duyệt nào.

### `capture_screenshot` {#capturescreenshot}

Chụp ảnh màn hình một trang WordPress tại URL đã cho bằng trình duyệt headless phía máy chủ. Hình ảnh được lưu vào Media Library và một URL CDN được trả về.

**Tham số**

| Tham số | Kiểu | Bắt buộc | Mô tả |
|---|---|---|---|
| `url` | string | Có | URL đầy đủ của trang cần chụp ảnh màn hình, ví dụ `https://example.com/about/` |
| `width` | integer | Không | Chiều rộng viewport tính bằng pixel. Mặc định `1280` |
| `height` | integer | Không | Chiều cao viewport tính bằng pixel. Mặc định `800` |
| `full_page` | boolean | Không | Chụp toàn bộ trang có thể cuộn thay vì chỉ viewport. Mặc định `false` |
| `delay_ms` | integer | Không | Số mili giây chờ sau khi tải trang trước khi chụp, hữu ích cho nội dung động. Mặc định `500` |
| `label` | string | Không | Nhãn dễ đọc được lưu cùng tệp đính kèm trong Media Library |

**Trả về**

```json
{
  "success": true,
  "attachment_id": 88,
  "url": "https://example.com/wp-content/uploads/2026/04/screenshot-about.png",
  "width": 1280,
  "height": 800
}
```

---

### `compare_screenshots` {#comparescreenshots}

Nhận hai ảnh chụp màn hình và trả về điểm khác biệt trực quan cùng một ảnh khác biệt làm nổi bật các vùng đã thay đổi. Hữu ích để xác nhận rằng một thay đổi thiết kế đã tạo ra kết quả mong đợi hoặc để phát hiện các hồi quy ngoài ý muốn.

**Tham số**

| Tham số | Kiểu | Bắt buộc | Mô tả |
|---|---|---|---|
| `before_url` | string | Có | URL của trang cần chụp làm trạng thái "trước" |
| `after_url` | string | Có | URL của trang cần chụp làm trạng thái "sau". Có thể là cùng một URL nếu so sánh theo thời gian |
| `width` | integer | Không | Chiều rộng viewport cho cả hai lần chụp. Mặc định `1280` |
| `threshold` | float | Không | Ngưỡng khác biệt pixel (0.0–1.0). Các pixel nằm trong dung sai này được xem là không thay đổi. Mặc định `0.1` |

**Trả về**

```json
{
  "success": true,
  "diff_score": 0.04,
  "changed_pixels": 2340,
  "total_pixels": 1024000,
  "diff_attachment_id": 91,
  "diff_url": "https://example.com/wp-content/uploads/2026/04/diff-about.png"
}
```

`diff_score` bằng `0.0` nghĩa là không có thay đổi hiển thị; `1.0` nghĩa là mọi pixel đều thay đổi.

---

### `review_page_design` {#reviewpagedesign}

Chụp ảnh màn hình của một trang và gửi đến mô hình ngôn ngữ để phân tích trực quan. Trả về một đánh giá có cấu trúc bao gồm bố cục, kiểu chữ, cách sử dụng màu sắc và các mối quan ngại về khả năng truy cập.

**Tham số**

| Tham số | Kiểu | Bắt buộc | Mô tả |
|---|---|---|---|
| `url` | string | Có | URL đầy đủ của trang cần đánh giá |
| `focus` | string | Không | Danh sách phân tách bằng dấu phẩy các khu vực đánh giá cần nhấn mạnh: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Mặc định: tất cả khu vực |
| `width` | integer | Không | Chiều rộng viewport. Mặc định `1280` |

**Trả về**

```json
{
  "success": true,
  "screenshot_url": "https://example.com/wp-content/uploads/2026/04/review-about.png",
  "assessment": {
    "overall": "The page structure is clean and readable. Two accessibility issues detected.",
    "layout": "Good visual hierarchy. Hero section is prominent.",
    "typography": "Body text is 15px — consider increasing to 16px for readability.",
    "colour": "Contrast ratio on the CTA button (#fff on #4a90e2) is 3.1:1 — below the WCAG AA threshold of 4.5:1.",
    "accessibility": ["Low contrast on CTA button", "Missing alt text on hero image"],
    "suggestions": ["Darken the CTA button to #1a5cb0 to pass WCAG AA", "Add descriptive alt text to the hero image"]
  }
}
```

---

## Khả năng có thể cài đặt {#installable-abilities}

Registry Khả năng có thể cài đặt cho phép bạn mở rộng agent bằng các gói khả năng bổ sung được phân phối dưới dạng plugin WordPress. Mỗi gói đăng ký một hoặc nhiều khả năng bằng API khả năng tiêu chuẩn.

### `list_available_abilities` {#listavailableabilities}

Trả về danh mục các gói khả năng có sẵn để cài đặt từ registry.

**Tham số**

| Tham số | Kiểu | Bắt buộc | Mô tả |
|---|---|---|---|
| `category` | string | Không | Lọc theo danh mục: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Trả về**

```json
{
  "packs": [
    {
      "slug": "gratis-ai-agent-woocommerce",
      "name": "WooCommerce Abilities",
      "category": "ecommerce",
      "version": "1.0.0",
      "abilities": ["create_product", "update_pricing", "manage_inventory"],
      "installed": false
    }
  ]
}
```

---

### `install_ability` {#installability}

Tải xuống và kích hoạt một gói khả năng từ registry.

**Tham số**

| Tham số | Kiểu | Bắt buộc | Mô tả |
|---|---|---|---|
| `slug` | string | Có | Slug của plugin gói khả năng |

**Trả về** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Truy vấn registry khả năng để tìm plugin tốt nhất cho một trường hợp sử dụng được mô tả và, tùy chọn, cài đặt plugin đó.

**Tham số**

| Tham số | Kiểu | Bắt buộc | Mô tả |
|---|---|---|---|
| `description` | string | Có | Mô tả bằng ngôn ngữ tự nhiên về chức năng mong muốn |
| `install` | boolean | Không | Nếu là `true`, cài đặt plugin được đề xuất ngay lập tức. Mặc định là `false` |

**Ví dụ**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Trả về**

```json
{
  "recommendation": {
    "slug": "contact-form-7",
    "name": "Contact Form 7",
    "reason": "Widely adopted, supports file uploads, and integrates with Akismet for spam filtering.",
    "alternatives": ["wpforms-lite", "fluent-forms"]
  }
}
```
