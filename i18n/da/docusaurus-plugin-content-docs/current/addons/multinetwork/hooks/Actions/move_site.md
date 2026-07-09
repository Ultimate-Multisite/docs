---
id: move_site
title: Handling - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Handling: move_site

Udløses, efter et websted er blevet flyttet til et nyt netværk.

## Parametre

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $site_id | `int` | ID for webstedet, der er blevet flyttet. |
| $old_network_id | `int` | ID for det oprindelige netværk for webstedet. |
| $new_network_id | `int` | ID for netværket, som webstedet er blevet flyttet til. |

### Siden

- 1.3.0
### Kilde

Defineret i [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) på linje 1587
