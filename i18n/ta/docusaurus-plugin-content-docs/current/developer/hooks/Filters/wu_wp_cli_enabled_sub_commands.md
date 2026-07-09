---
id: wu_wp_cli_enabled_sub_commands
title: வடிகட்டி - wu_wp_cli_enabled_sub_commands
sidebar_label: wu_wp_cli_enabled_sub_commands
_i18n_hash: 2943f23ce68dd1fdabd034c45131295c
---
# Filter: wu_wp_cli_enabled_sub_commands {#filter-wuwpclienabledsubcommands}

இந்த பொருள் (entity) க்காக எந்த துணை கட்டளைகள் (sub_commands) இயக்கப்பட்டுள்ளன என்பதை வடிகட்டுகிறது.

## அளவுருக்கள் {#parameters}

| Name | Type | விளக்கம் |
|------|------|-------------|
| $sub_commands | `array` | இயல்புநிலை துணை கட்டளைகள். |
| $command_base | `string` | மூலத்திற்கு (root) அடுத்த கட்டளையில் பயன்படுத்தப்படும் அடிப்படை. |
| $this | `\Base_Manager` | பொருள் நிகழ்வு. |

### எப்போது இருந்து {#since}

- 2.0.0
### ஆதாரம் {#source}

[`inc/apis/trait-wp-cli.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-wp-cli.php#L198) இல் 198 வரியில் வரையறுக்கப்பட்டுள்ளது.
