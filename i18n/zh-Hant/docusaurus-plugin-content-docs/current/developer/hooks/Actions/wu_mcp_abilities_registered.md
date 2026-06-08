---
id: wu_mcp_abilities_registered
title: Action - wu_mcp_abilities_registered
sidebar_label: wu_mcp_abilities_registered
_i18n_hash: 141dcbc5c2b46a40bed407541a97e1f5
---
# 動作：wu_mcp_abilities_registered

當 MCP 能力為某個實體註冊完成後，此動作會被觸發。

## 參數

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $ability_prefix | `string` | 能力的前綴。 |
| $model_name | `string` | 模型名稱。 |
| $this | `object` | 管理器實例。 |

### 適用版本

- 2.5.0
### 來源

定義於 [`inc/apis/trait-mcp-abilities.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-mcp-abilities.php#L171) 第 171 行
