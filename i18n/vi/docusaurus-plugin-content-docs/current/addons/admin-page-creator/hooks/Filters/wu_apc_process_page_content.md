---
id: wu_apc_process_page_content
title: Bộ lọc - wu_apc_process_page_content
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# Bộ lọc: wu_apc_process_page_content

Cho phép các nhà phát triển tùy chỉnh nội dung cuối cùng.

## Tham số

| Tên | Kiểu dữ liệu | Mô tả |
|------|------|-------------|
| $content | `string` | Nội dung sau khi thực hiện các thay thế. |
| $content_before_processing | `string` | Nội dung trước khi thực hiện các thay thế. |
| $to_replace | `array` | Mảng chứa các placeholder (vị trí giữ chỗ). |
| $placeholder_count | `int` | Số lượng placeholder được tìm thấy. |

### Từ phiên bản

- 1.4.0
### Nguồn

Được định nghĩa trong [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) tại dòng 46

## Giá trị trả về
Nội dung sau khi được chỉnh sửa.
