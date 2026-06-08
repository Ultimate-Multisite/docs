---
id: wu_wp_cli_enabled_sub_commands
title: Filter - wu_wp_cli_enabled_sub_commands
sidebar_label: wu_wp_cli_enabled_sub_commands
_i18n_hash: 2943f23ce68dd1fdabd034c45131295c
---
# Filter: wu_wp_cli_enabled_sub_commands

এই ফিল্টাৰে কোন কোন `sub_commands` এই উপাদানটোৰ বাবে সক্ষম (enabled) হৈ আছে, সেয়া ফিল্টাৰ কৰে।

## পৰামিটারসমূহ (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $sub_commands | `array` | ডিফল্ট উপ-আদেশসমূহ (Default sub_commands)। |
| $command_base | `string` | মূল (root)ৰ ঠিক পিছত ব্যৱহৃত আধাৰ (base)। |
| $this | `\Base_Manager` | বস্তুৰ প্ৰতিলিপি (object instance)। |

### Since

- 2.0.0
### Source

Defined in [`inc/apis/trait-wp-cli.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-wp-cli.php#L198) at line 198
