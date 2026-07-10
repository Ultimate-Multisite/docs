---
id: wu_post_count
title: Bộ lọc - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# Bộ lọc: wu_post_count {#filter-wupostcount}

Cho phép các nhà phát triển plugin thay đổi tổng số lượng đếm.

## Tham số {#parameters}

| Tên | Kiểu dữ liệu | Mô tả |
|------|------|-------------|
| $count | `int` | Tổng số bài viết. |
| $post_counts | `object` | Đối tượng WordPress được trả về bởi hàm `wp_count_posts`. |
| $post_type | `string` | Slug (định danh) của loại bài viết. |

### Từ phiên bản {#since}

- 1.9.1
### Nguồn {#source}

Được định nghĩa trong [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) tại dòng 136


## Giá trị trả về {#returns}
Tổng mới
