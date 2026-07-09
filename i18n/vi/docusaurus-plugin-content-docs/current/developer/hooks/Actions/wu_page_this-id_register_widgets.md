---
id: wu_page_this-id_register_widgets
title: 'Hành động - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_{$this->id}_register_widgets {#action-wupagethis-idregisterwidgets}

Được kích hoạt sau khi các widget được đăng ký cho trang này.

Phần động của tên hook, `$this->id`, dùng để chỉ ID của trang.

## Tham số {#parameters}

| Tên | Kiểu dữ liệu | Mô tả |
|------|------|-------------|
| $id | `string` | ID của trang. |
| $page_hook | `string` | Hook của trang. |
| $page | `object` | Đối tượng trang. |

### Từ phiên bản {#since}

- 2.4.10
### Nguồn {#source}

Được định nghĩa trong [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) tại dòng 755
