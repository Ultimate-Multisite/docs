---
id: switch_network
title: Дія - switch_network
sidebar_label: switch_network
_i18n_hash: 40e813a787afb90d335c7dd7b8c93eb2
---
# Дія: switch_network

Викликається, коли перемикається поточний контекст мережі.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $new_network_id | `int` | ID мережі, до якої відбувається перемикання. |
| $old_network_id | `int` | ID попередньо активної мережі. |

### Since {#since}

- 1.3.0
### Source {#source}

Визначено в [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L859) на рядку 859
