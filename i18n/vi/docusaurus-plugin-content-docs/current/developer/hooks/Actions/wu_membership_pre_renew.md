---
id: wu_membership_pre_renew
title: Action - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew {#action-wumembershipprerenew}

Hành động này được kích hoạt trước khi gia hạn tư cách thành viên.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Ngày hết hạn mới cần được đặt. |
| $membership_id | `int` | ID của tư cách thành viên. |
| $membership | `\Membership` | Đối tượng thành viên. |

### Since {#since}

- 2.0
### Source {#source}

Được định nghĩa trong [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) tại dòng 2204
