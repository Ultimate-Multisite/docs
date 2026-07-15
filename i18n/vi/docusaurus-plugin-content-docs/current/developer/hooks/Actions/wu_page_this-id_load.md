---
id: wu_page_this-id_load
title: 'Hành động - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_{$this->id}_load

Cho phép các nhà phát triển plugin thêm các hook bổ sung vào các trang của chúng ta.

## Tham số {#parameters}

| Tên | Kiểu dữ liệu | Mô tả |
|------|------|-------------|
| $id | `string` | ID của trang này. |
| $page_hook | `string` | Hook của trang này. |
| $admin_page | `self` | Thể hiện (instance) của trang. |

### Từ phiên bản {#since}

- 1.8.2
- 2.0.4: Thêm tham số thứ ba: thể hiện trang.
### Nguồn {#source}

Được định nghĩa tại [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) ở dòng 332
