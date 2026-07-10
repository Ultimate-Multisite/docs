---
id: wp_ultimo_render_vars
title: Bộ lọc - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# Bộ lọc: wp_ultimo_render_vars {#filter-wpultimorendervars}

Cho phép các nhà phát triển plugin thêm các biến bổ sung vào ngữ cảnh render (render context) một cách toàn cục.

## Tham số {#parameters}

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| $args | `array` | Mảng chứa các biến được truyền qua lời gọi render. |
| $view | `string` | Tên của view cần được render. |
| $default_view | `string` | Tên của view dự phòng (fallback_view). |

### Từ phiên bản {#since}

- 2.0.0
### Nguồn {#source}

Được định nghĩa trong [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) tại dòng 31


## Giá trị trả về {#returns}
