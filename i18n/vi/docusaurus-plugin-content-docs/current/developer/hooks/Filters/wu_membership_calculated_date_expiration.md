---
id: wu_membership_calculated_date_expiration
title: Bộ lọc - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# Bộ lọc: wu_membership_calculated_date_expiration

Bộ lọc này dùng để lọc ngày hết hạn được tính toán.

## Tham số {#parameters}

| Tên | Kiểu dữ liệu | Mô tả |
|------|------|-------------|
| $expiration | `string` | Ngày hết hạn được tính toán theo định dạng MySQL. |
| $membership_id | `int` | ID của tư cách thành viên. |
| $membership | `\WP_Ultimo\Models\Membership` | Đối tượng thành viên. |

### Từ phiên bản {#since}

- 2.0
### Nguồn {#source}

Được định nghĩa trong [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) tại dòng 1309
