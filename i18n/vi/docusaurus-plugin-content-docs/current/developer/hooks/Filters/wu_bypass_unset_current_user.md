---
id: wu_bypass_unset_current_user
title: Bộ lọc - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

Giúp các nhà phát triển bỏ qua đoạn mã hủy (unset) người dùng hiện tại.

Việc trả về bất kỳ giá trị nào khác `null` sẽ giúp bỏ qua việc xóa người dùng đang đăng nhập. Điều này rất hữu ích trong một số trường hợp, chẳng hạn như khi bạn làm việc với các sub-site được sử dụng như các bảng điều khiển quản trị (admin panels).

## Tham số

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | `null` để bỏ qua, bất cứ giá trị nào khác để bỏ qua nó. |
| $current_user | `false\|\WP_User` | Đối tượng người dùng hiện tại. |

### Từ phiên bản

- 2.0.11
### Nguồn

Được định nghĩa trong [`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) tại dòng 221

## Giá trị trả về
