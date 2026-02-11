---
id: networks_pre_user_is_network_admin
title: Filter - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin

Filtert die Netzwerke, für die ein Benutzer Administrator ist, um den Prozess abzukürzen.

## Parameters

| Name | Typ | Beschreibung |
|------|------|-------------|
| $ | `array\|bool\|null` | Liste von Netzwerk-IDs oder false. Alles außer null führt dazu, dass der Prozess abgekürzt wird. |
| $ | `int` | Benutzer-ID, für die die Netzwerke zurückgegeben werden sollen. |

### Since

- 2.0.0

### Source

Definiert in [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) in Zeile 688
