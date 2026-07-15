---
id: wu_mcp_abilities_registered
title: Action - wu_mcp_abilities_registered
sidebar_label: wu_mcp_abilities_registered
_i18n_hash: 141dcbc5c2b46a40bed407541a97e1f5
---
# Action: wu_mcp_abilities_registered

जब किसी इकाई (entity) के लिए MCP क्षमताएं (abilities) पंजीकृत हो जाती हैं, तो यह ट्रिगर होता है।

## पैरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $ability_prefix | `string` | क्षमता उपसर्ग (ability prefix)। |
| $model_name | `string` | मॉडल का नाम (model name)। |
| $this | `object` | मैनेजर का इंस्टेंस (manager instance)। |

### से {#since}

- 2.5.0
### स्रोत {#source}

[`inc/apis/trait-mcp-abilities.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-mcp-abilities.php#L171) में लाइन 171 पर परिभाषित।
