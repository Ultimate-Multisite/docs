---
id: wu_mcp_abilities_registered
title: Action - wu_mcp_abilities_registered
sidebar_label: wu_mcp_abilities_registered
_i18n_hash: 141dcbc5c2b46a40bed407541a97e1f5
---
# Action: wu_mcp_abilities_registered

จะถูกเรียกใช้หลังจากที่ความสามารถ (abilities) ของ MCP ถูกลงทะเบียนสำหรับเอนทิตี้ (entity) นั้นแล้ว

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $ability_prefix | `string` | คำนำหน้าของความสามารถ (ability prefix) |
| $model_name | `string` | ชื่อโมเดล (model name) |
| $this | `object` | อินสแตนซ์ของตัวจัดการ (manager instance) |

### Since

- 2.5.0
### Source

กำหนดไว้ใน [`inc/apis/trait-mcp-abilities.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-mcp-abilities.php#L171) บรรทัดที่ 171
