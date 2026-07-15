---
id: switch_network
title: Действие - switch_network
sidebar_label: switch_network
_i18n_hash: 40e813a787afb90d335c7dd7b8c93eb2
---
# Action: switch_network

Изпълнява се, когато текущият контекст на мрежата бъде сменен.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $new_network_id | `int` | ID на мрежата, към която се превключва. |
| $old_network_id | `int` | ID на предишната текуща мрежа. |

### Since {#since}

- 1.3.0
### Source {#source}

Дефинирано в [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L859) на линия 859
