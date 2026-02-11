---
id: switch_network
title: Действие - switch_network
sidebar_label: switch_network
_i18n_hash: 40e813a787afb90d335c7dd7b8c93eb2
---
# Action: switch_network

Вызывается, когда текущий контекст сети переключается.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $new_network_id | `int` | ID сети, на которую производится переключение. |
| $old_network_id | `int` | ID ранее текущей сети. |

### Since

- 1.3.0

### Source

Defined in [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L859) at line 859
