---
id: wu_mcp_abilities_registered
title: Action - wu_mcp_abilities_registered
sidebar_label: wu_mcp_abilities_registered
_i18n_hash: 141dcbc5c2b46a40bed407541a97e1f5
---
# Action: wu_mcp_abilities_registered {#action-wumcpabilitiesregistered}

ஒரு நிறுவனத்திற்கு (entity) MCP திறன்கள் (abilities) பதிவு செய்யப்பட்ட பிறகு இது தூண்டப்படுகிறது.

## அளவுருக்கள் {#parameters}

| பெயர் | வகை | விளக்கம் |
|------|------|-------------|
| $ability_prefix | `string` | திறனின் முன்னொட்டு (ability prefix). |
| $model_name | `string` | மாதிரிப் பெயர் (model name). |
| $this | `object` | மேலாளர் நிகழ்வு (manager instance). |

### இருந்தே {#since}

- 2.5.0
### மூலம் {#source}

[`inc/apis/trait-mcp-abilities.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-mcp-abilities.php#L171) என்ற கோப்பில் 171 வரியில் வரையறுக்கப்பட்டுள்ளது.
