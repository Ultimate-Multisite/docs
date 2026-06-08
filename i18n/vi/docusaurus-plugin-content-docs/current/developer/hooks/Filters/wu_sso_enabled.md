---
id: wu_sso_enabled
title: Bộ lọc - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled

Bật/tắt khả năng đăng nhập một lần (single-sign-on) qua các miền khác nhau (cross-domain).

Bạn có thể lọc giá trị này để tắt hoàn toàn tính năng đăng nhập một lần, hoặc bật nó theo điều kiện thay thế.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enabled | `bool` | Có nên bật SSO không? `True` là bật, `false` là tắt. |

### Since

- 2.0.11
### Source

Được định nghĩa trong [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) tại dòng 110


## Returns
Giá trị cho biết liệu SSO có được bật hay không.
