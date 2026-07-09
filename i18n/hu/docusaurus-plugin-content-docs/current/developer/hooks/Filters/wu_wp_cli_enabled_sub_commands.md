---
id: wu_wp_cli_enabled_sub_commands
title: Filter - wu_wp_cli_enabled_sub_commands
sidebar_label: wu_wp_cli_enabled_sub_commands
_i18n_hash: 2943f23ce68dd1fdabd034c45131295c
---
# Szűrő: wu_wp_cli_enabled_sub_commands {#filter-wuwpclienabledsubcommands}

Ez a szűrő határozza meg, hogy mely alt-parancsok (sub_commands) vannak engedélyezve az adott entitás számára.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $sub_commands | `array` | Az alapértelmezett alt-parancsok listája. |
| $command_base | `string` | Az alap, amelyet a gyökér után követi a parancs. |
| $this | `\Base_Manager` | Az objektum példányát. |

### Since {#since}

- 2.0.0
### Source {#source}

Definíciója található [`inc/apis/trait-wp-cli.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/apis/trait-wp-cli.php#L198) fájlban, 198-sorban.
