---
id: wu_wp_cli_enabled_sub_commands
title: فیلتر - wu_wp_cli_enabled_sub_commands
sidebar_label: wu_wp_cli_enabled_sub_commands
_i18n_hash: 2943f23ce68dd1fdabd034c45131295c
---
# Filter: wu_wp_cli_enabled_sub_commands

این فیلتر مشخص می‌کند که کدام زیردستورها برای این موجودیت فعال هستند.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $sub_commands | `array` | زیردستورهای پیش‌فرض. |
| $command_base | `string` | پایه‌ای که بلافاصله بعد از ریشه در دستور استفاده می‌شود. |
| $this | `\Base_Manager` | نمونه شیء (object instance). |

### Since

- 2.0.0
### Source

تعریف شده در [`inc/apis/trait-wp-cli.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-wp-cli.php#L198) در خط ۱۹۸
