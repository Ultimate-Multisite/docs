---
id: switch_network
title: Akció - switch_network
sidebar_label: switch_network
_i18n_hash: 40e813a787afb90d335c7dd7b8c93eb2
---
# Action: switch_network {#action-switchnetwork}

Elkicking, amikor a jelenlegi hálózat kontextusa átvált.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $new_network_id | `int` | Az ID-je annak a hálózatnak, amire átváltanak. |
| $old_network_id | `int` | Az ID-je az előzőleg aktív hálózatnak. |

###óta

- 1.3.0
### Forrás {#since}

Meghatározva a [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L859) fájlban, 859-sorban.
