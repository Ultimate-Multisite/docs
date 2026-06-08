---
id: wu_wp_cli_enabled_sub_commands
title: Filter - wu_wp_cli_enabled_sub_commands
sidebar_label: wu_wp_cli_enabled_sub_commands
_i18n_hash: 2943f23ce68dd1fdabd034c45131295c
---
# Filter: wu_wp_cli_enabled_sub_commands

Filter koji određuje koje podkomande su omogućene za ovaj entitet.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $sub_commands | `array` | Podrazumijevane podkomande. |
| $command_base | `string` | Osnova korištena u komandi odmah nakon korijena. |
| $this | `\Base_Manager` | Instanca objekta. |

### Od verzije

- 2.0.0
### Izvorni kod

Definisano je u [`inc/apis/trait-wp-cli.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-wp-cli.php#L198) na liniji 198
