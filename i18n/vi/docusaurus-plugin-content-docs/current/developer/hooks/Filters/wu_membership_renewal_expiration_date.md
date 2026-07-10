---
id: wu_membership_renewal_expiration_date
title: Bộ lọc - wu_membership_renewal_expiration_date
sidebar_label: wu_membership_renewal_expiration_date
_i18n_hash: 607ec1f0ab833a4fd312f7c6b9e0182f
---
# Bộ lọc: wu_membership_renewal_expiration_date {#filter-wumembershiprenewalexpirationdate}

Lọc ngày hết hạn được tính toán để đảm bảo nó được đặt sau ngày gia hạn.

## Tham số {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Ngày hết hạn được tính toán. |
| $plan | `\Product` | Đối tượng cấp độ thành viên. |
| $membership_id | `int` | ID của thành viên. |
| $membership | `\Membership` | Đối tượng thành viên. |

### Từ phiên bản {#since}

- 2.0.0
### Nguồn {#source}

Được định nghĩa tại [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2192) ở dòng 2192
