---
id: wu_mcp_abilities_registered
title: عمل - wu_mcp_abilities_registered
sidebar_label: wu_mcp_abilities_registered
_i18n_hash: 141dcbc5c2b46a40bed407541a97e1f5
---
# Action: wu_mcp_abilities_registered {#action-wumcpabilitiesregistered}

یہ عمل (Action) اس وقت ٹرگر ہوتا ہے جب کسی اینٹیٹی کے لیے MCP کی صلاحیتیں (abilities) رجسٹر ہو جاتی ہیں۔

## پیرامیٹرز (Parameters) {#parameters}

| نام (Name) | قسم (Type) | تفصیل (Description) |
|------|------|-------------|
| $ability_prefix | `string` | صلاحیت کا پیشابندی (ability prefix)۔ |
| $model_name | `string` | ماڈل کا نام (model name)۔ |
| $this | `object` | مینیجر کا انسٹنس (manager instance)۔ |

### سے (Since) {#since}

- 2.5.0
### ماخذ (Source) {#source}

[`inc/apis/trait-mcp-abilities.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-mcp-abilities.php#L171) میں لائن 171 پر بیان کیا گیا ہے۔
