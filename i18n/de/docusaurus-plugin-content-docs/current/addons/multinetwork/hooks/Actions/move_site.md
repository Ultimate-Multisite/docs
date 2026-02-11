---
id: move_site
title: Aktion - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Action: move_site

Ausgelöst, nachdem eine Website in ein neues Netzwerk verschoben wurde.

## Parameters

| Name | Typ | Beschreibung |
|------|------|-------------|
| $site_id | `int` | ID der Website, die verschoben wurde. |
| $old_network_id | `int` | ID des ursprünglichen Netzwerks für die Website. |
| $new_network_id | `int` | ID des Netzwerks, in das die Website verschoben wurde. |

### Seit

- 1.3.0

### Quelle

Definiert in [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) at line 1587
