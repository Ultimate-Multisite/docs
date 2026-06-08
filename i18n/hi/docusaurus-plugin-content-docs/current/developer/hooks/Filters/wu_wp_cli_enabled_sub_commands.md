---
id: wu_wp_cli_enabled_sub_commands
title: फ़िल्टर - wu_wp_cli_enabled_sub_commands
sidebar_label: wu_wp_cli_enabled_sub_commands
_i18n_hash: 2943f23ce68dd1fdabd034c45131295c
---
# Filter: wu_wp_cli_enabled_sub_commands

यह फ़िल्टर निर्धारित करता है कि इस इकाई (entity) के लिए कौन से सब-कमांड्स सक्षम (enabled) हैं।

## पैरामीटर्स

| Name | Type | Description |
|------|------|-------------|
| $sub_commands | `array` | डिफ़ॉल्ट सब-कमांड्स। |
| $command_base | `string` | रूट के ठीक बाद उपयोग किया जाने वाला बेस। |
| $this | `\Base_Manager` | ऑब्जेक्ट इंस्टेंस। |

### कब से

- 2.0.0
### स्रोत

[`inc/apis/trait-wp-cli.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-wp-cli.php#L198) में लाइन 198 पर परिभाषित।
