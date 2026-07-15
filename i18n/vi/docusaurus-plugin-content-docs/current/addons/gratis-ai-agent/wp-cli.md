---
title: Tài liệu tham khảo WP-CLI
sidebar_position: 3
_i18n_hash: 365bd4ea4c1118b4258408f43a8020fc
---
# Tham khảo WP-CLI

Gratis AI Agent cung cấp nhóm lệnh `wp gratis-ai-agent` để kiểm chuẩn hiệu năng của agent, quản lý các abilities (khả năng) và truy vấn trạng thái của agent từ dòng lệnh. Tất cả các lệnh đều yêu cầu WP-CLI 2.0 trở lên.

## Cài đặt {#installation}

Các lệnh WP-CLI sẽ được đăng ký tự động khi plugin được kích hoạt. Bạn có thể kiểm tra bằng lệnh sau:

```bash
wp gratis-ai-agent --info
```

---

## `wp gratis-ai-agent benchmark` {#wp-gratis-ai-agent-benchmark}

Chạy bộ kiểm chuẩn khả năng của Agent — một bộ các câu hỏi phức tạp, nhiều bước nhằm kiểm tra toàn bộ phạm vi khả năng. Bạn sử dụng lệnh này để đánh giá hiệu năng của model, so sánh các nhà cung cấp AI, hoặc xác thực các gói khả năng trước khi triển khai vào môi trường production.

### Tổng quan cú pháp {#synopsis}

```bash
wp gratis-ai-agent benchmark [--question=<id>] [--provider=<provider>] [--model=<model>] [--output=<format>] [--save]
```

### Tùy chọn {#options}

| Option | Mô tả |
|---|---|
| `--question=<id>` | Chạy một câu hỏi kiểm chuẩn đơn lẻ bằng ID thay vì toàn bộ bộ kiểm chuẩn |
| `--provider=<provider>` | Ghi đè nhà cung cấp AI đã cấu hình cho lần chạy này (ví dụ: `anthropic`, `openai`) |
| `--model=<model>` | Ghi đè model đã cấu hình cho lần chạy này (ví dụ: `claude-opus-4-6`, `gpt-4o`) |
| `--output=<format>` | Định dạng đầu ra: `table` (mặc định), `json`, `csv` |
| `--save` | Lưu kết quả kiểm chuẩn vào cơ sở dữ liệu để so sánh lịch sử |

### Ví dụ {#examples}

Chạy toàn bộ bộ kiểm chuẩn với nhà cung cấp và model hiện tại:

```bash
wp gratis-ai-agent benchmark
```

Chạy một câu hỏi đơn lẻ (`q-restaurant-website`) và xuất kết quả dưới dạng JSON:

```bash
wp gratis-ai-agent benchmark --question=q-restaurant-website --output=json
```

Chạy với một model cụ thể và lưu kết quả:

```bash
wp gratis-ai-agent benchmark --model=claude-opus-4-6 --save
```

### Đầu ra {#output}

Bộ kiểm chuẩn sẽ xuất ra một hàng cho mỗi câu hỏi với các cột sau:

| Column | Mô tả |
|---|---|
| `ID` | Mã định danh câu hỏi |
| `Description` | Tóm tắt ngắn gọn về kịch bản kiểm chuẩn |
| `Score` | Điểm đạt/không đạt hoặc điểm số số (0–100) |
| `Abilities Used` | Danh sách các abilities được gọi, phân cách bằng dấu phẩy |
| `Tokens` | Tổng số tokens đã tiêu thụ |
| `Duration` | Thời gian thực tế tính bằng giây |

```
ID                       Description                         Score  Abilities Used               Tokens  Duration
q-portfolio-site         Create a portfolio CPT with tags    100    register_post_type, reg...   4821    18.3s
q-restaurant-website     Build a full restaurant website     92     create_site_plan, execut...  12430   54.1s
q-dark-mode-theme        Apply a dark theme preset           100    apply_theme_json_preset      986     4.2s
...
```

### Các câu hỏi kiểm chuẩn {#benchmark-questions}

Bộ mặc định bao gồm:

| ID | Kịch bản |
|---|---|
| `q-portfolio-site` | Tạo CPT Portfolio với taxonomy Project Category và đăng ký một block pattern |
| `q-restaurant-website` | Xây dựng một trang web nhà hàng hoàn chỉnh với CPT menu, form đặt chỗ và điều hướng |
| `q-dark-mode-theme` | Áp dụng preset thiết kế chế độ tối và tiêm màu thương hiệu |
| `q-nav-builder` | Tạo menu điều hướng chính bốn mục với menu thả xuống lồng nhau |
| `q-options-roundtrip` | Đọc, sửa đổi và khôi phục một bộ các tùy chọn WordPress |
| `q-ability-install` | Khám phá và cài đặt gói abilities phù hợp nhất cho một trường hợp sử dụng được mô tả |

Các câu hỏi bổ sung có thể được đăng ký thông qua filter `gratis_ai_agent_benchmark_questions`.

---

## `wp gratis-ai-agent abilities` {#wp-gratis-ai-agent-abilities}

Quản lý các abilities và các gói abilities đã được cài đặt.

### `wp gratis-ai-agent abilities list` {#wp-gratis-ai-agent-abilities-list}

Liệt kê tất cả các abilities đã đăng ký, nguồn gốc của chúng (core hay pack), và trạng thái hiện tại.

```bash
wp gratis-ai-agent abilities list [--format=<format>]
```

**Tùy chọn**

| Option | Mô tả |
|---|---|
| `--format=<format>` | Định dạng đầu ra: `table` (mặc định), `json`, `csv` |

**Ví dụ đầu ra**

```
Ability                   Source                          Status
register_post_type        gratis-ai-agent (core)          active
list_post_types           gratis-ai-agent (core)          active
delete_post_type          gratis-ai-agent (core)          active
register_taxonomy         gratis-ai-agent (core)          active
inject_custom_css         gratis-ai-agent (core)          active
apply_theme_json_preset   gratis-ai-agent (core)          active
create_product            gratis-ai-agent-woocommerce     active
```

---

### `wp gratis-ai-agent abilities install` {#wp-gratis-ai-agent-abilities-install}

Tải xuống và kích hoạt một gói abilities từ registry.

```bash
wp gratis-ai-agent abilities install <slug>
```

**Đối số**

| Argument | Mô tả |
|---|---|
| `<slug>` | Slug của plugin gói abilities, ví dụ: `gratis-ai-agent-woocommerce` |

**Ví dụ**

```bash
wp gratis-ai-agent abilities install gratis-ai-agent-woocommerce
Success: Installed gratis-ai-agent-woocommerce. Added 3 abilities: create_product, update_pricing, manage_inventory.
```

---

### `wp gratis-ai-agent abilities disable` {#wp-gratis-ai-agent-abilities-disable}

Vô hiệu hóa một ability cụ thể mà không xóa gói abilities đó. Hữu ích khi cần giới hạn phạm vi hoạt động của agent trên một trang web nhất định.

```bash
wp gratis-ai-agent abilities disable <ability>
```

**Ví dụ**

```bash
wp gratis-ai-agent abilities disable delete_post_type
Success: Ability 'delete_post_type' disabled.
```

---

### `wp gratis-ai-agent abilities enable` {#wp-gratis-ai-agent-abilities-enable}

Bật lại một ability đã bị vô hiệu hóa trước đó.

```bash
wp gratis-ai-agent abilities enable <ability>
```

---

## `wp gratis-ai-agent status` {#wp-gratis-ai-agent-status}

Hiển thị cấu hình agent và trạng thái kết nối hiện tại.

```bash
wp gratis-ai-agent status
```

**Ví dụ đầu ra**

```
Plugin Version:    1.4.0
AI Provider:       Anthropic
Model:             claude-sonnet-4-6
Provider Status:   Connected
Abilities Loaded:  24
Benchmark Results: 3 saved runs (last: 2026-04-15)
Options Blocklist: 18 entries
```

---

## `wp gratis-ai-agent logs` {#wp-gratis-ai-agent-logs}

Hiển thị các hoạt động gần đây của agent từ log debug.

```bash
wp gratis-ai-agent logs [--last=<n>] [--level=<level>] [--ability=<ability>]
```

**Tùy chọn**

| Option | Mô tả |
|---|---|
| `--last=<n>` | Hiển thị N mục log gần nhất. Mặc định là `50` |
| `--level=<level>` | Lọc theo mức độ: `info`, `warning`, `error` |
| `--ability=<ability>` | Lọc theo tên ability |

**Ví dụ**

```bash
wp gratis-ai-agent logs --last=20 --level=error
```

---

## `wp gratis-ai-agent reset` {#wp-gratis-ai-agent-reset}

Đặt lại trạng thái agent: xóa CSS được tiêm vào, loại bỏ các CPT và taxonomy do agent đăng ký, đặt lại các style toàn cục, và làm trống bộ nhớ cache tùy chọn của agent. Lệnh này không xóa plugin hoặc các cài đặt của nó.

```bash
wp gratis-ai-agent reset [--yes]
```

Thêm `--yes` để bỏ qua lời nhắc xác nhận.

```bash
wp gratis-ai-agent reset --yes
Success: Agent state reset. Cleared: 2 post types, 1 taxonomy, custom CSS, global styles overrides.
```

---

## Mã thoát (Exit Codes) {#exit-codes}

Tất cả các lệnh đều thoát với mã `0` khi thành công. Các mã thoát khác `0`:

| Code | Ý nghĩa |
|---|---|
| `1` | Lỗi chung (xem thông báo lỗi) |
| `2` | Lỗi kết nối nhà cung cấp |
| `3` | Ability không tìm thấy |
| `4` | Câu hỏi kiểm chuẩn không tìm thấy |
