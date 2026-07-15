---
id: wu_page_load
title: Hành động - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load

Cho phép các nhà phát triển plugin thêm các hook bổ sung vào các trang của chúng ta.

## Tham số {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | ID của trang này. |
| $page_hook | `string` | Hook trang của trang này. |
| $admin_page | `self` | Thể hiện (instance) của trang. |

### Từ phiên bản {#since}

- 1.8.2
- 2.0.4: Thêm tham số thứ ba: thể hiện của trang.
### Nguồn {#source}

Được định nghĩa trong [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) tại dòng 318
