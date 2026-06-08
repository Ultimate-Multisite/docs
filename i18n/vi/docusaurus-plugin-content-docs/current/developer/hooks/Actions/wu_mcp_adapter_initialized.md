---
id: wu_mcp_adapter_initialized
title: Action - wu_mcp_adapter_initialized
sidebar_label: wu_mcp_adapter_initialized
_i18n_hash: 0d5224ab7efaa954ce3d5b5c20e7f8c1
---
# Action: wu_mcp_adapter_initialized

Hành động này được kích hoạt sau khi bộ điều hợp MCP (MCP adapter) được khởi tạo.

Nó cho phép các plugin và theme khác đăng ký các khả năng của riêng chúng.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $mcp_adapter | `\MCP_Adapter` | Đối tượng (instance) bộ điều hợp MCP. |

### Since

- 2.5.0
### Source

Được định nghĩa tại [`inc/class-mcp-adapter.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-mcp-adapter.php#L98) ở dòng 98
