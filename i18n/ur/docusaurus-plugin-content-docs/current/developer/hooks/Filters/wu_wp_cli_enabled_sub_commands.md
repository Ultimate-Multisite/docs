---
id: wu_wp_cli_enabled_sub_commands
title: فلٹر - wu_wp_cli_enabled_sub_commands
sidebar_label: wu_wp_cli_enabled_sub_commands
_i18n_hash: 2943f23ce68dd1fdabd034c45131295c
---
# Filter: wu_wp_cli_enabled_sub_commands

یہ فلٹر طے کرتا ہے کہ اس اینٹیٹی کے لیے کون سے `sub_commands` استعمال کے لیے فعال (enabled) ہیں۔

## پیرامیٹرز (Parameters)

| Name | Type | وضاحت (Description) |
|------|------|-------------|
| $sub_commands | `array` | ڈیفالٹ ذیلی کمانڈز (sub_commands)۔ |
| $command_base | `string` | وہ بیس (base) جو کمانڈ میں روٹ کے فوراً بعد استعمال ہوتا ہے۔ |
| $this | `\Base_Manager` | آبجیکٹ کا انسٹنس (object instance)۔ |

### سے (Since)

- 2.0.0
### ماخذ (Source)

Defined in [`inc/apis/trait-wp-cli.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-wp-cli.php#L198) at line 198
