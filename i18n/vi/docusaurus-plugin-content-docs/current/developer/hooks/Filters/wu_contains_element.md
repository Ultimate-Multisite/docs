---
id: wu_contains_element
title: Bộ lọc - wu_contains_element
sidebar_label: wu_contains_element
_i18n_hash: 5254f5cdc4fb5e3992e8987cc4c5d82b
---
# Filter: wu_contains_element {#filter-wucontainselement}

Cho phép các nhà phát triển thay đổi kết quả của quá trình tìm kiếm ban đầu.

Điều này rất hữu ích cho các công cụ xây dựng (builder) của bên thứ ba và các trường hợp tương tự.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $contains_elements | `bool` | Nếu phần tử được chứa trong nội dung. |
| $content | `string` | Nội dung đang được kiểm tra. |
| $element | `self` | Phần tử hiện tại. |
| $post | `null\|\WP_Post` | Bài viết cần kiểm tra. |

### Since {#since}

- 2.0.0
### Source {#source}

Được định nghĩa trong [`inc/ui/class-base-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-base-element.php#L534) tại dòng 534
