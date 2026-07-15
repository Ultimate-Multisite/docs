---
id: wu_wp_cli_enabled_sub_commands
title: ตัวกรอง - wu_wp_cli_enabled_sub_commands
sidebar_label: wu_wp_cli_enabled_sub_commands
_i18n_hash: 2943f23ce68dd1fdabd034c45131295c
---
# Filter: wu_wp_cli_enabled_sub_commands

ตัวกรองนี้ใช้กำหนดว่าคำสั่งย่อย (sub_commands) ใดบ้างที่เปิดใช้งานสำหรับเอนทิตี้ (entity) นี้

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sub_commands | `array` | คำสั่งย่อยเริ่มต้น (Default sub_commands) |
| $command_base | `string` | ฐานที่ใช้ในคำสั่งที่อยู่ถัดจากราก (root) |
| $this | `\Base_Manager` | อินสแตนซ์ของอ็อบเจกต์ |

### Since {#since}

- 2.0.0
### Source {#source}

กำหนดไว้ใน [`inc/apis/trait-wp-cli.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-wp-cli.php#L198) บรรทัดที่ 198
