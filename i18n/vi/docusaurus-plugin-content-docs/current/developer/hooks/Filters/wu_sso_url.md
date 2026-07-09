---
id: wu_sso_url
title: Bộ lọc - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Bộ lọc: wu_sso_url

Lọc các URL SSO đã tạo trước khi chúng được trả về cho các hành động khách hàng liên miền.

Sử dụng bộ lọc này khi một tích hợp cần thêm ngữ cảnh đáng tin cậy vào liên kết SSO sovereign-tenant hoặc thay thế URL broker trong khi vẫn giữ nguyên việc xác thực token của Ultimate Multisite.

## Tham số

| Name | Type | Description |
|------|------|-------------|
| $sso_url | `string` | URL SSO đã tạo. |
| $user | `WP_User` | Người dùng sẽ được xác thực bởi lượt truy cập SSO. |
| $site_id | `int` | ID site mục tiêu cho lượt truy cập. |
| $redirect_to | `string` | URL đích sau khi xác thực SSO thành công. |

### Kể từ

- 2.13.0

### Nguồn

Được định nghĩa trong `inc/sso/class-sso.php`.


## Giá trị trả về

URL SSO đã được lọc.
