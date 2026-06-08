---
id: wu_mcp_abilities_registered
title: Action - wu_mcp_abilities_registered
sidebar_label: wu_mcp_abilities_registered
_i18n_hash: 141dcbc5c2b46a40bed407541a97e1f5
---
# Action: wu_mcp_abilities_registered

Được kích hoạt sau khi các khả năng MCP được đăng ký cho một thực thể.

## Tham số

| Tên | Kiểu dữ liệu | Mô tả |
|------|------|-------------|
| $ability_prefix | `string` | Tiền tố khả năng. |
| $model_name | `string` | Tên mô hình. |
| $this | `object` | Đối tượng quản lý (manager instance). |

### Từ phiên bản

- 2.5.0
### Nguồn

Được định nghĩa trong [`inc/apis/trait-mcp-abilities.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-mcp-abilities.php#L171) tại dòng 171
