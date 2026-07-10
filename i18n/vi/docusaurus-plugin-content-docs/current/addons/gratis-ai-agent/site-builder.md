---
title: Điều phối Site Builder v2
sidebar_position: 4
_i18n_hash: 3a3d15844b4a0751fc59ac3a4e1fb0c0
---
# Site Builder Orchestration v2 {#site-builder-orchestration-v2}

Site Builder Orchestration v2 (được giới thiệu trong Gratis AI Agent v1.4.0) là công cụ cốt lõi giúp tạo ra các trang web qua nhiều bước. Khi bạn yêu cầu agent "xây dựng một trang web nhà hàng" hoặc "tạo một portfolio kèm blog", bộ điều phối (orchestrator) sẽ chia mục tiêu tổng thể đó thành một **kế hoạch** có cấu trúc, tìm ra các plugin cần thiết để hoàn thành nó, thực hiện từng bước theo trình tự, theo dõi tiến độ và tự động khắc phục lỗi.

---

## Cách thức hoạt động {#how-it-works}

### 1. Tạo Kế hoạch (Plan Generation) {#1-plan-generation}

Khi agent nhận được yêu cầu xây dựng trang web, nó sẽ gọi khả năng `create_site_plan` để tạo ra một **kế hoạch trang web** định dạng JSON. Kế hoạch này mô tả:

- **Mục tiêu (Goal)** — trang web hoàn thiện cần làm gì
- **Các giai đoạn (Phases)** — các nhóm bước được sắp xếp theo thứ tự (ví dụ: _Thiết lập_, _Loại nội dung_, _Thiết kế_, _Nội dung_)
- **Các bước (Steps)** — các lời gọi khả năng (ability calls) riêng lẻ trong mỗi giai đoạn
- **Yêu cầu plugin (Plugin requirements)** — các plugin phải được kích hoạt để một số bước nhất định có thể chạy
- **Phương án dự phòng (Fallbacks)** — các bước thay thế nếu một bước chính bị lỗi

**Ví dụ về kế hoạch (rút gọn)**

```json
{
  "plan_id": "plan_restaurant_001",
  "goal": "Build a restaurant website with an online menu, booking form, and contact page",
  "phases": [
    {
      "id": "setup",
      "label": "Setup",
      "steps": [
        { "ability": "install_ability", "params": { "slug": "gratis-ai-agent-woocommerce" } },
        { "ability": "register_post_type", "params": { "slug": "menu-item", "singular_label": "Menu Item", "plural_label": "Menu Items" } },
        { "ability": "register_taxonomy", "params": { "slug": "menu-section", "singular_label": "Menu Section", "plural_label": "Menu Sections", "post_types": ["menu-item"] } }
      ]
    },
    {
      "id": "design",
      "label": "Design",
      "steps": [
        { "ability": "apply_theme_json_preset", "params": { "preset": "warm-editorial" } },
        { "ability": "inject_custom_css", "params": { "css": ".menu-item { border-radius: 8px; }", "label": "restaurant-ui" } }
      ]
    },
    {
      "id": "navigation",
      "label": "Navigation",
      "steps": [
        { "ability": "create_menu", "params": { "name": "Primary Navigation", "location": "primary" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Menu", "url": "/menu-items/" } },
        { "ability": "add_menu_item", "params": { "menu_id": "__ref:create_menu.menu_id", "type": "custom", "title": "Book a Table", "url": "/book/" } }
      ]
    }
  ],
  "plugin_requirements": [
    { "slug": "contact-form-7", "reason": "Required for the booking and contact forms" }
  ]
}
```

### 2. Khám phá Plugin (Plugin Discovery) {#2-plugin-discovery}

Trước khi thực thi, bộ điều phối sẽ quét các `plugin_requirements` trong kế hoạch và kiểm tra xem những plugin nào đã được kích hoạt. Đối với các plugin bị thiếu, nó sẽ:

1. Tìm kiếm trong registry bằng `recommend_plugin` để tìm sự phù hợp tốt nhất
2. Yêu cầu agent xác nhận đề xuất
3. Kích hoạt cài đặt nếu được chấp thuận (hoặc nếu tự động cài đặt được bật trong cài đặt)

Việc khám phá plugin thất bại không gây lỗi nghiêm trọng — bộ điều phối sẽ đánh dấu các bước bị ảnh hưởng là `skipped` (bỏ qua) và tiếp tục với phần còn lại của kế hoạch.

### 3. Thực thi Kế hoạch (Plan Execution) {#3-plan-execution}

Bộ điều phối gọi `execute_site_plan` với ID kế hoạch. Việc thực thi diễn ra theo từng giai đoạn, từng bước:

- **Tham chiếu bước (Step references)** (`__ref:` tiền tố) — các bước có thể tham chiếu đến kết quả đầu ra từ các bước trước đó. Trong ví dụ trên, `__ref:create_menu.menu_id` được giải quyết thành `menu_id` được trả về bởi bước `create_menu`.
- **Các bước song song (Parallel steps)** — các bước trong cùng một giai đoạn mà không phụ thuộc lẫn nhau sẽ được gửi đi đồng thời khi cờ `parallel` được đặt.
- **Thời gian chờ bước (Step timeout)** — mỗi bước có một thời gian chờ riêng (mặc định: cài đặt `Ability Timeout`). Một bước hết thời gian chờ sẽ được đánh dấu là `failed` (thất bại) và kế hoạch vẫn tiếp tục.

### 4. Theo dõi Tiến độ (Progress Tracking) {#4-progress-tracking}

Gọi `get_plan_progress` bất cứ lúc nào để kiểm tra trạng thái thực thi:

```json
{
  "plan_id": "plan_restaurant_001",
  "status": "in_progress",
  "phases_total": 4,
  "phases_complete": 2,
  "steps_total": 14,
  "steps_complete": 8,
  "steps_failed": 1,
  "steps_skipped": 0,
  "current_step": "add_menu_item",
  "elapsed_seconds": 42
}
```

Người dùng WP-CLI có thể theo dõi tiến độ bằng lệnh:

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### 5. Khắc phục Lỗi (Error Recovery) {#5-error-recovery}

Khi một bước thất bại, bộ điều phối sẽ kiểm tra xem có **phương án dự phòng (fallback)** nào được định nghĩa trong kế hoạch hay không:

- **Có phương án dự phòng** — bước dự phòng sẽ được thử ngay lập tức. Nếu nó thành công, việc thực thi sẽ tiếp tục. Nếu nó cũng thất bại, bước đó sẽ được đánh dấu là `failed` và việc thực thi vẫn tiếp tục với bước tiếp theo.
- **Không có phương án dự phòng** — bước đó sẽ được đánh dấu là `failed`. Các bước không quan trọng sẽ bị bỏ qua; các bước quan trọng (được đánh dấu `required: true`) sẽ dừng giai đoạn hiện tại và kích hoạt nỗ lực phục hồi ở cấp độ giai đoạn.

Agent sẽ báo cáo tất cả các lỗi trong bản tóm tắt kế hoạch cuối cùng và có thể đề xuất các bước khắc phục thủ công cho các lỗi không thể phục hồi.

---

## Khả năng Kế hoạch Trang web (Site Plan Abilities) {#site-plan-abilities}

### `create_site_plan` {#createsiteplan}

Tạo một kế hoạch trang web có cấu trúc từ mô tả mục tiêu bằng ngôn ngữ tự nhiên.

**Tham số (Parameters)**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `goal` | string | Yes | Mô tả bằng ngôn ngữ tự nhiên về trang web mong muốn |
| `style` | string | No | Sở thích về phong cách trực quan: `minimal`, `bold`, `professional`, `playful`. Mặc định: agent tự chọn dựa trên mục tiêu |
| `plugins` | array | No | Các slug plugin cần đưa vào kế hoạch. Bộ điều phối sẽ tự động thêm các plugin bắt buộc. |
| `dry_run` | boolean | No | Nếu là `true`, nó sẽ trả về JSON kế hoạch mà không lưu hoặc thực thi nó. Mặc định `false` |

**Trả về (Returns)** `{ "plan_id": "plan_restaurant_001", "phases": 4, "steps": 14, "plugin_requirements": 1 }`

---

### `execute_site_plan` {#executesiteplan}

Bắt đầu thực thi một kế hoạch trang web đã được tạo trước đó.

**Tham số (Parameters)**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | ID của kế hoạch cần thực thi |
| `auto_install_plugins` | boolean | No | Nếu là `true`, nó sẽ tự động cài đặt các plugin cần thiết mà không cần xác nhận. Mặc định `false` |
| `max_retries` | integer | No | Số lần thử lại một bước thất bại trước khi chuyển sang bước tiếp theo. Mặc định `1` |

**Trả về (Returns)** `{ "execution_id": "exec_001", "status": "started" }`

---

### `get_plan_progress` {#getplanprogress}

Trả về trạng thái thực thi hiện tại của một kế hoạch trang web.

**Tham số (Parameters)**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan ID cần truy vấn |

**Trả về (Returns)** đối tượng tiến độ được mô tả trong [Progress Tracking](#4-theo-dieu-tien-do) ở trên.

---

### `handle_plan_error` {#handleplanerror}

Thủ công giải quyết một bước bị lỗi và tiếp tục thực thi kế hoạch từ bước tiếp theo. Sử dụng khi việc tự động phục hồi không khả thi và bạn muốn can thiệp.

**Tham số (Parameters)**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `plan_id` | string | Yes | Plan ID |
| `step_id` | string | Yes | ID của bước bị lỗi |
| `resolution` | string | Yes | Một trong các giá trị `skip` (bỏ qua và tiếp tục), `retry` (thử lại bước ngay lập tức), hoặc `mark_done` (xem như đã thành công mà không cần chạy lại) |

**Trả về (Returns)** `{ "success": true, "plan_id": "plan_restaurant_001", "resumed_from": "add_menu_item" }`

---

## So sánh v1 và v2 {#comparing-v1-and-v2}

| Tính năng | v1 | v2 |
|---|---|---|
| Kế hoạch đa giai đoạn | Không | Có |
| Tham chiếu đầu ra bước (`__ref:`) | Không | Có |
| Khám phá plugin | Thủ công | Tự động |
| API theo dõi tiến độ | Không | Có |
| Khắc phục lỗi | Thất bại và dừng | Phương án dự phòng + tiếp tục |
| Thực thi bước song song | Không | Có (tùy chọn theo giai đoạn) |
| Lệnh plan WP-CLI | Không | Có |
| Tích hợp Benchmark | Không | Có (`q-restaurant-website`) |

---

## Lệnh Plan WP-CLI {#wp-cli-plan-commands}

### `wp gratis-ai-agent plan create` {#wp-gratis-ai-agent-plan-create}

Tạo một kế hoạch trang web từ mô tả mục tiêu.

```bash
wp gratis-ai-agent plan create "Build a restaurant website with an online menu, booking form, and contact page" [--dry-run] [--output=json]
```

### `wp gratis-ai-agent plan execute` {#wp-gratis-ai-agent-plan-execute}

Thực thi một kế hoạch đã được tạo trước đó.

```bash
wp gratis-ai-agent plan execute plan_restaurant_001 [--auto-install-plugins]
```

### `wp gratis-ai-agent plan status` {#wp-gratis-ai-agent-plan-status}

Hiển thị tiến độ hiện tại cho một kế hoạch đang thực thi hoặc đã hoàn thành.

```bash
wp gratis-ai-agent plan status plan_restaurant_001
```

### `wp gratis-ai-agent plan list` {#wp-gratis-ai-agent-plan-list}

Liệt kê tất cả các kế hoạch trang web (chờ, đang tiến hành và đã hoàn thành).

```bash
wp gratis-ai-agent plan list [--status=<status>] [--format=table|json|csv]
```

### `wp gratis-ai-agent plan reset` {#wp-gratis-ai-agent-plan-reset}

Đặt lại một kế hoạch bị lỗi về trạng thái `pending` để có thể thực thi lại từ đầu.

```bash
wp gratis-ai-agent plan reset plan_restaurant_001
```
