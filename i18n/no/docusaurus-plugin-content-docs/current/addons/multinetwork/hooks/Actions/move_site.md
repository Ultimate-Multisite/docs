---
id: move_site
title: Handling - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Action: move_site

Kjøres etter at et nettsted er flyttet til et nytt nettverk.

## Parametere

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $site_id | `int` | ID-en til nettstedet som ble flyttet. |
| $old_network_id | `int` | ID-en til det opprinnelige nettverket for nettstedet. |
| $new_network_id | `int` | ID-en til nettverket nettstedet ble flyttet til. |

### Siden

- 1.3.0
### Kilde

Definert i [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) på linje 1587
