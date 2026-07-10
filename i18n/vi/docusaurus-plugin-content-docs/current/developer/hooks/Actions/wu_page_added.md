---
id: wu_page_added
title: Action - wu_page_added
sidebar_label: wu_page_added
_i18n_hash: 47cfb26ef6002a24fecf13a0771771ce
---
# Action: wu_page_added {#action-wupageadded}

Cho phép các nhà phát triển plugin thực hiện các hành động bổ sung khi các trang được đăng ký.

Khác với `wu_page_load` (chỉ chạy khi người dùng xem một trang cụ thể), hook này sẽ chạy ngay tại thời điểm đăng ký cho mọi trang admin được thêm bằng code của Ultimate Multisite.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | ID của trang này. |
| $page_hook | `string` | Tên hook của trang này. |

### Since {#since}

- 2.0.0
### Source {#source}

Được định nghĩa trong [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L228) tại dòng 228
