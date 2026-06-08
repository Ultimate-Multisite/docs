---
id: get_blogs_of_user
title: Bộ lọc - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

Tái tạo lại bộ lọc WP gốc tại đây để đảm bảo tính nhất quán.

Lọc danh sách các trang web (sites) mà một người dùng thuộc về.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | Một mảng các đối tượng trang web thuộc về người dùng. |
| $user_id | `int` | ID người dùng. |
| $all | `bool` | Xác định xem mảng các trang web trả về có nên chứa tất cả các trang, bao gồm cả những trang được đánh dấu là 'deleted', 'archived', hoặc 'spam' hay không. Mặc định là `false`. |

### Since

- 2.0.11
### Source

Được định nghĩa trong [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) tại dòng 851
