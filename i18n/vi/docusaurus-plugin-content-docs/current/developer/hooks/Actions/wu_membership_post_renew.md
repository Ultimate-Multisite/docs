---
id: wu_membership_post_renew
title: Action - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew {#action-wumembershippostrenew}

Hành động này được kích hoạt sau khi thành viên được gia hạn.

## Tham số {#parameters}

| Tên | Kiểu dữ liệu | Mô tả |
|------|------|-------------|
| $expiration | `string` | Ngày hết hạn mới cần được đặt. |
| $membership_id | `int` | ID của thành viên. |
| $membership | `\Membership` | Đối tượng thành viên. |

### Từ phiên bản {#since}

- 2.0
### Nguồn {#source}

Được định nghĩa trong [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) tại dòng 2235
