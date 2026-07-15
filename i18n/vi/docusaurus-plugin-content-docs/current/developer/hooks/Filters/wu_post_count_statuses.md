---
id: wu_post_count_statuses
title: Bộ lọc - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# Bộ lọc: wu_post_count_statuses

Cho phép các nhà phát triển plugin thay đổi những trạng thái bài viết nào được tính. Mặc định, các bài viết đã xuất bản và riêng tư sẽ được tính.

## Tham số {#parameters}

| Tên | Kiểu | Mô tả |
|------|------|-------------|
| $post_status | `array` | Danh sách các trạng thái bài viết |
| $post_type | `string` | Slug loại bài viết |

### Từ phiên bản {#since}

- 1.9.1
### Nguồn {#source}

Được định nghĩa trong [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) tại dòng 119


## Trả về {#returns}
Mảng mới các trạng thái bài viết
