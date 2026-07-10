---
id: wu_mcp_include_ability
title: ตัวกรอง - wu_mcp_include_ability
sidebar_label: wu_mcp_include_ability
_i18n_hash: 5925d523ccf0a8d9477e873ec3d891c0
---
# Filter: wu_mcp_include_ability {#filter-wumcpincludeability}

ตัวกรองนี้ใช้สำหรับเขียนทับการตัดสินใจว่าจะรวมความสามารถ (ability) ของ MCP หรือไม่

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $include | `bool` | กำหนดว่าต้องการรวมความสามารถนี้หรือไม่ |
| $ability_id | `string` | ID ของความสามารถ (ability ID) |

### Since {#since}

- 2.4.8
### Source {#source}

ถูกกำหนดไว้ใน [`inc/class-mcp-adapter.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-mcp-adapter.php#L286) ที่บรรทัด 286
