---
id: wu_mcp_adapter_initialized
title: Действие - wu_mcp_adapter_initialized
sidebar_label: wu_mcp_adapter_initialized
_i18n_hash: 0d5224ab7efaa954ce3d5b5c20e7f8c1
---
# Action: wu_mcp_adapter_initialized {#action-wumcpadapterinitialized}

Вызывается после инициализации адаптера MCP.

Позволяет другим плагинам и темам регистрировать свои собственные возможности.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $mcp_adapter | `\MCP_Adapter` | Экземпляр адаптера MCP. |

### Since {#since}

- 2.5.0

### Source {#source}

Defined in [`inc/class-mcp-adapter.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-mcp-adapter.php#L98) at line 98
