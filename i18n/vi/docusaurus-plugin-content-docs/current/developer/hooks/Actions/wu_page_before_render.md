---
id: wu_page_before_render
title: Hành động - wu_page_before_render
sidebar_label: wu_page_before_render
_i18n_hash: 80ace5356783d6d6ad2789d77480ace2
---
# Action: wu_page_before_render

Cho phép các nhà phát triển plugin thêm nội dung bổ sung trước khi chúng ta hiển thị trang.

## Tham số {#parameters}

| Tên | Kiểu dữ liệu | Mô tả |
|------|------|-------------|
| $page_id | `string` | ID (mã định danh) của trang này. |
| $page | `object` | Đối tượng (object) của trang. |

### Từ phiên bản {#since}

- 1.8.2
### Nguồn {#source}

Được định nghĩa tại [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L388) ở dòng 388
