---
id: wu_wp_cli_enabled_sub_commands
title: Bộ lọc - wu_wp_cli_enabled_sub_commands
sidebar_label: wu_wp_cli_enabled_sub_commands
_i18n_hash: 2943f23ce68dd1fdabd034c45131295c
---
# Filter: wu_wp_cli_enabled_sub_commands

Bộ lọc này xác định các lệnh con (sub_commands) nào được kích hoạt cho thực thể này.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sub_commands | `array` | Các lệnh con mặc định. |
| $command_base | `string` | Cơ sở được sử dụng trong lệnh ngay sau lệnh gốc (root). |
| $this | `\Base_Manager` | Đối tượng thể hiện. |

### Since {#since}

- 2.0.0
### Source {#source}

Được định nghĩa trong [`inc/apis/trait-wp-cli.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-wp-cli.php#L198) tại dòng 198
