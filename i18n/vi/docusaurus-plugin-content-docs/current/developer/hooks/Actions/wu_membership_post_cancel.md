---
id: wu_membership_post_cancel
title: Hành động - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Action: wu_membership_post_cancel

Kích hoạt sau khi tư cách thành viên bị hủy.

Hành động này sẽ kích hoạt email thông báo hủy thành viên.

## Tham số

| Name | Type | Description |
|------|------|-------------|
| $membership_id | `int` | ID của tư cách thành viên. |
| $membership | `\WP_Ultimo\Models\Membership` | Đối tượng thành viên. |

### Từ phiên bản

- 2.0
### Nguồn

Được định nghĩa tại [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) ở dòng 2290
